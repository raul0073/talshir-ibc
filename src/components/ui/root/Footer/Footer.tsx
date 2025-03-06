"use client";
import logo2 from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import {
	IconBrandWhatsapp,
	IconClockCheck,
	IconMail,
	IconPhone,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { GrLinkedin, GrTwitter, GrYoutube } from "react-icons/gr";
import { Separator } from "../../separator";
import { getMenusOptions } from "../Navbar/data/menus";
import Modal, { ModalType } from "./Modal";
function Footer() {
	const [modalOn, setModalOn] = useState<boolean>(false);
	const [modalType, setModalType] = useState<ModalType | null>(null);

	function handleClick(type: string, e: React.MouseEvent) {
		e.preventDefault();
		setModalOn(true);
		setModalType(type as ModalType);
	}

	const content = useTranslations("Navbar");
	const rootContent = useTranslations("Root");
	const MENUS_OPTIONS = getMenusOptions(content);

	return (
		<footer>
			<div className="container mx-auto py-8 px-4 sm:p-12 md:p-24">
				<div className="w-full flex flex-col md:flex-row justify-center gap-6  text-white h-full">
					<div className="flex md:gap-6 md:w-2/4 md:justify-between w-full mb-6 md:mb-2">
						<nav className="w-full">
							<h3 className="uppercase mb-4 text-lg md:text-xl">
								{content("contact")}
							</h3>
							<ul className="space-y-3">
								<li className="capitalize flex items-center justify-start gap-2 w-full">
									<span>
										<IconPhone className="inline text-white/50 w-4 h-4" />
									</span>
									<span className="text-white/50">+972 555555555</span>
								</li>
								<li className="capitalize flex items-center justify-start gap-2 w-full">
									<span>
										<IconBrandWhatsapp className="inline text-white/50 w-4 h-4" />
									</span>
									<span className="text-white/50">111 333 444</span>
								</li>
								<li className="flex items-center justify-start gap-2 w-full">
									<span>
										<IconMail className="inline text-white/50 w-4 h-4" />
									</span>
									<span className="text-white/50">talshir@email.com</span>
								</li>
								<li className="capitalize flex items-center justify-start gap-2 w-full">
									<span>
										<IconClockCheck className="inline text-white/50 w-4 h-4" />
									</span>
									<span className="text-white/50">
										SUN - FRI @ 07:00 - 16:30
									</span>
								</li>
							</ul>
						</nav>
						<div className="md:hidden flex justify-end items-center w-fit">
							<Image
								src={logo2}
								loading="lazy"
								alt="talshir-ibc logo 300X300"
								width={300}
								height={300}
								className={` w-44`}
							/>
						</div>
					</div>
					<div className="flex md:gap-6 md:w-2/4 md:justify-between w-full">
						<nav className="w-full">
							<h3 className="uppercase mb-4 text-lg sm:text-xl">
								{rootContent("company")}
							</h3>
							<ul className="space-y-3">
								{MENUS_OPTIONS.MAIN.map(({ label, href }) => (
									<li key={href} className="capitalize text-white/50">
										<a href={href} className="">
											{label}{" "}
										</a>
									</li>
								))}
							</ul>
							{modalType && modalOn && (
								<Modal modalOn={() => setModalType(null)} type={modalType } />
							)}
						</nav>
						<nav className="w-full">
							<h3 className="uppercase mb-4 text-lg sm:text-xl">
								{content("menus.legal.legal")}
							</h3>
							<ul className="space-y-3">
								{MENUS_OPTIONS.LEGAL.map(({ label, href }) => (
									<li
										key={href}
										className="capitalize text-white/50"
										onClick={(e) => handleClick(href, e)}>
										<a href={''} className="">
											{label}{" "}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div className="hidden md:flex justify-center items-center ">
						<Image
							loading="lazy"
							src={logo2}
							alt="talshir-ibc logo 300X300"
							width={100}
							height={100}
							className={` w-44 h-auto`}
						/>
					</div>
				</div>
				<Separator className="mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent my-12" />
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

						<div className="SEO w-full grid grid-cols-2 place-items-center gap-8 mt-6 text-white/40 text-xs sm:text-base">
							<article className="flex justify-start items-start flex-col w-full">
								<h4 className="uppercase font-bold text-white/60 mb-2">
									Innovative Construction Patents
								</h4>
								<p>
									Talshir-IBC specializes in **unique construction patent
									solutions**, delivering innovative designs with **worldwide
									protection**. Our patents cover revolutionary technologies in
									**sustainable architecture** and **energy-efficient
									structures**, setting new standards in the industry.
								</p>
							</article>

							<article className="flex justify-start items-start flex-col w-full">
								<h4 className="uppercase font-bold text-white/60 mb-2">
									Global Reach, Local Expertise
								</h4>
								<p>
									Based in **Hod HaSharon, Israel**, Talshir-IBC partners with
									clients across the globe to bring patented construction
									technologies to life. With a focus on **eco-friendly
									innovations** and **cost-effective solutions**, we deliver
									tailored services to meet the demands of modern architecture.
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
