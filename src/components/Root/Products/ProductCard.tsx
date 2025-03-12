"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconArrowsMaximize, IconColorPicker } from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { ProductItem } from "../../../../types/products";
function ProductCard({ product }: { product: ProductItem }) {
	const locale = useLocale();
	const isRtl = locale === "he" || locale === "ar";
	const path = usePathname();
	const content = useTranslations("Products");
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto min-h-[480px] rounded-[.2rem] p-6 border  flex flex-col justify-between items-start">
				<div>
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-appBlue uppercase mb-4 tracking-tighter">
						{product.modelName}
					</CardItem>
					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-base font-medium max-w-sm">
						{product.modelDescription}
					</CardItem>
				</div>
				<CardItem translateZ="40" className="w-full mt-4">
					<Image
						src={product.modelImages.thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"}
						height="1000"
						width="1000"
						className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="w-full flex justify-between items-center z-10 mt-4">
					<CardItem
						translateZ={20}
						href="https://twitter.com/mannupaaji"
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white uppercase">
						{product.modelSizesCustomize && (
							<Fragment>
								<div className="flex gap-2 items-center">
									<span>
										<IconArrowsMaximize className="inline w-4 h-4 text-gray-500" />
									</span>
									<p>{content("Certifications.moreSizesAvailable")}</p>
								</div>
								<div className="flex gap-2 items-center">
									<span>
										<IconColorPicker className="inline w-4 h-4 text-gray-500" />
									</span>
									<p>{content("Certifications.customColors")}</p>
								</div>
							</Fragment>
						)}
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-[.2rem] border border-appBlue text-stone-900 text-xs hover:bg-appBlue hover:text-white transition-colors duration-150 ease-in-out">
						<Link
							href={`${path}/product/${decodeURIComponent(product.modelName)}`}>
							{content("Actions.btnProductPage")}{" "}
							<ArrowRight
								width={12}
								height={12}
								className={`inline mx-1 ${isRtl ? "rotate-180" : ""}`}
							/>
						</Link>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}

export default ProductCard;
