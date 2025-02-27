import logo from "@/app/assets/images/logo/IBC-300x230-noBG-noIBC-noBottom.png";
import { useLocale } from "next-intl";
import Image from "next/image";

function LogoComp() {
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	return (
		<Image
			src={logo}
			alt="talshir-ibc logo 300X300"
			width={300}
			height={300}
			style={{
				transform: `${isRTL && "rotateY(180deg)"}`,
			}}
			className={` w-[100px] h-[100px]  sm:w-[200px] sm:h-[200px]`}
		/>
	);
}

export default LogoComp;
