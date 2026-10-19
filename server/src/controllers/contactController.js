import { validationResult } from "express-validator";
import nodemailer from "nodemailer";
import { ContactMessage } from "../models/ContactMessage.js";
import { getDbStatus } from "../config/db.js";

// In-memory messages backup when MongoDB is offline during local test
const memoryMessages = [];

// Helper to create Nodemailer transporter
const createTransporter = () => {
  const service = process.env.EMAIL_SERVICE || "gmail";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (user && pass && pass !== "demo_app_password" && pass !== "your_gmail_app_password_here") {
    return nodemailer.createTransport({
      service,
      auth: { user, pass },
    });
  }

  // Fallback test transporter (mock)
  return null;
};

// POST /api/contact
export const submitContact = async (req, res, next) => {
  try {
    // 1. Check validation results from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        errors: errors.array().map((err) => ({ field: err.path, msg: err.msg })),
      });
    }

    const { name, email, message } = req.body;
    const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";

    // 2. Save message to MongoDB or local fallback
    let savedRecord = null;
    if (getDbStatus()) {
      try {
        savedRecord = await ContactMessage.create({
          name,
          email,
          message,
          ipAddress: String(ipAddress),
          userAgent: String(userAgent),
        });
        console.log(`[Contact] Message saved to MongoDB with ID: ${savedRecord._id}`);
      } catch (dbErr) {
        console.warn(`[Contact] Could not write to MongoDB, saving in memory: ${dbErr.message}`);
        memoryMessages.push({ name, email, message, createdAt: new Date() });
      }
    } else {
      memoryMessages.push({ name, email, message, createdAt: new Date() });
      console.log(`[Contact] Saved to in-memory store (Total messages: ${memoryMessages.length})`);
    }

    // 3. Send email notification via Nodemailer
    const transporter = createTransporter();
    const recipient = process.env.TO_EMAIL || "shubhamkharbad15@gmail.com";

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: recipient,
          replyTo: email,
          subject: `✨ New Portfolio Inquiry from ${name}`,
          text: `You received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent on: ${new Date().toLocaleString()}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #6366f1; margin-top: 0;">✨ New Portfolio Message</h2>
              <p style="color: #64748b; font-size: 14px;">Someone reached out via your portfolio website form:</p>
              
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
                <p style="margin: 0 0 8px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
              </div>

              <div style="background-color: #ffffff; border-left: 4px solid #6366f1; padding: 12px 16px; margin: 20px 0;">
                <h4 style="margin: 0 0 8px 0; color: #1e293b;">Message Content:</h4>
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

              <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">This notification was automatically sent by your Portfolio Backend API.</p>
            </div>
          `,
        });
        console.log(`[Nodemailer] Email dispatched successfully to ${recipient}`);
      } catch (mailError) {
        console.warn(`[Nodemailer] Dispatch notice: ${mailError.message}`);
      }
    } else {
      console.log(`[Nodemailer Simulation] In production, email would be dispatched to: ${recipient}`);
      console.log(`[Nodemailer Simulation] From: ${name} (${email})`);
      console.log(`[Nodemailer Simulation] Message: ${message.substring(0, 100)}...`);
    }

    // 4. Return success response to user
    res.status(201).json({
      success: true,
      message: "Thank you, Shubham! Your message has been received successfully. I will get back to you shortly.",
      data: {
        name,
        email,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
