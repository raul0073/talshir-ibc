import { LocaleOptions, routing } from "@/i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Rajdhani, Assistant } from "next/font/google";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import "./globals.scss";

export const metadata: Metadata = {
	title: 'Talshir-IBC',
	description: 'Ilan Ber Co. Construction Solutions',
  }

// Define fonts
const rajdhani = Rajdhani({
	variable: "--font-rajdhani",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

const assistant = Assistant({
	variable: "--font-assistant",
	subsets: ["hebrew"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	display: "swap",
});




export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookie = await cookies();
	const storedLocale = cookie.get("NEXT_LOCALE")?.value || "en";

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(storedLocale as LocaleOptions)) {
		notFound();
	}

	// Providing all messages to the client side
	const messages = await getMessages({ locale: storedLocale });

	const isRtl = storedLocale === "he" || storedLocale === "ar";
	const fontClass = isRtl ? assistant.variable : rajdhani.variable;

	return (
		<html lang={storedLocale} dir={isRtl ? "rtl" : "ltr"}>
			<body
				className={`${fontClass} ${
					isRtl ? "font-assistant" : "font-rajdhani"
				} antialiased bg-white`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}

