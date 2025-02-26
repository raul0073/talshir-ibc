import logo from "@/app/assets/images/logo/IBC-300x230-noBG-noIBC-noBottom.png";
import Image from "next/image";
import Link from "next/link";
import ShadowButton from "../shadow-button";
import Tag from "./Tag";
import { useTranslations } from "next-intl";
function HeroContent({locale}: {locale: string}) {
    const content = useTranslations("Hero");
    const isRTL = locale === "he" || locale === "ar"
  return (
    <div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
    <div className="mb-12 mx-12">
        <Tag>✨ {content("highlight")}</Tag>
    </div>
    <div className="flex gap-4 items-center justify-center w-full h-full p-2 mb-4">
        <div className="relative w-full h-full">
            <Image
                src={logo}
                alt="nadal"
                width={300}
                height={300}
                style={{
                    transform: `${isRTL  && "rotateY(180deg)"}`,
                }}
                className={`absolute -bottom-4 -left-40 ${
                    isRTL && "-right-40"
                }`}
            />
            <h1 className="text-9xl font-bold text-appBlue">
                {content("title")}
            </h1>
            {/* <span
                className="absolute w-full h-4 -mt-2 left-0 top-full -translate-y-1/2 
            bg-gradient-to-r from-appRed -skew-y-4 to-appRed z-50"
                style={{
                    maskImage: `url(${underline.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                }}></span> */}
        </div>
    </div>
    <p className="text-4xl  text-black/80 max-w-2xl">
        {content("description")}
    </p>

    <div className="mt-4 flex justify-center"></div>
    <div className="actions mt-12 w-full flex justify-center gap-8">
        <Link href={"#"}>
            <ShadowButton variant="default">{content("actions.products")}</ShadowButton>
        </Link>
        <Link href={"#"}>
            <ShadowButton variant="outline">
                {content("actions.contact")}
            </ShadowButton>
        </Link>
    </div>
</div>
  )
}

export default HeroContent