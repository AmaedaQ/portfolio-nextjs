import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("Resend API Key:", process.env.RESEND_API_KEY ? "Loaded" : "Missing");

    const { name, email, message } = await req.json() as ContactFormData;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // must be verified or default
      to: "amaedaqureshi@gmail.com", // Testing mode: must be your account email
      subject: `📬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">Portfolio Contact Form</h2>
          <div style="background: #fff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
            <p><strong style="color: #555;">Name:</strong> ${name}</p>
            <p><strong style="color: #555;">Email:</strong> ${email}</p>
            <p><strong style="color: #555;">Message:</strong></p>
            <div style="background: #f1f1f1; padding: 10px; border-radius: 4px; margin-top: 8px; white-space: pre-line;">
              ${message}
            </div>
          </div>
          <p style="text-align: center; color: #777; font-size: 12px; margin-top: 20px;">
            — This email was sent from your portfolio website.
          </p>
        </div>
      `,
    });

    console.log("Resend API Response:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
