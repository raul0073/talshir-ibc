import SectionWithLocale from "@/components/Section/SectionWithLocale";
import Image from "next/image";
import HeroContent from "./HeroContent";
import mobileBG from '@/app/assets/images/hero/mobile.jpeg';

function HeroComp() {
  return (
    <SectionWithLocale
      sectionName="hero"
      className="relative hero pt-0 pb-0">
      <div className="absolute left-0 top-0 w-full h-full inset-0 z-0 bg-gradient-to-b from-white/10 sm:from-white/60 to-black/80 sm:to-black/40"></div>

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
            src="https://images.pexels.com/photos/2036686/pexels-photo-2036686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="desktop_bg"
            layout="cover"
			width={1200}
			height={900}
            objectFit="cover"
            objectPosition="bottom"
            className="w-full h-full"
          />
        </div>
      </div>

      <HeroContent />
    </SectionWithLocale>
  );
}

export default HeroComp;
