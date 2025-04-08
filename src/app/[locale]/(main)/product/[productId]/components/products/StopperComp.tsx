import carmel from "@/app/assets/images/certifications/carmel-ap2.jpg";
import mati_complete from "@/app/assets/images/certifications/mati_complete.jpg";
import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonPikod, ButtonProspect } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function StopperComp({ id }: { id: string }) {
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
						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 place-items-center max-w-6xl mx-auto">
							<div>
								<h2 className="text-xl md:text-2xl uppercase text-appTextBlue tracking-tighter mb-6 text-nowrap font-bold">
									{thisProd.modelDescription}
								</h2>
								<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index} className="text-nowrap">{line}</li>
									))}
								</ul>
							</div>
							<div className="flex justify-center flex-col items-center">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={400}
									height={400}
									className="rotate-[105deg]"
								/>
							</div>

							<div>
								<EnlargeableImage
									src="https://talshir-ibc.com/wp-content/uploads/2019/02/talshirIBC-Stopper.jpg"
									alt={thisProd.modelName}
									width={500}
									height={500}
								/>
							</div>
						</div>
						<div className="images-col p-4 w-full flex justify-center flex-col items-center mt-6 max-w-2xl mx-auto">
							<h3 className="font-bold text-2xl uppercase text-appTextBlue mb-4 max-w-xl">
								{thisProd.pikodHaorefApproved}
							</h3>
							<ul className="px-12 w-full flex justify-center flex-col items-start list-disc sm:px-1 space-y-1 max-w-xl">
								<li>{thisProd.modelExtraContent.extraContent2}</li>
								<li>{thisProd.modelExtraContent.extraContent3}</li>
							</ul>
							<div className="w-full flex flex-col items-centermax-w-2xl mt-2">
								<div className="flex gap-4 py-2">
									{thisProd.modelImages.usages.map(
										(src: StaticImageData, indx: number) => {
											return (
												<div key={indx} className="">
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
								<p className="bg-appTextBlue rounded-[.5rem] w-full px-4 py-1 mx-auto text-white">
								{thisProd.modelExtraContent.extraContent}
							</p>
							</div>
							
						</div>
						<div className="certifications p-4 max-w-7xl mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
								<div className="bg-white rounded-xl p-4">
									<EnlargeableImage
										src={mati_complete}
										alt={"mati"}
										width={500}
										height={500}
									/>
									<p className="text-appTextBlue text-lg font-bold">
										{thisProd.modelExtraContent.desc}
									</p>
								</div>

								<div className="bg-white rounded-xl p-4">
									<EnlargeableImage
										src={carmel}
										alt={"carmel"}
										width={500}
										height={500}
									/>
									<p className="text-appTextBlue text-lg font-bold">
										{thisProd.modelExtraContent.header}
									</p>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-12">
								<ButtonProspect link={thisProd.modelLinks.modelExtra}>
									{t("Certifications.sealingSpecs")}
								</ButtonProspect>
								<ButtonProspect link={thisProd.modelLinks.modelProspect}>
									{thisProd.modelName} {t("Certifications.prospectDownload")}
								</ButtonProspect>
								<ButtonPikod link={thisProd.modelLinks.modelPikod}>
									{t("Certifications.pikod_haoref")}
								</ButtonPikod>
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

export default StopperComp;
