import logo2 from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ShadowButton from "../../shadow-button";
import Tag from "./Tag";
import { useMemo } from "react";

function HeroContent() {
	const t = useTranslations("Hero");
	const content = useMemo(() => {
		return {
			highlight: t("highlight"),
			description: t("description"),
			actions: {
				products: t("actions.products"),
				contact: t("actions.contact"),
			},
		};
	}, [t]);
	return (
		<div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full">
			<div className="container mx-auto w-full md:w-2/3 lg:w-1/2 p-2">
				<div className="w-full flex justify-end mb-6">
					<Tag>✨ {content.highlight}</Tag>
				</div>

				<div className="relative w-full h-full flex flex-col items-center text-center">
					<div className="relative flex items-center justify-center mb-6">
						<Image
							src={logo2}
							alt="talshir-ibc logo 300X300"
							width={300}
							height={300}
							loading="eager"
						/>
					</div>

					<p className="text-xl md:text-4xl text-black/80 max-w-2xl">
						{content.description}
					</p>

					<div className="actions mt-16 w-full flex flex-col md:flex-row justify-center gap-8">
						<Link href={"#"}>
							<ShadowButton
								variant="default"
								className="w-2/3 mx-auto md:w-full">
								{content.actions.products}
							</ShadowButton>
						</Link>
						<Link href={"#"}>
							<ShadowButton
								variant="outline"
								className="w-2/3 mx-auto md:w-full">
								{content.actions.contact}
							</ShadowButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
