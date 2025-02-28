import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LogoComp from "../Logo/LogoComp";
import ShadowButton from "../../shadow-button";
import Tag from "./Tag";

function HeroContent() {
	const content = useTranslations("Hero");
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";

	return (
		<div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:h-1/2 h-2/3 w-full">
			<div className="container mx-auto w-full md:w-2/3 lg:w-1/2 p-2">
				<div className="w-full flex justify-end pb-6 mb-6">
					<Tag>✨ {content("highlight")}</Tag>
				</div>

				<div className="relative w-full h-full flex flex-col items-center text-center">
					<div className="relative flex items-center justify-center mb-6">
						<h1
							className={`text-6xl md:text-7xl lg:text-9xl font-bold text-appBlue text-nowrap`}>
							{content("title")}
						</h1>
						<div
							className={`absolute ${
								isRTL
									? "-right-12 -top-12 sm:-right-28 sm:-top-24 "
									: "-left-12 -top-12 sm:-left-28 sm:-top-24 "
							}`}>
							<LogoComp />
						</div>
					</div>

					<p className="text-xl md:text-4xl text-black/80 max-w-2xl">
						{content("description")}
					</p>

					<div className="actions mt-12 w-full flex flex-col md:flex-row justify-center gap-8">
						<Link href={"#"}>
							<ShadowButton
								variant="default"
								className="w-2/3 mx-auto md:w-full">
								{content("actions.products")}
							</ShadowButton>
						</Link>
						<Link href={"#"}>
							<ShadowButton
								variant="outline"
								className="w-2/3 mx-auto md:w-full">
								{content("actions.contact")}
							</ShadowButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
