import { ButtonPlayDemo } from "@/components/ui/button-arrow";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";
import { ProductItem } from "../../../../../../../../types/products";

function ModelHeader({
	thisProd,
	no3D,
	noPatent,
	patentLogo,
}: {
	thisProd: ProductItem;
	no3D?: boolean;
	noPatent?: boolean;
	patentLogo?: boolean;
}) {
	const tPage = useTranslations("ProductPage");
  console.log(tPage("playDemoVideo"));
	return (
		<div className="model-header p-3 sm:p-4 flex justify-center items-center relative">
			<div className="w-full sm:w-2/3 text-center">
				<h1 className="text-4xl sm:text-5xl uppercase text-appTextBlue font-suez">
					{thisProd.modelNamePage}
				</h1>
				{patentLogo && (
					<div className="w-full mt-2 sm:w-fit px-4 sm:px-8 py-2 md:py-4 lg:py-8 border-4 border-gray uppercase flex flex-col items-center gap-2 sm:gap-3 relative sm:absolute sm:left-0 md:left-[1%] lg:left-[3%] xl:left-[14%] sm:top-1/2 sm:-translate-y-1/2">
						<Image
							width={80}
							height={80}
							alt="patent"
							src={thisProd.modelExtraContent.images[1]}
						/>
						<span className="text-center">{thisProd.modelPatentNo}</span>
					</div>
				)}
				{!no3D && (
					<Fragment>
						<div className="mt-2 sm:mt-0  ">
							<ButtonPlayDemo thisProd={thisProd} />
							{/* <YoutubeButton link={thisProd.modelDemoVideo || '#'} /> */}
						</div>
					</Fragment>
				)}
				{!noPatent && (
					<p className="mt-4 text-lg text-appSubTextBlue">
						{thisProd.modelPatentNo}
					</p>
				)}
			</div>
		</div>
	);
}

export default ModelHeader;
