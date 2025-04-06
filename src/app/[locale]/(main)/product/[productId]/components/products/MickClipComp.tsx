import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function MickClipComp({ id }: { id: string }) {
	const t = useTranslations("Products");

	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} />
					
						<div className="model-usage p-3 sm:p-4 flex flex-col items-center">
							<EnlargeableImage
								src={thisProd.modelImages.productPageMain}
								alt={thisProd.modelName}
								width={700}
								height={700}
							/>
							<div>
								<p className="text-2xl uppercase text-appTextBlue mb-4 text-center font-bold">
									{thisProd.modelDescription}
								</p>
								<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index}>{line}</li>
									))}
								</ul>
							</div>
						</div>

						
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appTextBlue tracking-tighter">
								{thisProd.modelExtraContent.header}
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
								{thisProd.modelImages.usages.map(
									(img: StaticImageData, indx: number) => (
										<div
											key={indx}
											className="w-full max-w-[6rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem]">
											<EnlargeableImage
												src={img}
												alt={`${thisProd.modelName}_usage_${indx}`}
												width={250}
												height={250}
												className="w-full h-auto"
											/>
										</div>
									)
								)}
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

export default MickClipComp;
