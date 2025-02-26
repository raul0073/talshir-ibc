"use client";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { HTMLAttributes, ReactNode } from "react";

interface SectionWithLocaleProps extends HTMLAttributes<HTMLDivElement> {
	sectionName: string;
	children: ReactNode
}
function SectionWithLocale({ children, sectionName, ...props }: SectionWithLocaleProps) {
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	return (
		<section
			{...props}
			className={cn(`${sectionName} w-full py-24`, props.className)}
			dir={isRTL ? "rtl" : "ltr"}>
			{children}
		</section>
	);
}

export default SectionWithLocale;
