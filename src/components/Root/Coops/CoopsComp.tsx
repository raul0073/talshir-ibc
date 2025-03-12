import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";
import SectionHeader from "../Header/SectionHeader";
import StatsBar from "../Stats/StatsComp";
import coops1 from "./../../../app/assets/images/coops/demri-removebg-preview.png";
import coops2 from "./../../../app/assets/images/coops/Tidhar-share1-removebg-preview.png";
function CoopsComp() {
	const content = useTranslations("Coops");
	const titleParts = content("title").split(" ");
	const lastWord = titleParts.pop();
	const title = titleParts.join(" ");
	return (
		<Fragment>
			{/* boxes */}
			{/* top right */}
			{/* 
			<span className="w-12 lg:w-44 h-12 lg:h-44 bg-appGray absolute top-0 right-0 z-0"></span>
			<span className="w-12 lg:w-44 h-12 lg:h-44 mt-12 lg:mt-44 bg-[#4B4B4B] opacity-20 absolute top-0 right-0 z-0"></span>
			<span className="w-12 lg:w-44 h-12 lg:h-44 mt-12 lg:mt-44 mr-12 lg:mr-44 bg-white absolute top-0 right-0 z-0 opacity-10"></span>
			<span className="w-12 lg:w-44 h-12 lg:h-44 mt-24 lg:mt-[22rem] bg-[#4B4B4B] opacity-10 absolute top-0 right-0 z-0"></span>
			{/* bottom left 
			<span className="w-12 lg:w-44 h-12 lg:h-44 mb-12 lg:mb-44 ml-12 lg:ml-44 bg-white absolute bottom-0 left-0 z-0 opacity-10"></span>
			<span className="w-12 lg:w-44 h-12 lg:h-44 bg-[#4B4B4B] opacity-10 absolute bottom-0 left-0 z-0"></span>
			*/}
			{/* content */}

			<div className="container mx-auto relative">
				<div className="w-full mx-auto max-w-xl text-center mb-4">
					<SectionHeader className="text-center text-white">
						{title} <span className="font-bold">{lastWord}</span>
					</SectionHeader>
				</div>
				<div className="coops logos w-full py-12 mx-auto max-w-xl grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center place-items-center">
					<Image
						src={coops2}
						alt="coops"
						className=" w-44 h-auto "
						width={150}
						height={150}
					/>
					<Image
						src={coops1}
						alt="coops"
						className=" w-44 h-auto "
						width={150}
						height={150}
					/>
					<Image
						src={coops2}
						alt="coops"
						className=" w-44 h-auto "
						width={150}
						height={150}
					/>
					<Image
						src={coops1}
						alt="coops"
						className=" w-44 h-auto "
						width={150}
						height={150}
					/>
				</div>
			</div>
			<div className="stats w-full max-w-5xl mx-auto">
				<StatsBar />
			</div>
		</Fragment>
	);
}

export default CoopsComp;
