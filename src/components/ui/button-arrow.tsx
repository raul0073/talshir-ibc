"use client";
import pdf from "@/app/assets/icons/pdf.png";
import mati from "@/app/assets/images/certifications/mati.png";
import pikod from "@/app/assets/images/certifications/Pakar.svg.png";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { IconBrandYoutube } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { ProductItem } from "../../../types/products";
import { Button } from "./button";

export function ButtonProspect({
	children,
	link,
}: {
	children: ReactNode;
	link: string;
}) {
	const locale = useLocale();
	const isRTL = locale === "he";
	return (
		<Link href={link} target="_blank">
			<Button
				className={`flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white ${
					isRTL ? "text-nowrap" : "text-pretty"
				}`}>
				<span className={`${isRTL ? "text-nowrap" : "text-pretty"}`}>
					{children}
				</span>
				<span>
					<Image
						src={pdf}
						width={60}
						height={60}
						alt="model_prospect_download"
					/>
				</span>
			</Button>
		</Link>
	);
}

export function ButtonMati({
	children,
	link,
}: {
	children: ReactNode;
	link: string;
}) {
	const locale = useLocale();
	const isRTL = locale === "he";
	return (
		<Link href={link} target="_blank">
			<Button
				className={`flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white ${
					isRTL ? "text-nowrap" : "text-pretty"
				}`}>
				<span>{children}</span>
				<span>
					<Image src={mati} width={60} height={60} alt="mati_download" />
				</span>
			</Button>
		</Link>
	);
}
export function ButtonPikod({
	children,
	link,
}: {
	children: ReactNode;
	link: string;
}) {
	const locale = useLocale();
	const isRTL = locale === "he";
	return (
		<Link href={link} target="_blank">
			<Button
				className={`flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white ${
					isRTL ? "text-nowrap" : "text-pretty"
				}`}>
				<span>{children}</span>
				<span>
					<Image src={pikod} width={60} height={60} alt="mati_download" />
				</span>
			</Button>
		</Link>
	);
}

export function ButtonPlayDemo({
	thisProd,
	disabled,
}: {
	thisProd: ProductItem;
	disabled?: boolean;
}) {
	const [open, setOpen] = useState(false);
	const locale = useLocale();
	const isRTL = locale === "he";
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					disabled={thisProd.modelDemoVideo ? false : true}
					className={`flex flex-col items-center justify-center w-full md:w-fit text-center mt-2 sm:mt-0  border-4 px-8 py-2 sm:py-6 border-appGray sm:absolute ${
						isRTL ? "sm:left-0" : "sm:right-0"
					} sm:top-1/2 sm:-translate-y-1/2 ${disabled ? "opacity-40" : ""}`}>
					<IconBrandYoutube color="white" fill="red" size={60} className="" />
					<span>{"YouTube Video"}</span>
					{disabled && <span>{"✨Coming Soon"}</span>}
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-6xl w-fit">
				<DialogTitle className="text-center text-appTextBlue font-bold text-lg">
					{thisProd.modelNamePage}
				</DialogTitle>
				<iframe
					className="w-[250px] h-[500px] sm:h-[600px] sm:w-[350px]"
					src={thisProd.modelDemoVideo}
					title={thisProd.modelNamePage}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</DialogContent>
		</Dialog>
	);
}

export function YoutubeButton({ link }: { link: string }) {
	return (
		<Link
			className="flex flex-col items-center justify-center w-full md:w-fit text-center  border-4 px-8 py-6 border-appGray sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2"
			href={link}
			target="_blank">
			<IconBrandYoutube
				color="white"
				fill="red"
				size={60}
				className=" cursor-pointer"
			/>
			<span>{"YouTube Video"}</span>
		</Link>
	);
}
