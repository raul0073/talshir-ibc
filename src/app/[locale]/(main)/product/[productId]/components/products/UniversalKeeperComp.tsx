import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function UniversalKeeperComp({ id }: { id: string }) {
	const t = useTranslations("Products");
	const tPage = useTranslations("ProductPage");
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
						<div className="grid grid-cols-1 sm:grid-cols-3 mt-6 gap-6">
							<div className="flex flex-col items-center justify-center">
								<p className="text-2xl uppercase text-appSubTextBlue mb-4 text-center">
									{thisProd.modelDescription}{" "}
								</p>

							</div>
							<div className="flex flex-col items-center">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={320}
									height={200}
								/>
							</div>
							<div className="w-full h-full flex flex-col items-center justify-end">
							<h3 className="font-bold text-lg uppercase text-appSubTextBlue tracking-tighter">
								{thisProd.modelExtraContent.desc}
							</h3>
							<EnlargeableImage
								src={thisProd.modelImages.usages[0]}
								alt={thisProd.modelName + "_usage_"}
								width={250}
								height={250}
							/>
						</div>
						<div className="model-usage p-3 sm:p-4 sm:col-span-2">
									<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1 max-w-2xl">
										{thisProd.modelUsage.map((line: string, index: number) => (
											<li key={index}>{line}</li>
										))}
									</ul>
								</div>
							<div className="w-full flex justify-center p-4">
								<ButtonProspect link={thisProd.modelLinks.modelExtra}>
									{tPage("prospectDownload")}
								</ButtonProspect>
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

export default UniversalKeeperComp;
