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
						<div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6">
							<div className="flex flex-col items-center">
								<p className="text-xl uppercase text-appSubTextBlue mb-4 text-center">
									{thisProd.modelDescription}{" "}
								</p>
								<div className="model-usage p-3 sm:p-4">
									<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
										{thisProd.modelUsage.map((line: string, index: number) => (
											<li key={index}>{line}</li>
										))}
									</ul>
								</div>
							</div>
							<div className="flex flex-col items-center">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={320}
									height={200}
								/>
							</div>
							<div className="sm:col-span-2 w-full flex justify-end p-4">
								<ButtonProspect link={thisProd.modelLinks.modelExtra}>
									{tPage("prospectDownload")}
								</ButtonProspect>
							</div>
						</div>

						<Separator />
						<div className="w-full flex justify-center flex-col items-center gap-8">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appSubTextBlue tracking-tighter">
								{thisProd.modelExtraContent.desc}
							</h2>
							<EnlargeableImage
								src={thisProd.modelImages.usages[0]}
								alt={thisProd.modelName + "_usage_"}
								width={250}
								height={250}
							/>
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
