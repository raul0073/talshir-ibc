import SectionWithLocale from "@/components/Section/SectionWithLocale";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

function ProductModal({
	image,
    desc,
	closeModal,
}: {
	image: StaticImageData;
    desc: string;
	closeModal: () => void;
}) {
	return (
		<SectionWithLocale sectionName="product-modal relative">
			<div className="w-screen h-screen fixed bg-black top-0 left-0 z-40">
				<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-4">
					<div className="w-full flex justify-between items-center pb-4 text-lg">
						<h2 className="uppercase">{desc}</h2>
						<button onClick={closeModal}>
							<X />
						</button>
					</div>
					<Image src={image} alt="produ_usage_1" objectFit="cover" />
				</div>
			</div>
		</SectionWithLocale>
	);
}

export default ProductModal;
