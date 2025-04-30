import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

const createRow = (label: string, value: string) => `
  <tr>
    <td style="font-size: 14px; padding: 8px 0;"><strong>${label}</strong></td>
    <td style="font-size: 14px; padding: 8px 0;">${value || '-'}</td>
  </tr>
`;

export async function POST(req: NextRequest) {
  try {
    const {
      full_name = '',
      company = '',
      role = '',
      phone = '',
      email = '',
      message = '',
    } = await req.json();

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="he" dir="rtl">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body style="margin: 0; padding: 40px; font-family: 'Segoe UI', Calibri, sans-serif; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 25px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">בקשת יצירת קשר חדשה</h2>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              ${createRow('שם מלא:', full_name)}
              ${createRow('חברה:', company)}
              ${createRow('תפקיד:', role)}
              ${createRow('טלפון:', phone)}
              ${createRow('אימייל:', email)}
              <tr>
                <td style="padding: 8px 0; vertical-align: top;"><strong>הודעה:</strong></td>
                <td style="padding: 8px 0; white-space: pre-line;">${message || '-'}</td>
              </tr>
            </table>
            <p style="margin-top: 25px; font-size: 18px; color: #555;">צור קשר בהקדם האפשרי</p>
          </div>
        </body>
      </html>
    `;

    const plainText = `
שם מלא: ${full_name}
חברה: ${company}
תפקיד: ${role}
טלפון: ${phone}
אימייל: ${email}
הודעה:
${message}
    `;

    const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      to: process.env.MAIL_ADDRESS_TO,
      cc: process.env.MAIL_ADDRESS_CC,
      replyTo: email,
      subject: 'השארת פרטים מהאתר',
      html: htmlBody,
      text: plainText,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
