import ilan from "@/app/assets/images/about/ilan1.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HTMLAttributes } from "react";
import SectionHeader from "../Header/SectionHeader";
import Tag from "../Hero/Tag";
import "./styles/about.scss";
function About() {
	const content = useTranslations("About");
	return (
		<div className="container mx-auto">
			<div className="grid md:grid-cols-2 w-full h-full mt-24 gap-8">
				<div className="left w-full">
					<div className="image-wrapper relative p-2">
						<Image
							src={ilan}
							alt="ilan_ber"
							objectFit="contain"
							className="md:h-2/3 lg:h-full w-full shadow-lg z-10"
						/>
						<PlayButton className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 md:w-24 h-12 md:h-24 bg-white opacity-45 z-10 rounded-full shadow-md hover:opacity-100 hover:shadow-sm transition-all duration-200 ease-in-out" />
					</div>
				</div>
				<div className="right w-full p-4 md:pl-24">
					<SectionHeader className="mb-4">
						{content("title").split(" ")[0]}{" "}
						<span className="font-bold">{content("title").split(" ")[1]}</span>
					</SectionHeader>
					<Tag>{content("tag")}</Tag>
					<p className="text-zinc-800 mt-6 md:text-lg">{content("mission")}</p>
					<p className="mt-4 text-zinc-800 md:text-lg">{content("vision")}</p>
				</div>
			</div>
		</div>
	);
}

export default About;

// play button
export const PlayButton = ({ ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<div {...props}>
			<span className="relative p-4 cursor-pointer flex justify-center items-center w-full h-full">
				<svg
					width="18"
					height="22"
					viewBox="0 0 18 22"
					fill="currentColor"
					className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M18 11L0 21.3923V0.607696L18 11Z" fill="black" />
				</svg>
			</span>
		</div>
	);
};
