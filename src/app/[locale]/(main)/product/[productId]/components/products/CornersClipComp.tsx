import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function CornersClipComp({ id }: { id: string }) {
	const t = useTranslations("Products");

	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} no3D />

						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
							<div>
								<p className="text-2xl uppercase text-appTextBlue mb-4 text-center font-bold">
									{thisProd.modelDescription}
								</p>
								<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index}>{line}</li>
									))}
								</ul>
							</div>
							<div className="flex justify-center flex-col items-center mt-4 sm:mt-0">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={500}
									height={500}
								/>
							</div>
						</div>

						<div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center py-6 px-2">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/2cW-v9kdMJQ"
								title="תפס מתכוונן עבור פינות לטיח - תהליך הרכבה"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen></iframe>
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/s_e6pirbiqA"
								title="תפס מתכוונן עבור פינות לטיח"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen></iframe>
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/U4hoYctL5U4"
								title="תפס מתכוונן עבור פינות טייח"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen></iframe>
						</div>

						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appTextBlue tracking-tighter">
								{thisProd.modelExtraContent.header}
							</h2>
							<div className="grid grid-cols-3 md:grid-cols-4  gap-4">
								{thisProd.modelImages.usages.map(
									(img: StaticImageData, indx: number) => (
										<div
											key={indx}
											className="w-full max-w-[6rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem]">
											<EnlargeableImage
												src={img}
												alt={`${thisProd.modelName}_usage_${indx}`}
												width={250}
												height={250}
												className="w-full h-auto"
											/>
										</div>
									)
								)}
							</div>
						</div>
						<div className="actions grid grid-cols-1 mt-12 place-items-center gap-4">
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

export default CornersClipComp;
