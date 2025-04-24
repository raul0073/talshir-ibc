import { LocaleOptions, routing } from "@/i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Assistant } from "next/font/google";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import "./globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
	title: "טלשיר IBC – פתרונות חדשניים לתעשיית הבנייה",
	description: "טלשיר IBC מציעה מוצרים וטכנולוגיות מתקדמות לשיפור תהליכי הבנייה – מהשלד ועד הגמר. איכות, חדשנות ויעילות באתר אחד.",
	keywords: [
	  "טלשיר IBC",
	  "פתרונות לבנייה",
	  "מוצרים חדשניים לבנייה",
	  "טכנולוגיות בנייה",
	  "תעשיית הבנייה בישראל",
	  "פיתוח מוצרים לבנייה",
	  "הנדסת בניין",
	  "שיפור תהליכי בנייה"
	],
	alternates: {
	  canonical: "https://www.talshir-ibc.com",
	},
}

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

	return (
		<html lang={storedLocale} dir={isRtl ? "rtl" : "ltr"}>
			{/* enable */}
				<Script
				src="https://cdn.enable.co.il/licenses/enable-L42107b9h82swz73-0425-70393/init.js" />
			
			<body
				className={`${assistant.variable} antialiased bg-white`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}

