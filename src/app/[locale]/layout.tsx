import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Assistant, Rajdhani } from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import "./globals.scss";
import { Metadata } from "next";

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

export default async function LocaleLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	
	
	let locale = 'en';
	const getRelevantLocale = async () => {
        const cookie = await cookies();
        const storedLocale = cookie.get("NEXT_LOCALE")?.value;

        if (storedLocale) {
			locale = storedLocale
            return storedLocale;
        }
        return locale;
	}
	getRelevantLocale();
	// Ensure that the incoming `locale` is valid
	// eslint-disable-next-line
	if (!routing.locales.includes(locale as any)) {
	  notFound();
	}
   
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	const isRtl = locale === "he" || locale === "ar";
	const fontClass = isRtl ? assistant.variable : rajdhani.variable;

	return (
		<html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
			<body
				className={`${fontClass} ${
					isRtl ? "font-assistant" : "font-rajdhani"
				} antialiased bg-white`}>
				<NextIntlClientProvider messages={messages}>
				
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
