"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	IconSend,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputComp } from "./ContactUsComp";
function ContactForm({
	setFormComplete,
}: {
	setFormComplete: Dispatch<SetStateAction<boolean>>;
}) {
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	const labels = useTranslations("Contact.form");

	const handleFormCompleted = () => {
		setFormComplete(true);
		setTimeout(() => {
			setFormComplete(false);
		}, 3000);
	};
	const contactFormSchema = z.object({
		full_name: z
			.string({
				message: labels.raw("required"),
			})
			.min(2, {
				message: labels.raw("minLength"),
			})
			.max(30, {
				message: labels.raw("maxLength"),
			}),
		company: z
			.string({
				message: labels.raw("required"),
			})
			.min(2, {
				message: labels.raw("minLength"),
			})
			.max(60, {
				message: labels.raw("maxLength"),
			}),
		email: z
			.string()
			.email({
				message: labels.raw("invalidEmail"),
			})
			.min(2, {
				message: labels.raw("minLength"),
			})
			.max(30, {
				message: labels.raw("maxLength"),
			}),
		phone: z
			.string({
				message: labels.raw("invalidPhone"),
			})
			.min(2, {
				message: labels.raw("minLength"),
			})
			.max(30, {
				message: labels.raw("maxLength"),
			}),
		role: z
			.string({
				message: labels.raw("required"),
			})
			.min(2, {
				message: labels.raw("minLength"),
			})
			.max(30, {
				message: labels.raw("maxLength"),
			}),
		message: z
			.string({
				message: labels.raw("required"),
			})
			.min(5, {
				message: labels.raw("minLength"),
			})
			.max(80, {
				message: labels.raw("maxLength"),
			}),
	});
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			full_name: "",
			company: "",
			email: "",
			phone: "",
			role: "",
			message: "",
		},
	});
	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		// Do something with the form values.
		handleFormCompleted();
		console.log(values);
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 gap-4">
				<FormField
					control={form.control}
					name="full_name"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("name")}</FormLabel>
							<FormControl>
								<InputComp placeholder={labels("name") + "*"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="company"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("company")}</FormLabel>
							<FormControl>
								<InputComp placeholder={labels("company") + "*"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("email")}</FormLabel>
							<FormControl>
								<InputComp placeholder={labels("email") + "*"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="role"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("role")}</FormLabel>
							<FormControl>
								<InputComp placeholder={labels("role") + "*"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("phone")}</FormLabel>
							<FormControl>
								<InputComp placeholder={labels("phone") + "*"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-1">
							<FormLabel>{labels("message")}</FormLabel>
							<FormControl>
								<textarea
									placeholder={labels("message") + "*"}
									{...field}
									className="border border-sky-900 p-3 shadow-md placeholder:text-neutral-600 focus:outline-none font-medium text-lg rounded-[.2rem]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex gap-6 justify-end items-center pt-12 col-span-2">
			
					<Button type="submit" className="px-6 bg-appTextBlue sm:mt-0 mt-8 py-6 rounded-[.4rem]">
						<span className="text-lg">{labels("submit")}</span>
						<span>
							<IconSend className={`${isRTL && "-rotate-[90deg]"}`} />
						</span>
					</Button>
				</div>
			</form>
		</Form>
	);
}

export default ContactForm;
