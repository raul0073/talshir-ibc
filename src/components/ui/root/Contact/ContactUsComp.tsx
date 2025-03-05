import bg from "@/app/assets/images/contact/image 1.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HTMLAttributes } from "react";
import SectionHeader from "../Header/SectionHeader";
import ContactForm from "./ContactForm";
function ContactUsCopmp() {
	const content = useTranslations("Contact");
	const title = content.raw("title").split(" ")[0] || "";
	const lastWord = content.raw("title").split(" ")[1] || "";
	return (
		<div className="contact container mx-auto p-6 md:p-12 ">
			<Image
				src={bg}
				alt="cover"
				width={1440}
				height={1440}
				className="fixed left-0 top-0 inset-0 w-full h-full -z-10 opacity-20"
			/>
			<div className="header w-full max-w-xl">
				<SectionHeader>
					{title} <span className="font-bold">{lastWord}</span>
				</SectionHeader>
				<p className="text-transparent bg-gradient-to-br from-zinc-800 to-stone-600 bg-clip-text text-lg md:text-xl mt-4">
					{content("description")}
				</p>
			</div>
			<div className="grid sm:grid-cols-2 gap-12 py-24">
				<div className="form sm:w-3/4 col-span-2">
					<ContactForm />
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
			className={`inputComp focus:outline-none shadow-md border border-gray-400 p-3 placeholder:text-red-600 text-appBlue ${className}`}
			value={value}
			onChange={onChange}
		/>
	);
};
