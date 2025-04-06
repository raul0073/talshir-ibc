import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function Palscope({ id }: { id: string }) {
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
					
						<div className="model-usage p-3 sm:p-4 grid grid-cols-1">
							<div className="flex justify-center flex-col items-center">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={500}
									height={400}
								/>
							</div>
							<div className="w-full flex flex-col sm:flex-row justify-center  gap-4">
								<ul className="text-sm md:text-lg capitalize list-disc px-2 sm:px-1 space-y-1">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index}>{line}</li>
									))}
								</ul>

								<EnlargeableImage
									src={thisProd.modelImages.usages[2]}
									alt={thisProd.modelName}
									width={250}
									height={250}
								/>
							</div>
							<div className="w-full flex justify-center pt-2">
								<iframe
									width="354"
									height="199"
									src="https://www.youtube.com/embed/1u2d58W34wk"
									title="אטם גמיש לצינור דיווידג"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen></iframe>
							</div>
						</div>

						
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12 p-4 sm:p-4">
							<h2 className="font-bold text-2xl md:text-3xl uppercase text-appSubTextBlue tracking-tighter">
								{thisProd.modelExtraContent.header}
							</h2>
							<div className="images-col p-4">
								<div className="w-full flex justify-evenly items-center gap-4">
									<div className="flex gap-4">
										{thisProd.modelImages.usages
											.slice(0, 2)
											.map((src: StaticImageData, indx: number) => {
												return (
													<div key={indx} className="w-24 md:w-36 h-24 md:h-36">
														<EnlargeableImage
															src={src}
															alt={thisProd.modelName + "_usage_" + indx}
															width={250}
															height={250}
														/>
													</div>
												);
											})}
									</div>
								</div>
							</div>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.desc}
							</p>
						</div>
						<div className="actions grid grid-cols-1 mt-12 place-items-center">
							<ButtonProspect link={thisProd.modelLinks.modelProspect}>
								{t("Certifications.prospectDownload")}
							</ButtonProspect>
						</div>
					</div>
				</div>
			) : (
				<ProductPageSkeleton />
			)}
		</div>
	);
}

export default Palscope;
