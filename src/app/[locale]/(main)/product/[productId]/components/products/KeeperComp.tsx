import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonMati, ButtonProspect } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function KeeperComp({ id }: { id: string }) {
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
						{thisProd.modelSizes.length > 0 && (
							<div className="model-sizes p-3 sm:p-4 flex flex-col  justify-center items-center">
								<h3 className="font-bold text-lg md:text-2xl uppercase text-appTextBlue tracking-tighter">
									{t("Certifications.standardSizesAvailable")}
								</h3>
								<ul className="flex gap-1">
										{thisProd.modelSizes.map((size: string, index: number) => (
										<li
										key={index}
										className="text-appTextBlue text-xl">
										{size}{index < thisProd.modelSizes.length - 1 && (
											<span>{`, `}</span>
										)}
									</li>
										))}
										<li className="mx-1 text-appTextBlue text-xl"> {` ס"מ `} </li>
									</ul>
							</div>
						)}

						<div className="model-usage p-4 sm:p-4 grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1 mt-12">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index} className="sm:text-nowrap">{line}</li>
								))}
							</ul>
							<div className="flex justify-center flex-col items-center mt-4 sm:mt-0">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={500}
									height={500}
								/>
								<div className="images-col p-4">
									<div className="w-full flex justify-evenly items-center gap-4">
										<div className="flex gap-4">
											{thisProd.modelImages.usages.map(
												(src: StaticImageData, indx: number) => {
													return (
														<div
															key={indx}
															className="w-24 md:w-36 h-24 md:h-36">
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
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appTextBlue font-suez text-center">
								{thisProd.modelExtraContent.header}
							</h2>
							<Image
								src={thisProd.modelExtraContent.img}
								alt={thisProd.modelName}
								width={500}
								height={500}
								className="py-6"
							/>
							<p className="text-xl sm:text-2xl text-appTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.desc}
							</p>
						</div>
						<div className="actions grid grid-cols-1 sm:grid-cols-3 mt-12 place-items-center gap-4">
							<ButtonProspect link={thisProd.modelLinks.modelProspect}>
								{t("Certifications.prospectDownload")}
							</ButtonProspect>
							<iframe
								width="350"
								height="197"
								src="https://www.youtube.com/embed/FTzkOdnPrDM"
								title="שומר מרחק 20/25"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen></iframe>
							<ButtonMati link={thisProd.modelLinks.modelMati}>
								{t("Certifications.mati")}
							</ButtonMati>
						</div>
					</div>
				</div>
			) : (
				<ProductPageSkeleton />
			)}
		</div>
	);
}

export default KeeperComp;
