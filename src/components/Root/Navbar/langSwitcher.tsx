"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
	{ code: "en", label: "English", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/330px-Flag_of_the_United_States.svg.png" },
	{ code: "he", label: "עברית", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/250px-Flag_of_Israel.svg.png" },
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
			<span><Image src={nextLocale.flag} alt={nextLocale.label} width={20} height={20} /></span>
		</button>
	);
}
