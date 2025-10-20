import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email notification endpoint for the "Would you be mine?" question
  app.post("/api/notify", async (req, res) => {
    try {
      const { response, noClickCount } = req.body;
      
      if (!response) {
        return res.status(400).json({ error: "Response is required" });
      }

      // Email notification configuration
      const emailConfig = {
        to: process.env.NOTIFICATION_EMAIL || "amiazreal@gmail.com",
        subject: response === "yes" ? "💖 She said YES!" : "💔 Not this time...",
        message: response === "yes" 
          ? "Yes, you are mine now 💖"
          : `Sorry, we can't work 💔 (She clicked "No" ${noClickCount} times)`,
      };

      console.log("📧 Email notification would be sent:", emailConfig);
      
      // TODO: When hosting elsewhere, add your email service provider here
      // Example services: Nodemailer with Gmail, SendGrid, Resend, etc.
      // For now, notifications are logged to console
      
      res.json({ 
        success: true, 
        message: "Notification logged (email integration pending setup)",
        emailConfig 
      });
    } catch (error) {
      console.error("Error sending notification:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
