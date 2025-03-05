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
    <div className="group relative rounded-[.2rem]  p-8 overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-tl from-[#2455CF] to-[#7198FD]">
      {/* Background effects */}
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-[.2rem] transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-30">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.01] stroke-black/5"
          >
            <defs>
              <pattern id="pattern1" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern1)" className="rounded-[.2rem]"></rect>
          </svg>
        </div>
        <div className="absolute inset-0 rounded-[.2rem] bg-gradient-to-r from-[#e4ff81] to-appBlue opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ maskImage: "radial-gradient(300px at 300px 10px, white, transparent)" }}
        ></div>
        <div className="absolute inset-0 rounded-[.2rem] opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-60"
          style={{ maskImage: "radial-gradient(300px at 300px 10px, white, transparent)" }}
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          >
            <defs>
              <pattern id="pattern2" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern2)"></rect>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 rounded-[.2rem]">
      <div className="absolute  w-12 h-12 bg-gradient-to-tr from-amber-50 to-amber-100 blur-xl opacity-30" />
        <div className="text-gray-500 h-8 w-8">{icon}</div>
        <h3 className="mt-6 font-semibold text-white tracking-wide leading-6 antialiased text-xl capitalize">{text}</h3>
        <p className="mt-2 text-gray-200 tracking-wide leading-6 antialiased">{desc}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
