"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconSend } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ShadowButton from "../../shadow-button";
import { InputComp } from "./ContactUsComp";
function ContactForm() {
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	const labels = useTranslations("Contact.form");
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
			email: "",
			phone: "",
			role: "",
			message: "",
		},
	});
	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid sm:grid-cols-2 gap-4 sm:gap-8">
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
									className="border border-gray-400 p-3 placeholder:text-red-600 focus:outline-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="w-full flex justify-end items-center pt-12">
					<ShadowButton
						icon={<IconSend className={`${isRTL && "-rotate-[90deg]"}`} />}
						variant="default"
						submit
						className={`pt-8 `}
						style={{
							height: "40px",
						}}>
						{labels("submit")}
					</ShadowButton>
				</div>
			</form>
		</Form>
	);
}

export default ContactForm;

/**
 *     <form className="flex flex-col space-y-6">
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
   
    <div>
       
    </div>
</form>
 */
