import logo2 from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import {
	IconBrandWhatsapp,
	IconClockCheck,
	IconMail,
	IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import { GrLinkedin, GrTwitter, GrYoutube } from "react-icons/gr";
import { Separator } from "../../separator";
function Footer() {
	return (
		<footer>
			<div className="container mx-auto py-8 px-4 sm:p-12 md:p-24">
				<div className="w-full grid grid-cols-3 md:grid-cols-4 gap-6 place-items-center text-white h-full">
			
					<nav className="col-span-2 sm:col-span-1">
						<h3 className="uppercase mb-4 text-lg sm:text-xl">contact</h3>
						<ul className="space-y-2">
							<li className="capitalize flex items-center justify-start gap-2 w-full">
								<span>
									<IconPhone className="inline text-white/50" />
								</span>
								<span>+972 555555555</span>
							</li>
							<li className="capitalize flex items-center justify-start gap-2 w-full">
								<span>
									<IconBrandWhatsapp className="inline text-white/50" />
								</span>
								<span>111 333 444</span>
							</li>
							<li className="capitalize flex items-center justify-start gap-2 w-full">
								<span>
									<IconMail className="inline text-white/50" />
								</span>
								<span>talshir@email.com</span>
							</li>
							<li className="capitalize flex items-center justify-start gap-2 w-full">
								<span>
									<IconClockCheck className="inline text-white/50" />
								</span>
								<span>SUN - SAT @ 07:00 - 16:00</span>
							</li>
						</ul>
					</nav>

					<div className="flex justify-center items-center w-full">
						<Image
							src={logo2}
							alt="talshir-ibc logo 300X300"
							width={300}
							height={300}
							className={` w-[100px] h-[100px]`}
						/>
					</div>
					<nav className="hidden md:block sm:w-full ">
						<h3 className="uppercase mb-4 text-lg sm:text-xl">menu</h3>
						<ul className="space-y-2 text-white/80">
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
						</ul>
					</nav>
					<nav className="hidden md:block sm:w-full">
						<h3 className="uppercase mb-4 text-lg sm:text-xl">legal</h3>
						<ul className="space-y-2">
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
							<li className="capitalize text-white/50">item</li>
						</ul>
					</nav>
				</div>
				<Separator className="w-full mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent my-12" />
				<div className="seo">
					<div className="social flex flex-col justify-center gap-2 items-center ">
						<div className="flex text-white gap-4">
							<GrTwitter />
							<GrLinkedin />
							<GrYoutube />
						</div>
						<br />
						<p className="text-white/60"> © 2025 Talshir-IBC inc</p>
						<p className="text-white/80 uppercase font-semibold">
							{" "}
							Hod HaSharon, Hatchelet 32, ISRAEL
						</p>

						<div className="w-full grid grid-cols-2 place-items-center gap-8 mt-6 text-white/60 text-xs sm:text-base">
							<div className="flex justify-start items-start w-full">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it t El funcionamiento de la plataforma es
								muy sencillo. Se debe completar la solicitud, ésta información
								se envía a las entidades financieras a tiempo real con el fin de
								que la herramienta compare, negocie y escanee las mejores
								ofertas. Una vez aceptada la propuesta, se ingresa el dinero
								directamente en la cuenta del cliente.
							</div>
							<div className="flex justify-start items-center w-full">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it t El funcionamiento de la plataforma es
								muy sencillo. Se debe completar la solicitud, ésta información
								se envía a las entidades financieras a tiempo real con el fin de
								que la herramienta compare, negocie y escanee las mejores
								ofertas. Una vez aceptada la propuesta, se ingresa el dinero
								directamente en la cuenta del cliente.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
