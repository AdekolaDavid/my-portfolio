import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: 'Portfolio Pipeline <onboarding@resend.dev>', // Resend's default testing email
      to: 'adekoladavi2401@gmail.com', // Routing to your actual inbox
      subject: `SYS.MSG: New connection from ${name}`,
      replyTo: email, // <-- CHANGED THIS TO CAMELCASE
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.log("SYS.ERR (Resend):", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}