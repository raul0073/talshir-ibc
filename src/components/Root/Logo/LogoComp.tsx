import logo from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import Image from "next/image";

function LogoComp() {
	return (
		<Image
			src={logo}
			loading="eager"
			alt="talshir-ibc logo 300X300"
			width={300}
			height={300}
			className="logoImg"
		/>
	);
}

export default LogoComp;
