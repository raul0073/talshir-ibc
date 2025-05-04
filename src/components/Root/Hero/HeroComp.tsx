import SectionWithLocale from "@/components/Section/SectionWithLocale";
import Image from "next/image";
import HeroContent from "./HeroContent";
import mobileBG from '@/app/assets/images/hero/mobile.jpeg';
import desktopBG from '@/app/assets/images/hero/2.png';

function HeroComp() {
  return (
    <SectionWithLocale
      sectionName="hero"
      id="home"
      className="relative hero pt-0 pb-0">
     <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-black/60 via-black/20  to-black/80 sm:from-black/10 sm:via-white/10 sm:to-black/90"></div>

      <div className="absolute left-0 top-0 w-full h-full -z-10">
        {/* Mobile background image */}
        <div className="lg:hidden w-full h-full">
          <Image
            src={mobileBG}
            alt="mobile_bg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>

        {/* Desktop background image */}
        <div className="hidden lg:block w-full h-full">
          <Image
            src={desktopBG}
            alt="desktop_bg"
            layout="fill"

            objectFit="fill"
            objectPosition="bottom center"
            className="w-full h-full"
          />
        </div>
      </div>

      <HeroContent />
    </SectionWithLocale>
  );
}

export default HeroComp;
