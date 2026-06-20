import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, grade, quantity, deliveryDate, projectAddress, notes } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const nodemailer = await import("nodemailer");
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Sree Shoba Concretes Website" <${process.env.SMTP_USER}>`,
        to: "sreeshobaconcretes@gmail.com",
        replyTo: email,
        subject: `New RMC Quote Request — ${grade || "Grade TBD"} — ${quantity || "Qty TBD"}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Grade:</strong> ${grade || "—"}</p>
          <p><strong>Quantity:</strong> ${quantity || "—"}</p>
          <p><strong>Delivery Date:</strong> ${deliveryDate || "—"}</p>
          <p><strong>Project Address:</strong> ${projectAddress || "—"}</p>
          <p><strong>Notes:</strong> ${notes || "—"}</p>
        `,
      });
    }

    console.log("💬 Quote request:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Failed to process quote request" }, { status: 500 });
  }
}
