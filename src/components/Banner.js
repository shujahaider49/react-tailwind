import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
        <div className="max-w-[1240px] py-[40px] mx-auto text-center font-bold">
            <div className='text-xl md:text-3xl md:p-[24px]'>
                Learn with us
            </div>
            <h2 className='text-white text-5xl md:text-[60px] md:p-[24px]' >Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] text-white md:p-[24px]'>
                Learn  <Typed
                className='text-black'
                    strings={['Web Development','React js','Ethical Hacking',]}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={90}
                />
                
            </div>
            <button className='bg-black text-white p-3 rounded-full '>Get Started</button>
        </div>
    </div>
  )
}

export default Banner
