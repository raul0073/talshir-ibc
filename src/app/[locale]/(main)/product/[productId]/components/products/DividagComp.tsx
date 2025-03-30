import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function DividagComp({ id }: { id: string }) {
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
						<Separator className="mt-2" />
						{thisProd.modelSizes.length > 0 && (
							<div className="model-sizes p-3 sm:p-4 flex flex-col justify-center items-center">
								<h3 className="font-medium text-lg md:text-xl uppercase text-appTextBlue tracking-tighter">
									{t("Certifications.standardSizesAvailable")}
								</h3>
								<ul className="flex gap-4">
									{thisProd.modelSizes.map((size: string, index: number) => (
										<li key={index} className="after:content-['cm']">
											{size}
										</li>
									))}
								</ul>
							</div>
						)}
						<Separator />

						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 max-w-2xl mx-auto">
							<div className="w-full flex justify-center h-fit">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={80}
									height={80}
									className="rotate-90"
								/>
							</div>
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
						</div>
						<Separator />
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appSubTextBlue tracking-tighter">
								{thisProd.modelExtraContent.header}
							</h2>
							<Image
								src={thisProd.modelExtraContent.img}
								alt={thisProd.modelName}
								width={700}
								height={700}
								className="py-6"
							/>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.desc}
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

export default DividagComp;
