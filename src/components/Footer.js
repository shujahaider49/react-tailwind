import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io';
import {BsTwitter} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';

function Footer() {
  return (
    <div className="bg-[#2699fb] p-4 md:flex justify-around">
        <div className=" p-5">
            <h1 className='text-black font-bold text-[50px] text-justify'>React Js</h1>
            <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellat incidunt minus iure molestias iusto similique, dolore rerum optio inventore voluptas ratione fugiat rem assumenda! Ipsam sequi magni veritatis voluptate.</p>

            <div className='flex text-[20px] mt-3 gap-6'>
            <FaFacebookF className='text-white' title='FaceBook'/>
            <IoLogoInstagram className='text-white' title='Instagram' />
            <BsTwitter className='text-white' title='Twitter' />
            <AiOutlineGithub className='text-white' title='GitHub'/>
            </div>
        </div>

        <div className=" p-5 md:flex justify-between place-items-center md:gap-48  ">
            <div className="text-white ">
                <h1 className='text-black font-bold'>Solution</h1>
                <p>Analytics</p>
                <p>Marketing</p>
                <p>Commerce</p>
                <p>Insights</p>
            </div>

            <div className="text-white ">
                <h1 className='text-black font-bold'>Support</h1>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
            </div>

            <div className="text-white ">
                <h1 className='text-black font-bold '>Company</h1>
                <p>About</p>
                <p>Blogs</p>
                <p>Job</p>
                <p>Press</p>
                <p>Careers</p>
            </div>

        </div>
        
    </div>
  )
}

export default Footer
