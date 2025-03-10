import { Boxes } from "@/components/ui/background-boxes";

export function BoxesBG() {
	return (
		<div className="h-full relative w-full overflow-hidden bg-white flex flex-col items-center justify-center">
			{/* <div className="absolute inset-0 w-full h-full bg-white  [mask-image:radial-gradient(transparent,white)] pointer-events-none z-0" /> */}
			<div className="absolute inset-0 w-full h-full bg-white  [mask-image:radial-gradient(white,transparent)] pointer-events-none z-0" />

			<Boxes />
		</div>
	);
}
