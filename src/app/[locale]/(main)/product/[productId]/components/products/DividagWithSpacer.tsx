import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function DividagWithSpacer({ id }: { id: string }) {
	const t = useTranslations("Products");
	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id.trim() === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} />
						<Separator />

						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 max-w-2xl mx-auto">
							<div className="w-full flex justify-center h-fit">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={500}
									height={500}
									className=""
								/>
							</div>
							<ul className="mt-6 text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
							<div className="mt-6 w-full flex justify-evenly items-center gap-4">
								<div className="flex gap-4">
									{thisProd.modelImages.usages.map(
										(src: StaticImageData, indx: number) => {
											return (
												<div key={indx} className="w-24 md:w-36 h-24 md:h-36">
													<EnlargeableImage
														src={src}
														alt={thisProd.modelName + "_usage_" + indx}
														width={250}
														height={250}
													/>
												</div>
											);
										}
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<ProductPageSkeleton />
			)}
		</div>
	);
}

export default DividagWithSpacer;
