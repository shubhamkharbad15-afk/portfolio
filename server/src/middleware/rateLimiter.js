import rateLimit from "express-rate-limit";

// General API rate limiter
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: "Too many requests from this IP, please try again after 15 minutes",
  },
});

// Stricter rate limiter for contact form submission
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact submissions per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: "Too many contact submissions from this IP. Please wait a few minutes before trying again or email shubhamkharbad15@gmail.com directly.",
  },
});
