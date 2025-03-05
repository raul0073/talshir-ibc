import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

export interface ShadowButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "secondary" | "custom";
	children: ReactNode;
    icon?: ReactNode;
	flipIcon?: boolean;
	submit?: boolean;
}
function ShadowButton({ children, variant, icon, flipIcon, submit, ...props }: ShadowButtonProps) {
	return (
		<button {...props} className={cn(`${icon? 'justify-between' : 'justify-center'} btn-${variant ? variant : "custom"}`, props.className)} type={submit ? 'submit' : "button"}>
			{children} {icon && <span className={`${flipIcon && "rotate-180"}`}>{icon}</span>}
		</button>
	);
}

export default ShadowButton;
