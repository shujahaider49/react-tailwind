import React from 'react'
import {RxPerson} from 'react-icons/rx';


function Plans() {
  return (
    <div className="py-[100px] mx-4">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
            <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-700 grid grid-rows-5 place-items-center hover:text-[green]'>
              <RxPerson className='text-[50px]'/>
              <h1 className='font-bold text-[25px]'>Web Development</h1>
              <p className='font-bold text-4xl mb-12'>$149</p>
              <div className='grid grid-rows-3 place-items-center text-center gap-4'>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-green-500 text-black font-semibold p-3 rounded-2xl mt-4 '>Get Started</button>
              </div>

              <div className='shadow-xl bg-gray-200 h-[500px] my-4 hover:scale-105 duration-700 grid grid-rows-5 place-items-center hover:text-[green]'>
              <RxPerson className='text-[50px]'/>
              <h1 className='font-bold text-[25px]'>Digital Marketing</h1>
              <p className='font-bold text-4xl mb-12'>$120</p>
              <div className='grid grid-rows-3 place-items-center text-center gap-4'>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-black text-green-500 font-semibold p-3 rounded-2xl mt-4 '>Get Started</button>
              </div>
              
              <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-700 grid grid-rows-5 place-items-center hover:text-[green]'>
              <RxPerson className='text-[50px]'/>
              <h1 className='font-bold text-[25px]'>App Development</h1>
              <p className='font-bold text-4xl mb-12'>$167</p>
              <div className='grid grid-rows-3 place-items-center text-center gap-4'>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-green-500 text-black font-semibold p-3 rounded-2xl mt-4 '>Get Started</button>
              </div>
              
        </div>
    </div>
  )
}

export default Plans
