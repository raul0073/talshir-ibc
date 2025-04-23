
import { z } from "zod";


export const emailSchema = z.object({
  full_name: z.string().min(2).max(30),
  company: z.string().min(2).max(60),
  email: z.string().email().min(2).max(30),
  phone: z.string().min(2).max(30),
  role: z.string().min(2).max(30),
  message: z.string().min(5).max(80),
});

export type EmailProps = z.infer<typeof emailSchema>;

export async function sendEmailService(emailData: EmailProps) {
  const result = emailSchema.safeParse(emailData);
  if (!result.success) {
    throw new Error("Invalid email data");
  }

  try {
    const url = `/api/send`
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    if (!res.ok) throw new Error("Email send failed");
    return await res.json();
  } catch (err) {
    console.error("EmailService error:", err);
    throw err;
  }
}
