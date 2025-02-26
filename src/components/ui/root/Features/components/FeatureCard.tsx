import { ReactNode } from "react";
function FeatureCard({
	text,
	icon,
	desc,
}: {
	text: string;
	icon: ReactNode;
	desc: string;
}) {
	return (
		<div className="feature card realtive bg-gradient-to-tl from-[#2455CF] to-[#7198FD] border-appBlue rounded-[.2rem] shadow-md shadow-gray-400 p-8 h-fit md:min-h-[300px] w-full md:max-w-[350px]">
			<div className="absolute  w-12 h-12 bg-gradient-to-tr from-amber-50 to-amber-100 blur-xl opacity-30" />

			<div className="pt-6">{icon}</div>
			<p className="text-white font-medium capitalize mt-4 text-2xl">{text}</p>
			<p className="mt-2 text-transparent bg-gradient-to-r from-appGray to-white bg-clip-text">
				{desc}
			</p>
		</div>
	);
}

export default FeatureCard;
