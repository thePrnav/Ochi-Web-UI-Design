import { motion } from 'framer-motion'
import React from 'react'


function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-20 px-10 bg-[#cdea68] rounded-t-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[3.5vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses 
        that need to raise funds, sell products, explain complex ideas,
        and hire great people.
        </h1>

        <div className='w-full flex gap-5 border-t-[1px] border-[#a1b562] pt-10 mt-20'>
            <div className='w-1/2'>
                <h1 className='text-7xl'> Our approach:</h1>
                <button className='uppercase flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Readme More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>

            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden '>
              <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' className='h-full w-full'/>
            </div>
        </div>
    </div>
  )
}

export default About