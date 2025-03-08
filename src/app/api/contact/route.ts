import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create email
    const msg = {
      to: 'sam@samfrench.io',  // Destination email
      from: process.env.VERIFIED_SENDER || 'sam@samfrench.io', // Must be verified in SendGrid
      subject: `Website Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #1e40af;">New message from your website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      replyTo: email, // Allow replying directly to the sender
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}