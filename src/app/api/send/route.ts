import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();  

    const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      to: process.env.MAIL_ADDRESS_TO, 
      cc: process.env.MAIL_ADDRESS_CC,
      subject: "השארת פרטים מהאתר",
      html: `
  <div style="padding: 2rem; font-family: 'Segoe UI', Calibri, sans-serif; background-color: #f9f9f9; color: #333; direction: rtl; text-align: right;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
      <h2 style="color: #2c3e50; margin-bottom: 1.5rem;">בקשת יצירת קשר חדשה</h2>
      <table style="width: 100%; font-size: 1.2rem; border-collapse: collapse;">
        <tr>
          <td style="padding: 0.5rem 0;"><strong>שם מלא:</strong></td>
          <td style="padding: 0.5rem 0;">${data.full_name}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 0;"><strong>חברה:</strong></td>
          <td style="padding: 0.5rem 0;">${data.company}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 0;"><strong>תפקיד:</strong></td>
          <td style="padding: 0.5rem 0;">${data.role}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 0;"><strong>טלפון:</strong></td>
          <td style="padding: 0.5rem 0;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 0;"><strong>אימייל:</strong></td>
          <td style="padding: 0.5rem 0;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 0; vertical-align: top;"><strong>הודעה:</strong></td>
          <td style="padding: 0.5rem 0; white-space: pre-line;">${data.message}</td>
        </tr>
      </table>
      <p style="margin-top: 2rem; font-size: 1rem; color: #555;">אנא צור קשר בהקדם האפשרי.</p>
    </div>
  </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
    //eslint-disable-next-line
  } catch (error: any) {
    console.error("Email send error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}