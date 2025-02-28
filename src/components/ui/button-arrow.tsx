import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

function ButtonArrow({ link }: { link: string }) {
	const locale = useLocale();
    const content = useTranslations("Root");
	const isRtl = locale === "he" || locale === "ar";
	return (
		<Link href={link}>
			<button className="btn-small text-nowrap py-0 px-0">
				{content("btnLink")}{" "}
				<span className={cn(`${isRtl ? "rotate-180" : ""}`)}>&#8594;</span>
			</button>
		</Link>
	);
}

export default ButtonArrow;
