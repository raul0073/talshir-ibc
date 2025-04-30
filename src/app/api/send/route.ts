import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      full_name = '',
      company = '',
      role = '',
      phone = '',
      email = '',
      message = '',
    } = data;

    const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      to: process.env.MAIL_ADDRESS_TO,
      cc: process.env.MAIL_ADDRESS_CC,
      replyTo: email,
      subject: 'השארת פרטים מהאתר',
      html: `
      <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body dir="rtl">
        <div style="padding: 2rem; font-family: 'Segoe UI', Calibri, sans-serif; background-color: #f9f9f9; color: #333; direction: rtl; text-align: right;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
            <h2 style="color: #2c3e50; margin-bottom: 1.5rem;">בקשת יצירת קשר חדשה</h2>
            <table style="width: 100%; font-size: 1.2rem; border-collapse: collapse;">
              <tr><td style="padding: 0.5rem 0;"><strong>שם מלא:</strong></td><td style="padding: 0.5rem 0;">${full_name}</td></tr>
              <tr><td style="padding: 0.5rem 0;"><strong>חברה:</strong></td><td style="padding: 0.5rem 0;">${company}</td></tr>
              <tr><td style="padding: 0.5rem 0;"><strong>תפקיד:</strong></td><td style="padding: 0.5rem 0;">${role}</td></tr>
              <tr><td style="padding: 0.5rem 0;"><strong>טלפון:</strong></td><td style="padding: 0.5rem 0;">${phone}</td></tr>
              <tr><td style="padding: 0.5rem 0;"><strong>אימייל:</strong></td><td style="padding: 0.5rem 0;">${email}</td></tr>
              <tr><td style="padding: 0.5rem 0; vertical-align: top;"><strong>הודעה:</strong></td><td style="padding: 0.5rem 0; white-space: pre-line;">${message}</td></tr>
            </table>
            <p style="margin-top: 2rem; font-size: 1rem; color: #555;">אנא צור קשר בהקדם האפשרי.</p>
          </div>
        </div>
      </body>
      </html>
      `,
      text: `
      שם מלא: ${full_name}
      חברה: ${company}
      תפקיד: ${role}
      טלפון: ${phone}
      אימייל: ${email}
      הודעה:
      ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
    //eslint-disable-next-line
  } catch (error: any) {
    console.error('Email send error:', error);

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
