import {
    Accordion,
    AccordionContent,
    AccordionItem,
    CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { StaticImageData } from "next/image";

export type ProductAccordionProps = {
    modelName: string;
    modelDesc: string;
    modelImg: StaticImageData;
}
export function ProductAccordion({modelName, modelDesc, modelImg} : ProductAccordionProps) {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<CustomAccordionTrigger
					title={modelName}
					description={modelDesc}
					imageSrc={modelImg}
				/>
				<AccordionContent className="w-full flex justify-between items-end gap-8 md:text-lg mt-4">
					<p className="max-w-4xl">
                    Yes. It adheres to the WAI-ARIA design pattern. <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus voluptate, quam architecto fuga illo omnis soluta rerum aut sequi. Possimus iusto dolorem beatae? Consectetur officiis laboriosam necessitatibus dolore totam.
                    </p>
                    <button className="btn-small text-nowrap py-0 px-0" >see more &#8594;</button>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
