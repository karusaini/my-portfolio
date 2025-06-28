import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_dd7wkze", // hardcoded
          template_id: "template_cuum4r8", // hardcoded
          user_id: "9C21XUC2pGU6GSsNB", // hardcoded (public key)
          template_params: {
            user_name: name,
            user_email: email,
            message: message,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("EmailJS Error:", errText);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
