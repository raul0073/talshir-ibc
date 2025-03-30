'use client'
import { motion } from 'framer-motion';
import coopsImages from '@/../messages/coops.json';
import Image from "next/image";

function CoopsComp() {
  const duplicatedImages = [...coopsImages, ...coopsImages]; 

  return (
    <div className="overflow-hidden border-y border-appTextBlue p-4 shadow-md">
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: ['100%', '-100%'], 
        }}
        transition={{
          x: {
            repeat: Infinity, 
            repeatType: 'loop',
            duration: 30, 
            ease: 'linear', 
          },
        }}
      >
        {duplicatedImages.map(({ company, image_url }, indx) => (
          <Image
            key={indx}
            src={image_url}
            alt={company}
            width={80}
            height={80}
            className="w-32 h-auto mix-blend-multiply"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default CoopsComp;
