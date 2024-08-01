import React from 'react'


function Cards() {
  return (
    <div className='flex items-center px-[3vw] gap-5 w-full h-screen bg-zinc-900 '>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center'>
                 <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                 <button className=' absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 '>&copy;2019-2022</button>
                 
            </div>
        </div>

        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>

             <div className='card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
                <button className=' absolute rounded-full px-3 py-1 border-2 left-7 bottom-10 uppercase '>Rating 5.0 on Clutch</button>
             </div>

             <div className='card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]'>
                <img className='h-[7vw]' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
                <button className=' absolute rounded-full px-3 py-1 border-2 left-7 bottom-10 uppercase '>Business Bootcamp Alumni</button>
             </div>

        </div>
    </div>
  )
}

export default Cards