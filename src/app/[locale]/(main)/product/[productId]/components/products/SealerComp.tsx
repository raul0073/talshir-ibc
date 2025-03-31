import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Separator } from "@/components/ui/separator";
import { IconBrandYoutube } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { AltImages, ProductItemAlt } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function SealerComp({ id }: { id: string }) {
	const t = useTranslations("Products");

	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItemAlt) => p.id === id);
	}, [t, id]);
	return (
		<div className="container  mx-auto min-h-[90vh]">
			{thisProd ? (
				<div className="grid grid-cols-1">
					<div className="">
						<ModelHeader thisProd={thisProd} />
						<Separator />
						<p className="text-2xl uppercase text-appSubTextBlue my-4 text-center">
							{thisProd.modelDescription}
						</p>
						<div className="model-usage p-3 sm:p-4 flex flex-col sm:flex-row justify-center gap-6 items-center">
							<div className="flex flex-col items-center justify-center w-fit text-center border-2 px-6 py-6 border-appGray">
								<IconBrandYoutube
									color="white"
									fill="red"
									size={60}
									className=" cursor-pointer"
								/>
								<span>{"YouTube Video"}</span>
							</div>
							<div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
								<div className="flex flex-col items-center mt-4 sm:mt-0">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2">
										{thisProd.modelExtraContent.extraContent2}
									</div>
									<EnlargeableImage
										src={thisProd.modelExtraContent.extraContent}
										alt={thisProd.modelName}
										width={100}
										height={200}
									/>
								</div>

								<div className="flex flex-col items-center mt-4 sm:mt-0">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2">
										{thisProd.modelExtraContent.extraContent3}
									</div>

									<EnlargeableImage
										src={thisProd.modelImages.productPageMain}
										alt={thisProd.modelName}
										width={400}
										height={400}
										className="border"
									/>
								</div>

								<div className="flex flex-col items-center mt-4 sm:mt-0">
									<div className="bg-appTextBlue text-white w-full p-2 text-center my-2 text-nowrap">
										{thisProd.modelExtraContent.extraContent4}
									</div>

									<EnlargeableImage
										src={thisProd.modelExtraContent.img}
										alt={thisProd.modelName}
										width={200}
										height={200}
										className="border"
									/>
								</div>
							</div>
							<div className="hidden sm:flex flex-col items-center justify-center w-fit text-center border-2 px-6 py-6 border-appGray">
								<Image
									width={80}
									height={80}
									alt="patent"
									src={thisProd.modelExtraContent.extraContent9}
								/>
								<span>{thisProd.modelPatentNo}</span>
							</div>
						</div>
						<Separator />
						<div className="w-full sm:w-fit mx-auto  mt-6">
							<div className="bg-appTextBlue text-white p-2 text-center my-2">
								{thisProd.modelExtraContent.extraContent5}
							</div>
							<div className="flex justify-center items-center gap-4 mx-auto w-full">
								{thisProd.modelImages.usages.map(
									(item: AltImages, indx: number) => (
										<div
											key={indx}
											className="w-full max-w-[6rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem]">
											<EnlargeableImage
												src={item.img}
												alt={`${thisProd.modelName}_usage_${indx}`}
												width={250}
												height={250}
												className=""
											/>
											<div className="bg-appTextBlue text-white p-2 text-center my-2 sm:text-nowrap">
												{item.label}
											</div>
										</div>
									)
								)}
							</div>
						</div>
						<div className="flex flex-col items-center mt-4">
							<p className="border-4 border-appGray p-8 font-bold">
								{thisProd.modelUsage[0]} <br />
								{thisProd.modelUsage[1]}
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

export default SealerComp;
