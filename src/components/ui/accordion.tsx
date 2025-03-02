"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

const CustomAccordionTrigger = ({
  title,
  description,
  imageSrc,
  isRTL
}: {
  title: string
  description: string
  imageSrc: StaticImageData
  isRTL: boolean
}) => (
  
  <AccordionTrigger className="group w-full flex items-end gap-4" >
    <span className={`w-full lg:w-1/4 uppercase flex justify-start text-appBlue text-lg md:text-2xl font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{title}</span>
    <span className={`w-2/3 capitalize  md:text-lg hidden lg:flex group-data-[state=open]:hidden ${isRTL ? 'text-right' : 'text-left'}`}>{description}</span>
    <span className="w-full sm:w-1/3 group-data-[state=open]:w-1/2 flex justify-end">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={500}
        className="w-16 sm:w-24 h-auto sm:group-data-[state=open]:w-64 group-data-[state=open]:w-24"
      />
    </span>
  </AccordionTrigger>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, CustomAccordionTrigger }
