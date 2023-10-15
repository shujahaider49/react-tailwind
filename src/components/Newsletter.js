import React from 'react'

function Newsletter() {
  return (
    <div className="bg-[#2699fb] p-4">
        <div className="mx-w-[1240px] md:flex justify-between py-[40px]">
            <div className='m-2 mb-16'>
                <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to learn latest I.T skills?</h1>
                <span className='text-white'>
                    Sign up to our newsletter and stay up to date.
                </span>
            </div>
            <div className='m-2'>
                <input type="text" className=' p-3 mr-2 text-slate-600 mb-2 rounded-full' placeholder='Enter Email' />
                <button className='bg-black text-white p-3 rounded-full'>Get Started</button>
                <br />
                <p className='text-white'>
                    We care about the protection of your data.Read our <br /> <a href="" className='text-black'>Privacy Policy</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
