'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { HTMLAttributes, ReactNode } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
}
function SectionHeader({
	children,
	...props
}: SectionHeaderProps) {
	return (
		<motion.div
		initial={{ opacity: 0, y: "100%" }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, ease: "easeInOut" }}
		viewport={{ once: true }}
		>
			<h2
			{...props}
			className={cn(
				"text-5xl lg:text-7xl tracking-tight font-bold capitalize text-appTextBlue w-full",
				props.className
			)}>
			{children} 
			
		</h2>
		</motion.div>
	);
}

export default SectionHeader;
