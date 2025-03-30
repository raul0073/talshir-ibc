'use client'
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // shadcn/ui dialog
import { useState } from "react";
import { motion } from "framer-motion";

type EnlargeableImageProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function EnlargeableImage({ src, alt, width = 400, height = 300, className }: EnlargeableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex items-center justify-center bg-white p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl"
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
