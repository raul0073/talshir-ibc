
import { IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

type ContactCardProps = {
	name: string;
	phone: string;
	whatsapp: string;
	email?: string;
};

export default function ContactCard({
	name,
	phone,
	whatsapp,
	email,
}: ContactCardProps) {
	return (
		<div className="space-y-2">
			<h4 className="text-white/80 font-semibold">{name}</h4>
			<ul className="space-y-2 text-white/50">
				<li className="flex items-center gap-2">
					<IconPhone className="w-4 h-4" />
					<Link href={`tel:${phone}`}>
						<span dir="ltr">+{phone}</span>
					</Link>
				</li>
				<li className="flex items-center gap-2">
					<IconBrandWhatsapp className="w-4 h-4" />
					<Link href={`https://wa.me/${whatsapp}`}>
						<span dir="ltr">+{phone}</span>
					</Link>
				</li>
				{email && (
					<li className="flex items-center gap-2">
						<IconMail className="w-4 h-4" />
						<Link href={`mailto:${email}`}>{email}</Link>
					</li>
				)}
			</ul>
		</div>
	);
}
