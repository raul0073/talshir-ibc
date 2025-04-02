"use client";
import fire from "@/app/assets/icons/FIRE-resistance-icon 2.svg";
import made from "@/app/assets/icons/ILMADE.svg";
import water from "@/app/assets/icons/WATER-resistance-icon 2.svg";
import pikod from "@/app/assets/icons/pikod_haoref.svg";
import carmel2 from "@/app/assets/images/certifications/carmel-ap.png";
import carmel from "@/app/assets/images/certifications/carmel.png";
import mati2 from "@/app/assets/images/certifications/mati.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import { ProductItem } from "../../../../types/products";
import SectionHeader from "../Header/SectionHeader";
import ProductCard from "./ProductCard";
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
			<div className="container mx-auto p-6 ">
				<div className="header w-full max-w-3xl">
					<SectionHeader className="">
						{content.title}{" "}
						
					</SectionHeader>
				</div>
				<div className="products w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pt-20">
					{products.map((prod, i) => {
						return (
							<ProductCard key={`${prod.modelName}-${i}`} product={prod} />
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
		<div className="certifications mt-12 grid grid-cols-2 sm:grid-cols-3 gap-2">
			<div className="fire w-fit py-2 flex justify-start gap-2 items-end ">
				<Image
					src={fire}
					loading="lazy"
					alt="fire_proof"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-sm sm:text-xl font-medium">
					{content("fireProof")}
				</span>
			</div>
			<div className="water w-fit py-2 flex justify-start gap-2 items-end text-nowrap">
				<Image
					src={water}
					loading="lazy"
					alt="water_proof"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-sm sm:text-xl font-medium">
					{content("waterResistant")}
				</span>
			</div>
			<div className="il w-fit py-2 flex justify-start gap-2 items-end text-nowrap">
				<Image
					src={made}
					loading="lazy"
					alt="made_in_israel"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-sm sm:text-xl font-medium">
					{content("madeIn")}
				</span>
			</div>
			<div className="il w-fit py-2 flex justify-start gap-2 items-end text-nowrap">
				<Image
					src={pikod}
					loading="lazy"
					alt="pikod_haoref_idf"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-sm sm:text-xl font-medium">
					{content("pikod_haoref")}
				</span>
			</div>
		</div>
	);
};

export function MatiApprovedIcon() {
	const content = useTranslations("Products.Certifications");
	return (
		<div className="il w-fit py-2 flex justify-start gap-2 items-end text-nowrap">
			<Image
				src={mati2}
				loading="lazy"
				alt="institute_of_regulations_israel"
				width={42}
				height={42}
				className="object-fit"
			/>
			<span className=" uppercase text-sm sm:text-xl font-medium">
				{content("mati")}
			</span>
		</div>
	);
}
export function CarmelApprovedIcon() {
	return (
		<div className="il w-full py-2 flex items-center justify-center gap-4">
			<Image
				src={carmel2}
				loading="lazy"
				alt="carmel_testing"
				width={300}
				height={100}
				className="object-fit sm:w-96 w-32"
			/>
			<Image
				src={carmel}
				loading="lazy"
				alt="carmel_testing"
				width={80}
				height={80}
				className="object-fit"
			/>
		</div>
	);
}
