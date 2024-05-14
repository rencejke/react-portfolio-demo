import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UiFooter = () => {
  return (
    <div className="footer max-w-[900x] w-full mx-auto px-4 py-1 font-regular bg-[#31363F] text-white">
    <div className='flex flex-row justify-around p-12'>
      <div className="footer-item flex flex-col">
      <span className='text-[1.4rem]'>Cla<span>rence</span></span>
      <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
</div>
      <div className="footer-item flex flex-col">
      <span className='text-[1.4rem]'>Keep Connected</span>
      <ul className='mt-3 flex flex-col gap-2'>
        <li><Link className='flex flex-row items-center gap-2 text-[15px]'><FaFacebook />Facebook</Link></li>
        <li><Link className='flex flex-row items-center gap-2 text-[15px]'><FaTwitter />Twitter</Link></li>
        <li><Link className='flex flex-row items-center gap-2 text-[15px]'><BiLogoGmail />Gmail</Link></li>
        <li><Link className='flex flex-row items-center gap-2 text-[15px]'><FaInstagram />Instagram</Link></li>
        <li><Link className='flex flex-row items-center gap-2 text-[15px]'><FaGithub />Github</Link></li>
      </ul>

      </div>
      <div className="footer-item flex flex-col ">
      <span className='text-[1.4rem]'>Contact Information</span>
      
      <ul className='mt-3 flex flex-col gap-2'>
        <li className='text-[15px] flex flex-row items-center gap-2'><IoLocationSharp />Brgy. San Gregorio San Pablo City Laguna</li>
        <li className='text-[15px] flex flex-row items-center gap-2'><FaMobileScreen />123456789</li>
        <li className='text-[15px] flex flex-row items-center gap-2'><MdEmail />bonillaclarencejake@gmail.com</li>
      </ul>

      </div>
    </div>
  </div>
  )
}

export default UiFooter
