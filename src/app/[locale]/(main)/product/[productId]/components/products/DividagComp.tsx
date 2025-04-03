import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function DividagComp({ id }: { id: string }) {
	const t = useTranslations("Products");
	const locale = useLocale();
	const isRTL = locale === "he";
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
							<div className="w-full flex justify-center h-fit pb-4">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={600}
									height={600}
									className=""
								/>
							</div>
							{thisProd.modelSizes.length > 0 && (
								<div className="model-sizes p-3 sm:p-4 flex flex-col sm:flex-row items-center">
									<h3 className="font-medium text-lg md:text-xl uppercase text-appTextBlue tracking-tighter px-12">
										{t("Certifications.standardSizesAvailable")}
									</h3>
									<ul className="flex gap-1">
										{thisProd.modelSizes.map((size: string, index: number) => (
											<li
												key={index}
												className="after:content-[','] last:after:content-[] text-appText  text-lg">
												{size}
											</li>
										))}
										<li className="mx-1"> {` ס"מ `} </li>
									</ul>
								</div>
							)}

							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
							<ul className="grid grid-cols-3 gap-4">
								{thisProd.modelImages.usages.map(
									(src: string, index: number) => (
										<EnlargeableImage
											key={index}
											src={src}
											alt={thisProd.modelName}
											width={700}
											height={700}
											className={`py-6 ${isRTL ? "" : ""}`}
										/>
									)
								)}
							</ul>
						</div>
						
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="text-2xl md:text-5xl uppercase text-appTextBlue font-suez">
								{thisProd.modelExtraContent.header}
							</h2>
							<div className="relative">
								<EnlargeableImage
									src={thisProd.modelExtraContent.img}
									alt={thisProd.modelName}
									width={700}
									height={700}
									className={` px-6 py-6 ${isRTL ? "" : ""}`}
								/>
								<span className="absolute -right-2 md:-right-24 -bottom-0 bg-appTextBlue px-2 py-2 text-white m-1  before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-y-8 before:border-r-8 before:border-y-transparent before:border-r-appTextBlue text-xs sm:text-base">
									{thisProd.modelExtraContent.extraContent2}
								</span>
								<span className="absolute right-1/2 sm:-translate-x-1/2 -bottom-5 bg-appTextBlue px-2 py-2 text-white m-1 before:absolute before:right-1/2 before:-top-2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-appTextBlue text-xs sm:text-base">
									{thisProd.modelExtraContent.extraContent3}
								</span>
							</div>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-bold max-w-xl text-center mt-6">
								{thisProd.modelExtraContent.desc}
							</p>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center mt-2">
								{thisProd.modelExtraContent.extraContent4}
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
