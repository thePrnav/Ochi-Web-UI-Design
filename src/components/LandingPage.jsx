import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-52 px-20'>
          {['We Create', 'Eye-Opening', 'Presentations'].map((item,index) => {
            return ( <div className='masker'>
                        <div className='w-fit flex item-end overflow-hidden '>
                          {index === 1 && 
                          <motion.div 
                          initial={{width: 0}} 
                          animate={{width: '10vw'}} 
                          transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                          className='mt-[1vw] mr-[1vw] w-[10vw] rounded-md h-[5.3vw] relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover overflow-hidden'>
                            
                          </motion.div>
                          }
                          <h1 className='flex items-center uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium font-["founders grotesk condesend"]'>
                            {item}
                          </h1>
                        </div>
                    </div>
            );
          })}
        

      </div>

      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item,index) => (
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}

        <div className='start flex items-center gap-5'>
          <div className='uppercase px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full '>start the project</div>
          <div className='w-10 h-10 border-[2px] border-zinc-500 rounded-full flex justify-center items-center'>
            <GoArrowUpRight />
          </div>

        </div>
      </div>

    </div>
  )
}

export default LandingPage