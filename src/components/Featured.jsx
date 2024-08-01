import { motion, useAnimation } from 'framer-motion'
import React, {useState} from 'react'
import { Power4 } from 'gsap/all'



function Featured() {
    const cards = [useAnimation({}), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    };
    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"})
    };

  return (
    <div data-scroll data-scroll-section className='relative w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>Featured projects</h1>           
        </div>

        <div className='px-20'>
            <div className='cards flex gap-10 mt-20 w-full'>

                <motion.div 
                onHoverStart={() => handleHover(0)} 
                onHoverEnd={() => handleHoverEnd(0)} 
                className='cardcontainer relative w-1/2 h-[75vh]'>

                        <h1 className='absolute flex text-[#cdea68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders Grotesk"] font-semibold text-9xl'>
                            {'FYDE'.split('').map((item,index) =>  (
                               <motion.span 
                                initial={{y: '100%'}} 
                                animate={cards[0]} 
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className='inline-block'> 
                                 {item}
                               </motion.span>
                            ))}
                        </h1>
                    
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
                    </div>
                </motion.div>
                
                <motion.div 
                onHoverStart={() => handleHover(1)} 
                onHoverEnd={() => handleHoverEnd(1)}
                
                className='cardcontainer relative w-1/2 h-[75vh]'>

                <h1 className='absolute flex text-[#cdea68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders Grotesk"] font-semibold text-9xl'>
                    {'VISE'.split('').map((item,index) =>  (
                        <motion.span 
                                initial={{y: '100%'}} 
                                animate={cards[1]} 
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className='inline-block'> 
                                 {item}
                               </motion.span>
                        ))}
                </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'/>
                    </div>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured