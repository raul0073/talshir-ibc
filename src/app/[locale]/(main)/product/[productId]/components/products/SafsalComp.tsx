import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function SafsalComp({ id }: { id: string }) {
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
						<Separator />
						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 mx-auto">
							<div className="col-span-2 flex justify-center h-fit">
								<Image
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={400}
									height={400}
									className=""
								/>
							</div>
							<div className="mt-6 w-full flex flex-col sm:flex-row justify-center gap-8">
								<ul className="max-w-4xl text-sm md:text-lg capitalize  list-disc px-2 sm:px-1 space-y-1">
									{thisProd.modelUsage.map((line: string, index: number) => (
										<li key={index}>{line}</li>
									))}
								</ul>
								<div>
									{" "}
									<EnlargeableImage
										src={thisProd.modelImages.usage1}
										alt={thisProd.modelName}
										width={250}
										height={250}
										className="py-6"
									/>
								</div>
							</div>
						</div>
						<div className="actions grid grid-cols-1 mt-12 place-items-center p-4">
							<ButtonProspect link="https://talshir-ibc.com/wp-content/uploads/2023/09/Results_Talshir-22.06.23.pdf">
								{thisProd.modelCertification}
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

export default SafsalComp;
