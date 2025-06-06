'use client'
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // shadcn/ui dialog
import { HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";

interface EnlargeableImageProps extends HTMLAttributes<HTMLImageElement>  {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function EnlargeableImage({ src, alt, width = 400, height = 300, className, ...props }: EnlargeableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer transition-transform hover:scale-[102%] ${className}`}
        onClick={() => setOpen(true)}
        {...props}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex items-center justify-center  md:p-8 p-2 w-[90%] lg:w-fit">
          <DialogTitle>
            {}
          </DialogTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              width={width}
              height={height}
              className=""
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
