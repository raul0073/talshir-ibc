
import { useTranslations } from "next-intl";
import { HTMLAttributes, useMemo } from "react";
import SectionHeader from "../Header/SectionHeader";
import Tag from "../Hero/Tag";
import "./styles/about.scss";
function About() {
	const t = useTranslations("About");
	const content = useMemo( () => {
		return {
			title: t("title"),
			tag: t("tag"),
			mission: t("mission"),
			vision: t("vision"),
		}
	}, [t]
	)
	return (
		<div className="container mx-auto !w-screen sm:pt-12">
			<div className="grid md:grid-cols-2 w-full h-full mt-24 gap-8   px-2">
				<div className="left w-full px-2">
					<div className="video-wrapper relative h-full min-h-56">
						<iframe
							className="h-full w-full shadow-lg z-10 object-cover border-none"
							src="https://www.youtube.com/embed/BxM4aBJbNdU?si=RmlVCcYDUAMTqtz1"
							title="YouTube video player"
							allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
						{/* <PlayButton className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 md:w-24 h-12 md:h-24 bg-white opacity-45 z-10 rounded-full shadow-md hover:opacity-100 hover:shadow-sm transition-all duration-200 ease-in-out" /> */}
					</div>
				</div>
				
				<div className="right w-full p-4 md:pl-24">
					<SectionHeader className="mb-4">
						{content.title.split(" ")[0]}{" "}
						<span className="font-bold">{content.title.split(" ")[1]}</span>
					</SectionHeader>
					<Tag>{content.tag}</Tag>
					<p className="text-zinc-800 mt-6 md:text-lg">{content.mission}</p>
					<p className="mt-4 text-zinc-800 md:text-lg">{content.vision}</p>
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
