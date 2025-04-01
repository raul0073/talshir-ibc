import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Separator } from "@/components/ui/separator";
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
					<div className="">
						<ModelHeader thisProd={thisProd} />
						<Separator />
						<div className="model-usage p-3 sm:p-4 flex flex-col sm:flex-row justify-center gap-6 items-center">
							<div>
								<p className="text-2xl uppercase text-appSubTextBlue mb-4 text-center">
									{thisProd.modelDescription}
								</p>
								<div className="w-2/3 mx-auto">
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
						</div>
							</div>
							<div className="flex justify-center flex-col items-center mt-4 sm:mt-0">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={600}
									height={600}
								/>
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

export default SlidingWheelComp;
