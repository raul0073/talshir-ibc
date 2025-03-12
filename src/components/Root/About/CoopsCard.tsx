import Image from "next/image";
import coop1 from "@/app/assets/images/coops/Tidhar-share1-removebg-preview.png";

export default function CoopsSection() {
	const totalCards = 6; // Number of coops
	const radius = 200; // Adjust radius

	return (
		<div className="relative flex items-center justify-center mt-44 w-[40rem] h-[20rem]">
			{/* Half Circle */}
			<span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full h-[20rem] w-[40rem] bg-appBlue"></span>

			{/* Coop Cards Positioned Along Upper Half of the Circle */}
			{Array.from({ length: totalCards }).map((_, i) => {
				const angle = 180 - (i / (totalCards - 1)) * 180; // Flip cards to upper half
				const x = radius * Math.cos((angle * Math.PI) / 180);
				const y = radius * Math.sin((angle * Math.PI) / 180) - radius; // Move to upper half

				return (
					<div
						key={i}
						className="absolute w-24 h-24 rounded-full flex justify-center items-center shadow-md text-white 
						hover:-translate-y-2 hover:shadow-sm transition-transform duration-200 ease-in-out border border-appBlue/10 bg-white"
						style={{
							transform: `translate(${x}px, ${y}px)`,
						}}
					>
						<Image src={coop1} alt="coop" layout="intrinsic" width={80} height={80} loading="lazy" />
					</div>
				);
			})}
		</div>
	);
}
