import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Nodemailer Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail ID
        pass: process.env.EMAIL_PASS, // App Password (Not your Gmail password!)
      },
    });

    // ✅ Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender Email
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Receiver Email (Change if needed)
      subject: "New Contact Form Submission",
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
