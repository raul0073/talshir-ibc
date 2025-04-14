"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductItem } from "../../../../types/products";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

function ProductCard({ product }: { product: ProductItem }) {
	const path = usePathname();
	const locale = useLocale()
	const isRTL = locale === 'he'
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.2 }}
			className=""
		>
			<Card className="border-sky-900 border-4 shadow-xl overflow-clip h-full w-full">
				<Link href={`${path}/product/${decodeURIComponent(product.id)}`}>
					<CardHeader>
						<Image
							src={
								product.modelImages.thumbnail ||
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
							}
							height="1000"
							width="1000"
							className="h-60 w-full object-contain scale-95 hover:scale-[1.2] transition-transform duration-300 ease-in-out"
							alt="thumbnail"
						/>
					</CardHeader>
					<CardFooter className={`flex justify-center text-appTextBlue font-suez text-center uppercase ${isRTL? 'text-2xl sm:text-3xl' : 'text-2xl'}`}>
						{product.modelName}
					</CardFooter>
				</Link>
			</Card>
		</motion.div>
	);
}

export default ProductCard;
