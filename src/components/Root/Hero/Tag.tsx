'use client'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

function Tag( {children} : {children: ReactNode}) {
  return (
   
      <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut", delay: 1 }}
      viewport={{ once: true }}
      className="inline-flex py-1 text-xs md:text-sm md:px-4 px-2 bg-gradient-to-t from-appRed to-pink-600 rounded-full text-neutral-50 font-semibold capitalize">

        {children}
      </motion.div>
  
  )
}

export default Tag

