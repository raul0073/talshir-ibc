import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { locale } = await req.json();
  if (!locale) {
    return NextResponse.json({ error: "Locale is required" }, { status: 400 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return response;
}
