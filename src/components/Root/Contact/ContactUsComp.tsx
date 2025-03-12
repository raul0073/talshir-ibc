"use client";
import bg from "@/app/assets/images/contact/image 1.svg";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import SectionHeader from "../Header/SectionHeader";
import LogoComp from "../Logo/LogoComp";
import ContactForm from "./ContactForm";
import { useRef } from "react";

function ContactUsCopmp() {
	const [formComplete, setFormComplete] = useState<boolean>(false);
	const content = useTranslations("Contact");
	const title = content.raw("title").split(" ")[0] || "";
	const lastWord = content.raw("title").split(" ")[1] || "";
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"], 
	});
	const y = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);
	return (
		<div ref={containerRef} className="relative contact container mx-auto p-6 md:p-12">
			<AnimatePresence>
				{formComplete && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ opacity: 1, height: "100%" }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="absolute top-0 left-0 w-full h-full bg-stone-100 z-30 shadow-lg flex flex-col justify-center items-center gap-6 text-center">
						<LogoComp />
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="text-lg md:text-xl font-medium text-stone-600">
							Thank you! Your message has been sent successfully.
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="text-base text-stone-500">
							We&apos;ll get back to you as soon as possible.
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className="absolute inset-0 -z-10 w-full h-full opacity-20"
				style={{ y }}>
				<Image
					src={bg}
					alt="cover"
					fill
					className="object-cover"
					priority
				/>
			</motion.div>
			<div className="header w-full max-w-xl">
				<SectionHeader>
					{title} <span className="font-bold">{lastWord}</span>
				</SectionHeader>
				<p className="text-transparent bg-gradient-to-br from-zinc-800 to-stone-600 bg-clip-text text-lg md:text-xl mt-4">
					{content("description")}
				</p>
			</div>
			<div className="py-24">
				<div className="form sm:w-3/4 ">
					<ContactForm setFormComplete={setFormComplete} />
				</div>
			</div>
		</div>
	);
}

export default ContactUsCopmp;

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	type?: "text" | "email" | "phone";
	placeholder: string;
	className?: string;
	value?: string;
	onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const InputComp = ({
	type,
	placeholder,
	className,
	value,
	onChange,
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`inputComp focus:outline-none shadow-md border border-gray-400 p-3 placeholder:text-red-600 text-gray-700 font-medium text-lg ${className}`}
			value={value}
			onChange={onChange}
		/>
	);
};
