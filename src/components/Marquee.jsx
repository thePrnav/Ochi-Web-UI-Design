import { motion } from 'framer-motion'
import React from 'react'



function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-t-3xl bg-[#004d43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity,ease: 'linear', duration: 10}} className='text-[22vw] -mt-[2.8vw] leading-none font-["Founders Grotesk"] tracking-tighter uppercase font-bold pl-10'>We are ochi</motion.h1>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity ,ease: 'linear', duration: 10}} className='text-[22vw] -mt-[2.8vw] leading-none font-["Founders Grotesk"] tracking-tighter uppercase font-bold '>We are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee