"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
	{ code: "en", label: "English" },
	{ code: "he", label: "עברית" },
	{ code: "es", label: "Español" },
	{ code: "ar", label: "العربية" },
];

export default function LocaleSwitcher({
	currentLocale,
}: {
	currentLocale: string;
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
		<div className="text-xs">
			<select
				onChange={(e) => changeLanguage(e.target.value)}
				disabled={isPending}
				defaultValue={currentLocale}
				className="px-3 py-1  bg-white rounded-none">
				{languages.map(({ code, label }) => (
					<option key={code} value={code} className="rounded-none text-xs">
						{label}
					</option>
				))}
			</select>
		</div>
	);
}
