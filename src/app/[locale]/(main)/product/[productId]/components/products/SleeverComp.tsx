import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function SleeverComp({ id }: { id: string }) {
	const t = useTranslations("Products");

	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[80vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} />
						
						<div className="model-usage p-3 sm:p-4 flex flex-col items-center">
							<EnlargeableImage
								src={thisProd.modelImages.productPageMain}
								alt={thisProd.modelName}
								width={300}
								height={300}
							/>
							<div className="w-full flex justify-center flex-col items-center">
								<div className="grid grid-cols-2">
                                <div>
										{" "}
										<EnlargeableImage
											src={thisProd.modelImages.usages[1]}
											alt={thisProd.modelName}
											width={500}
											height={500}
										/>
									</div>
									<div>
										{" "}
										<EnlargeableImage
											src={thisProd.modelImages.usages[0]}
											alt={thisProd.modelName}
											width={500}
											height={500}
										/>
									</div>
								
								</div>
								<ul className="text-sm md:text-lg capitalize w-fit mx-auto list-disc px-2 sm:px-1 space-y-1 mt-12 ">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index} className="text-appTextBlue font-bold">{line}</li>
									))}
								</ul>
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

export default SleeverComp;
