"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
	{ code: "en", label: "En", flag: "🇺🇸" },
	{ code: "he", label: "עב", flag: "🇮🇱" },
];

export default function LocaleSwitcher({
	currentLocale = "he", // Default to Hebrew
	className,
}: {
	currentLocale?: string;
	className?: string;
}) {
	const router = useRouter();
	const path = usePathname();
	const [isPending, startTransition] = useTransition();

	// Find the current language index
	const currentIndex = languages.findIndex((lang) => lang.code === currentLocale);
	// Toggle to the next language
	const nextLocale = languages[(currentIndex + 1) % languages.length];

	const toggleLanguage = () => {
		const newPathname = `/${nextLocale.code}${path.replace(/^\/[a-z]{2}/, "")}`;

		startTransition(() => {
			router.push(newPathname);
		});
	};

	return (
		<button
			onClick={toggleLanguage}
			disabled={isPending}
			className={cn(
				"py-1 px-3 bg-transparent rounded-md flex items-center gap-2 text-xs font-sans transition-opacity outline-none",
				{ "opacity-50": isPending }, // Show loading state
				className
			)}
		>
			<span>{nextLocale.label}</span>
			<span>{nextLocale.flag}</span>
		</button>
	);
}
