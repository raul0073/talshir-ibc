
import { IconPhone, IconPin, IconSend } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { HTMLAttributes } from "react";
import ShadowButton from "../../shadow-button";
import SectionHeader from "../Header/SectionHeader";
import Image from "next/image";

function ContactUsCopmp() {
	const content = useTranslations("Contact");
	const title = content.raw("title").split(" ")[0]|| "";;
	const lastWord = content.raw("title").split(" ")[1]|| "";;
	const locale = useLocale()
	const isRTL = locale === "he" || locale === "ar";
	return (
		<div className="container mx-auto p-6 md:p-12">
			<div className="header w-full max-w-xl">
				<SectionHeader>
					{title} <span className="font-bold">{lastWord}</span>
				</SectionHeader>
				<p className="text-transparent bg-gradient-to-br from-zinc-800 to-stone-600 bg-clip-text text-lg md:text-xl mt-4">
					{content("description")}
				</p>
			</div>
			<div className="grid sm:grid-cols-3 gap-12 py-24">
				<div className="form sm:w-3/4 col-span-2">
					<form className="flex flex-col space-y-6">
						<InputComp type="text" placeholder={content("form.name") + '*'} className="" />
						<InputComp
							type="email"
							placeholder={content("form.email") + '*'}
							className="shadow-md border border-gray-400 placeholder:text-red-600"
						/>
						<InputComp
							type="phone"
							placeholder={content("form.phone") + '*'}
							className="shadow-md border border-gray-400 placeholder:text-red-600"
						/>
						<InputComp
							type="text"
							placeholder={content("form.role") + '*'}
							className="shadow-md border border-gray-400 placeholder:text-red-600"
						/>
						<textarea
							placeholder={content("form.message") + '*'}
							className="border border-gray-400 p-3 placeholder:text-red-600 focus:outline-none"
						/>
						<div>
							<ShadowButton
								icon={<IconSend className={`${isRTL && '-rotate-[90deg]'}`} />}
								variant="default"
								className={`mt-4 `}
								style={{
									height: '40px'
								}}
								>
								{content("form.submit")}
							</ShadowButton>
						</div>
					</form>
				</div>
				<div className="map">
					<div className="max-w-xl">
						<p className="text-lg font-medium mb-6">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
							minus, blanditiis veniam molestiae sunt sequi!
						</p>
					</div>
					<Image
					src="https://images.pexels.com/photos/7937313/pexels-photo-7937313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="contact us"
					width={550}
					height={550}
					/>
					<div className="flex flex-col mt-8">
						<div className="flex gap-4 items-center">
							<IconPhone className="inline text-appBlue w-4 h-4" />
							<span>+972 333 666 999</span>
						</div>
						<div className="flex gap-4 items-center">
							<IconPin className="inline text-appBlue w-4 h-4" />
							<span>Hod HaSharon, Hatchelet 32, ISRAEL</span>
						</div>
					</div>
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
