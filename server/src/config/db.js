import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000, // Quick timeout for local resilience
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB] Connection notice: ${error.message}`);
    console.warn("[MongoDB] Operating in local resilient fallback mode (in-memory/file storage).");
  }
};

export const getDbStatus = () => isConnected;
