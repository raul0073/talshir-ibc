import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { Link2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function NadalRotemPlus({ id }: { id: string }) {
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
						<h2 className="font-bold text-2xl uppercase text-appSubTextBlue mb-4 text-center">
							{thisProd.modelDescription}
						</h2>
						
						<div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6 px-2">
							<div className="flex flex-col items-center">
								<p className="text-2xl uppercase text-appSubTextBlue mb-4 text-center">
									{thisProd.modelExtraContent.extraContent}{" "}
									<Link href={thisProd.modelLinks.modelExtra}>
										<Link2 className="inline" />
									</Link>
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
									width={400}
									height={400}
								/>
							</div>
							<div className="sm:col-span-2 w-full flex justify-end p-4">
								<ButtonProspect link={thisProd.modelLinks.modelExtra}>
									{tPage("plasticCetrification")}
								</ButtonProspect>
							</div>
						</div>

					
						<div className="w-full flex justify-center flex-col items-center gap-8">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appSubTextBlue tracking-tighter">
								{thisProd.modelExtraContent.desc}
							</h2>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 w-2/3 mx-auto mt-6">
							<div className="flex flex-col items-center gap-6 w-full">
								<div className="flex gap-4 justify-center">
									{thisProd.modelImages.usages
										.slice(0, 2)
										.map((src: StaticImageData, indx: number) => {
											return (
												<div key={indx} className="w-36 md:w-96 h-36 md:h-96">
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
								<EnlargeableImage
									src={thisProd.modelImages.usages[2]}
									alt={thisProd.modelName}
									width={650}
									height={650}
								/>
							</div>
							<div className="flex flex-col items-center gap-6 border w-full">
								<iframe
								className="w-full sm:w-[200px]"
									width="150"
									height="400"
									src="https://www.youtube.com/embed/ncQcqkb1Zos"
									title='שומר מרחק "נדל" - רותם'
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen></iframe>
								<iframe
								className="w-full sm:w-[200px]"
									width="150"
									height="400"
									src="https://www.youtube.com/embed/DryVwsQRnJE"
									title='שומר מרחק "נדל" - רותם'
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen></iframe>
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

export default NadalRotemPlus;
