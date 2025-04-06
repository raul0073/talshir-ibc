"use client";
import pdf from "@/app/assets/icons/pdf.png";
import mati from "@/app/assets/images/certifications/mati.png";
import pikod from "@/app/assets/images/certifications/Pakar.svg.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Button } from "./button";

export function ButtonProspect({
	children,
	link,
}: {
	children: ReactNode;
	link: string;
}) {
	return (
		<Link href={link} target="_blank">
			<Button className="text-nowrap flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white">
				<span>{children}</span>
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
	return (
		<Link href={link} target="_blank">
			<Button className="text-nowrap flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white hover:bg-appSubTextBlue">
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
	return (
		<Link href={link} target="_blank">
			<Button className="text-nowrap flex flex-col gap-6 justify-between items-center text-lg h-fit w-full rounded-[.4rem] p-6 bg-white text-appTextBlue font-semibold hover:text-white">
				<span>{children}</span>
				<span>
					<Image src={pikod} width={60} height={60} alt="mati_download" />
				</span>
			</Button>
		</Link>
	);
}

export function ButtonPlayDemo({
	children,
	videoUrl,
}: {
	children: React.ReactNode;
	videoUrl: string;
}) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-center gap-1 sm:gap-3 uppercase border-gray border-4 w-full sm:w-fit sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
					<span className="text-sky-800">{children}</span>
					<span className="rounded-full bg-white border-sky-900 border text-sky-900 p-1">
						<IconPlayerPlay />
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-6xl">
				<video
					src={videoUrl}
					controls
					className="w-full h-auto rounded-lg"
					autoPlay
				/>
			</DialogContent>
		</Dialog>
	);
}
export function ButtonPlayDemoFixed({
	children,
	videoUrl,
}: {
	children: React.ReactNode;
	videoUrl: string;
}) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-center gap-1 sm:gap-3 uppercase border-gray border-4 w-full sm:w-fit">
					<span className="text-sky-800">{children}</span>
					<span className="rounded-full bg-white border-sky-900 border text-sky-900 p-1">
						<IconPlayerPlay />
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-6xl">
				<video
					src={videoUrl}
					controls
					className="w-full h-auto rounded-lg"
					autoPlay
				/>
			</DialogContent>
		</Dialog>
	);
}
