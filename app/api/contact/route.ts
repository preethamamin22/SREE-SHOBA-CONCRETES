import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, concreteGrade, quantity, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email notification via Nodemailer (configure SMTP env vars)
    const nodemailer = await import("nodemailer");
    
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    
    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Sree Shoba Concretes Website" <${process.env.SMTP_USER}>`,
        to: "sreeshobaconcretes@gmail.com",
        replyTo: email,
        subject: `New Quote Request from ${name} — ${projectType || "General Inquiry"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #0A1F3A, #1B3A6B); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
              <h2 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h2>
              <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Sree Shoba Concretes Website</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Name", name],
                ["Email", email],
                ["Phone", phone],
                ["Project Type", projectType || "—"],
                ["Concrete Grade", concreteGrade || "—"],
                ["Quantity", quantity || "—"],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; background: #f9fafb; font-weight: 600; font-size: 13px; color: #374151; width: 40%; border-bottom: 1px solid #e5e7eb;">${label}</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #111827; border-bottom: 1px solid #e5e7eb;">${value}</td>
                </tr>
              `).join("")}
            </table>
            <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #E87B2C;">
              <p style="font-weight: 600; font-size: 13px; color: #374151; margin: 0 0 6px;">Message:</p>
              <p style="font-size: 13px; color: #6b7280; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">This email was sent from the contact form at sreeshobaconcretes.com</p>
          </div>
        `,
      });
    }

    // Log to console if email not configured
    console.log("📩 Contact form submission:", { name, email, phone, projectType, concreteGrade, quantity, message });

    return NextResponse.json({ success: true, message: "Your inquiry has been received. We will contact you shortly." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
