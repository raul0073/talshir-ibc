import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function SlidingWheelComp({ id }: { id: string }) {
	const t = useTranslations("Products");
	console.log(id);
	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="px-2">
						<ModelHeader thisProd={thisProd}  />
						<div className="model-usage p-3 sm:p-4 flex flex-col sm:flex-row justify-center gap-6 items-center max-w-5xl mx-auto">
							<div>
								<p className="text-3xl capitalize text-appSubTextBlue mb-4 text-center font-bold max-w-2xl">
									{thisProd.modelDescription}
								</p>
								
							</div>
							<div className="flex justify-center flex-col items-center mt-4 sm:mt-0">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={700}
									height={700}
								/>
							</div>
						</div>
						<div className="w-fit mx-auto px-2">
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index} className="text-appTextBlue text-xl font-bold">{line}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			) : (
				<ProductPageSkeleton />
			)}
		</div>
	);
}

export default SlidingWheelComp;
