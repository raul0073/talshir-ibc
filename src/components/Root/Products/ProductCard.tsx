"use client";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductItem } from "../../../../types/products";
function ProductCard({ product }: { product: ProductItem }) {
	const path = usePathname();
	return (
		<Card className="border-sky-900 border-4 shadow-xl overflow-clip">
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
				<CardFooter className="flex justify-center text-2xl sm:text-3xl text-appSubTextBlue font-semibold text-center">
					{product.modelName}
				</CardFooter>
			</Link>
		</Card>
	);
}

export default ProductCard;
