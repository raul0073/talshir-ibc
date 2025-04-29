import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { ButtonProspect } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
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
					<div className="px-2">
						<ModelHeader thisProd={thisProd} withDesc />
					
						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 mx-auto ">
							<div className="actions grid grid-cols-1 mt-12 place-items-center p-4 order-3 sm:order-none">
								<ButtonProspect link="https://files.talshir-ibc.com/uploads/2023/09/Results_Talshir-22.06.23.pdf">
									{thisProd.modelCertification}
								</ButtonProspect>
							</div>
							<div className="flex justify-center h-fit order-1 sm:order-none">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={400}
									height={400}
									className=""
								/>
							</div>
							<div className="mt-6 w-full flex justify-center gap-8 order-2 sm:order-none">
								<EnlargeableImage
									src={thisProd.modelImages.usage1}
									alt={thisProd.modelName}
									width={250}
									height={250}
									className="py-6"
								/>
							</div>
						</div>
						<div className="w-full flex justify-center items-center px-2 sm:px-1 mt-4">
							<ul className="max-w-xl text-sm md:text-lg capitalize  list-disc  space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
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
