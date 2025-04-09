import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonPlayDemoFixed } from "@/components/ui/button-arrow";
import { IconBrandYoutube } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import {
	AltImages,
	ProductItemAlt,
} from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function SealerComp({ id }: { id: string }) {
	const t = useTranslations("Products");
	const tPage = useTranslations("ProductPage");

	const locale = useLocale();
	const isRTL = locale === "he";
	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItemAlt) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} noPatent no3D patentLogo />
						<p className="text-3xl uppercase text-appTextBlue my-4 text-center font-suez">
							{thisProd.modelDescription}
						</p>
						<div className="model-usage p-3 md:p-4 flex flex-col md:flex-row justify-center gap-6 items-center mx-auto max-w-6xl">
							<Link
							className="flex flex-col items-center justify-center w-full md:w-fit text-center border-2 px-8 py-6 border-appGray"
								href={thisProd.modelLinks.modelExtra}
									target="_blank"
								>
								<IconBrandYoutube
									color="white"
									fill="red"
									size={60}
									className=" cursor-pointer"
								/>
								<span>{"YouTube Video"}</span>
							</Link>
							<div className="flex flex-col md:flex-row justify-center gap-4 w-full">
								{/* Left (Slim) */}
								<div className="flex flex-col items-center mt-4 md:mt-0 order-1 md:order-none flex-1">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2">
										{thisProd.modelExtraContent.extraContent2}
									</div>
									<div className="w-full h-[300px] flex justify-center items-center overflow-hidden">
										<EnlargeableImage
											src={thisProd.modelExtraContent.images[0]}
											alt={thisProd.modelName}
											className="object-contain h-full"
										/>
									</div>
								</div>

								{/* Middle (Wide) */}
								<div className="flex flex-col items-center mt-4 md:mt-0 flex-[2]">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2">
										{thisProd.modelExtraContent.extraContent3}
									</div>
									<div className="w-full h-[300px] flex justify-center items-center overflow-hidden">
										<EnlargeableImage
											src={thisProd.modelImages.productPageMain}
											alt={thisProd.modelName}
											className="object-cover h-full border"
										/>
									</div>
								</div>

								{/* Right (Slim) */}
								<div className="flex flex-col items-center mt-4 md:mt-0 flex-1">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2 text-nowrap">
										{thisProd.modelExtraContent.extraContent4}
									</div>
									<div className="w-full h-[300px] flex justify-center items-center overflow-hidden">
										<EnlargeableImage
											src={thisProd.modelExtraContent.img}
											alt={thisProd.modelName}
											className={`object-contain h-full border ${
												isRTL ? "" : "scale-x-[-1]"
											}`}
										/>
									</div>
								</div>
							</div>

							<ButtonPlayDemoFixed videoUrl={thisProd.modelDemoVideo || "#"}>
								{tPage("playDemoVideo")}
							</ButtonPlayDemoFixed>
						</div>
						<div className="w-full md:w-fit mx-auto  mt-6">
							<div className="bg-appTextBlue text-white p-2 text-center my-2">
								{thisProd.modelExtraContent.extraContent5}
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 place-items-center justify-items-center gap-4 mx-auto w-full">
								{thisProd.modelImages.usages.map(
									(item: AltImages, indx: number) => (
										<div
											key={indx}
											className="flex flex-col items-center w-full">
											<EnlargeableImage
												src={item.img}
												alt={`${thisProd.modelName}_usage_${indx}`}
												width={150}
												height={150}
												className="w-full h-full"
											/>
											<div className="bg-appTextBlue text-white p-2 text-center my-2 w-full">
												{item.label}
											</div>
										</div>
									)
								)}
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-8 justify-center">
							<div className="flex flex-col items-center mt-4">
								<p className="border-4 border-appGray p-8 font-bold text-center">
									{thisProd.modelUsage[0]} <br />
									{thisProd.modelUsage[1]}
								</p>
							</div>
							<div className="flex flex-col items-center mt-4">
								<p className="border-4 border-appGray p-8 font-bold text-center">
									{thisProd.modelUsage[2]} <br />
									{thisProd.modelUsage[3]}
								</p>
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

export default SealerComp;
