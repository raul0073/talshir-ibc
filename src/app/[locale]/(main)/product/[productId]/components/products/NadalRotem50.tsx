import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function NadalRotem50({ id }: { id: string }) {
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
					
						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 max-w-2xl mx-auto">
							<div className="w-full flex justify-center h-fit py-3 mb-4">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={500}
									height={500}
									className=""
								/>
							</div>
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage
									.slice(0, 5)
									.map((line: string, index: number) => (
										<li key={index}>{line}</li>
									))}
							</ul>
							<p className="text-2xl uppercase text-appSubTextBlue mt-4 text-center">
								{thisProd.modelUsage[5]}
							</p>
							<EnlargeableImage
								src={thisProd.modelImages.usage1}
								alt={thisProd.modelName}
								width={500}
								height={500}
								className="mt-4"
							/>
						</div>
						
						<div className="w-full flex justify-center flex-col items-center gap-4 mt-12 px-4">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appTextBlue font-suez">
								{thisProd.modelExtraContent.header}
							</h2>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.desc}
							</p>
							<div className="flex justify-center gap-6">
								<div className="relative">
									<EnlargeableImage
										src={thisProd.modelExtraContent.img2}
										alt={thisProd.modelName}
										width={200}
										height={200}
										className="py-6"
									/>
									<span className="absolute -left-32 bottom-16 sm:bottom-24 bg-appTextBlue px-4 py-2 text-white before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-appTextBlue text-xs sm:text-base">
										{thisProd.modelExtraContent.extraContent2}
									</span>
								</div>
								<div className="flex flex-col justify-start items-center">
								<EnlargeableImage
									src={thisProd.modelExtraContent.img}
									alt={thisProd.modelName}
									width={500}
									height={400}
									className="py-6"
								/>
								</div>
							</div>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.extraContent}
							</p>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.extraContent3}
							</p>
						</div>
					</div>
				</div>
			) : (
				<ProductPageSkeleton />
			)}
		</div>
	);
}

export default NadalRotem50;
