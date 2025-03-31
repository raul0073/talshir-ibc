import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ProductItem } from "../../../../../../../../types/products";
import EnlargeableImage from "../shared/ImageComp";
import ModelHeader from "../shared/ModelHeader";

function NadalRotem50({ id }: { id: string }) {
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

						<div className="model-usage p-3 sm:p-4 grid grid-cols-1 max-w-2xl mx-auto">
							<div className="w-full flex justify-center h-fit py-3">
								<EnlargeableImage
									src={thisProd.modelImages.productPageMain}
									alt={thisProd.modelName}
									width={400}
									height={300}
									className=""
								/>
							</div>
							<ul className="text-sm md:text-lg capitalize w-full list-disc px-2 sm:px-1 space-y-1">
								{thisProd.modelUsage.map((line: string, index: number) => (
									<li key={index}>{line}</li>
								))}
							</ul>
							<EnlargeableImage
								src={thisProd.modelImages.usage1}
								alt={thisProd.modelName}
								width={500}
								height={500}
								className="mt-4"
							/>
						</div>
						<Separator />
						<div className="w-full flex justify-center flex-col items-center gap-8 mt-12">
							<h2 className="font-bold text-3xl md:text-5xl uppercase text-appTextBlue tracking-tighter">
								{thisProd.modelExtraContent.header}
							</h2>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.desc}
							</p>
							<div className="flex justify-center items-center">
							<EnlargeableImage
								src={thisProd.modelExtraContent.img}
								alt={thisProd.modelName}
								width={500}
								height={500}
								className="py-6"
							/>
							<EnlargeableImage
								src={thisProd.modelExtraContent.img2}
								alt={thisProd.modelName}
								width={200}
								height={200}
								className="py-6"
							/>
							</div>
							<p className="text-xl sm:text-2xl text-appSubTextBlue font-medium max-w-xl text-center">
								{thisProd.modelExtraContent.extraContent}
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

export default NadalRotem50;
