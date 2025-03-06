import fire from "@/app/assets/icons/FIRE-resistance-icon 2.svg";
import made from "@/app/assets/icons/ILMADE.svg";
import water from "@/app/assets/icons/WATER-resistance-icon 2.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import { ProductItem } from "../../../../../types/products";
import SectionHeader from "../Header/SectionHeader";
import { ProductAccordion } from "./ProductAccordion";
function ProductsComp() {
	const t = useTranslations("Products");
	const products: ProductItem[] = t.raw("ProductsList");
	const content = useMemo(() => {
		return {
			title: t("title"),
			description: t("description"),
		};
	}, [t]);
	return (
		<Fragment>
			<div className="container mx-auto p-6 md:p-24">
				<div className="header w-full max-w-xl">
					<SectionHeader className="">
						{content.title.split(" ")[0]}{" "}
						<span className="font-bold">{content.title.split(" ")[1]}</span>
					</SectionHeader>
					<p className="max-w-2xl text-transparent bg-gradient-to-br from-zinc-800 to-stone-600 bg-clip-text text-lg md:text-xl mt-6">
						{content.description}
					</p>
					<CertificationsIcons />
				</div>
				<div className="products mt-12 space-y-4">
					{products.map((prod, i) => {
						return (
							<ProductAccordion
								key={i}
								modelName={prod.modelName}
								modelDesc={prod.modelDescription}
								modelImg={prod.modelImages.thumbnail}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
}

export default ProductsComp;

export const CertificationsIcons = () => {
	const content = useTranslations("Products.Certifications");
	return (
		<div className="certifications mt-12">
			<div className="fire w-fit py-2 flex justify-start gap-2 items-end ">
				<Image
					src={fire}
					loading="lazy"
					alt="fire_proof"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-xl font-medium">
					{content("fireProof")}
				</span>
			</div>
			<div className="water w-fit py-2 flex justify-start gap-2 items-end ">
				<Image
					src={water}
					loading="lazy"
					alt="water_proof"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-xl font-medium">
					{content("waterResistant")}
				</span>
			</div>
			<div className="il w-fit py-2 flex justify-start gap-2 items-end ">
				<Image
					src={made}
					loading="lazy"
					alt="made_in_israel"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-xl font-medium">
					{content("madeIn")}
				</span>
			</div>
		</div>
	);
};
