"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
	{ code: "en", label: "En ", flag: "🇺🇸" },
	{ code: "he", label: "עב", flag: "🇮🇱" },
];

export default function LocaleSwitcher({
	currentLocale,
	className,
}: {
	currentLocale: string;
	className?: string;
}) {
	const router = useRouter();
	const path = usePathname();
	const [isPending, startTransition] = useTransition();

	const changeLanguage = async (locale: string) => {
		if (locale === currentLocale) return;
		const newPathname = `/${locale}${path.replace(/^\/[a-z]{2}/, "")}`;

		startTransition(() => {
			router.push(newPathname);
		});
	};

	return (
		<div className={cn("text-xs", `${className}`)}>
			<select
				onChange={(e) => changeLanguage(e.target.value)}
				disabled={isPending}
				defaultValue={currentLocale}
				className="py-1  bg-transparent rounded-none p-2 flex items-center">
				{languages.map(({ code, label, flag }) => (
					<option
						key={code}
						value={code}
						className="rounded-none text-xs font-sans">
					
						{label}&emsp;
					
						{flag}

					</option>
				))}
			</select>
		</div>
	);
}
