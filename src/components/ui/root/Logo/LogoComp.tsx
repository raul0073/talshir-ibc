import logo from "@/app/assets/images/logo/IBC-300x230-noBG-noIBC-noBottom.png";
import logo2 from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import { useLocale } from "next-intl";
import Image from "next/image";

function LogoComp({alt} : {alt?:boolean}) {
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	return (
		<Image
			src={alt? logo2 : logo}
			loading="eager"
			alt="talshir-ibc logo 300X300"
			width={300}
			height={300}
			style={{
				transform: `${isRTL && "rotateY(180deg)"}`,
			}}
			className={` w-[100px] h-[100px]  sm:w-[200px] sm:h-[200px] aspect-square`}
		/>
	);
}

export default LogoComp;
