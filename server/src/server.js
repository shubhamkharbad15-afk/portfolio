import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { connectDB, getDbStatus } from "./config/db.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows flexible integration in dev
    crossOriginEmbedderPolicy: false,
  })
);

// CORS Configuration
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, postman)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        process.env.NODE_ENV === "development" ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".onrender.com")
      ) {
        return callback(null, true);
      }
      return callback(new Error(`CORS Policy: Origin ${origin} not allowed`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Request parsing & sanitization limits
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

// General API rate limiting
app.use("/api", apiLimiter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: getDbStatus() ? "connected" : "fallback-store",
    environment: process.env.NODE_ENV || "development",
  });
});

// Mount Routes
app.use("/api", portfolioRoutes);
app.use("/api", contactRoutes);

// 404 & Centralized Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`==============================================`);
    console.log(`🚀 Portfolio API Server running on port ${PORT}`);
    console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`📡 Client URL:   ${process.env.CLIENT_URL || "http://localhost:5173"}`);
    console.log(`==============================================`);
  });
};

startServer();

export default app;
