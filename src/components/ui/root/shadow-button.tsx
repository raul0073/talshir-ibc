import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

export interface ShadowButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "secondary" | "custom";
	children: ReactNode;
    icon?: ReactNode
}
function ShadowButton({ children, variant, icon, ...props }: ShadowButtonProps) {
	return (
		<button {...props} className={cn(`${icon? 'justify-between' : 'justify-center'} btn-${variant ? variant : "custom"}`, props.className)}>
			{children} {icon && <span>{icon}</span>}
		</button>
	);
}

export default ShadowButton;
