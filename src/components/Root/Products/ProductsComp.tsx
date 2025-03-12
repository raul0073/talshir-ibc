import fire from "@/app/assets/icons/FIRE-resistance-icon 2.svg";
import made from "@/app/assets/icons/ILMADE.svg";
import water from "@/app/assets/icons/WATER-resistance-icon 2.svg";
import mati from "@/app/assets/icons/mati.svg";
import pikod from "@/app/assets/icons/pikod_haoref.svg";
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
						{content.title.split(" ")[0]}{" "}
						<span className="font-bold">{content.title.split(" ")[1]}</span>
					</SectionHeader>
					<p className="max-w-2xl text-transparent bg-gradient-to-br from-zinc-800 to-stone-600 bg-clip-text text-lg md:text-xl mt-6">
						{content.description}
					</p>
					<CertificationsIcons />
				</div>
				<div className="products w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pt-12">
					{products.map((prod, i) => {
						return (
							<ProductCard
								key={`${prod.modelName}-${i}`}
								product={prod}
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
			<div className="il w-fit py-2 flex justify-start gap-2 items-end text-nowrap">
				<Image
					src={mati}
					loading="lazy"
					alt="institute_of_regulations_israel"
					width={35}
					height={35}
					className="object-fit"
				/>
				<span className=" uppercase text-sm sm:text-xl font-medium">
					{content("mati")}
				</span>
			</div>
		</div>
	);
};
