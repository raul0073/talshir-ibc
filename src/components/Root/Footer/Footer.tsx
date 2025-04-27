"use client";
import logo2 from "@/app/assets/images/logo/logo.png";
import { Separator } from "@/components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { GrLinkedin, GrTwitter, GrYoutube } from "react-icons/gr";
import { getMenusOptions } from "../Navbar/data/menus";
import ContactCard from "./ContactCard";
import Modal, { ModalType } from "./Modal";
function Footer() {
	const [modalOn, setModalOn] = useState<boolean>(false);
	const [modalType, setModalType] = useState<ModalType | null>(null);
	const locale = useLocale()
	function handleClick(type: string, e: React.MouseEvent) {
		e.preventDefault();
		setModalOn(true);
		setModalType(type as ModalType);
	}

	const content = useTranslations("Navbar");
	const rootContent = useTranslations("Root");
	const contactContent = useTranslations("Contact");
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
							<div className="space-y-6">
								<ContactCard
									name={contactContent("ilan")}
									phone={contactContent("ilanPhone")}
									whatsapp={contactContent("ilanWhatsApp")}
									email={contactContent("ilanEmail")}
								/>
								<ContactCard
									name={contactContent("Itamar")}
									phone={contactContent("itamarPhone")}
									whatsapp={contactContent("itamarWhatsApp")}
									email={contactContent("itamarEmail")}
								/>
							</div>
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
								<Modal modalOn={() => setModalType(null)} type={modalType} locale={locale} />
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
										<a href={""} className="">
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
							HaSharon District, ISRAEL
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
