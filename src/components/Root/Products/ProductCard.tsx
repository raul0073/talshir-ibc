"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductItem } from "../../../../types/products";
function ProductCard({ product }: { product: ProductItem }) {
	// const locale = useLocale();
	// // const isRtl = locale === "he" || locale === "ar";
	const path = usePathname();

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
						src={product.modelImages.thumbnail}
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
						availiable in 4 sizes
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-[.2rem] border border-appBlue text-stone-900 text-xs hover:bg-appBlue hover:text-white transition-colors duration-150 ease-in-out">
						<Link
							href={`${path}/product/${decodeURIComponent(product.modelName)}`}>
							More details →
						</Link>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}

export default ProductCard;
