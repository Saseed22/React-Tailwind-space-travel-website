import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'


const Navbar = () => {
  const [nav, setNav] = useState()
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      <div className='flex justify-between items-center fixed w-full h-[90px] z-20 p-4 '>
      <Link to='/'><h1 className='text-3xl font-bold lg:text-5xl'>GlX TRVL</h1></Link> 
      <ul className='hidden sm:flex text-xl md:text-2xl lg:text-3xl mr-8 justify-between items-center gap-8'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/training'>Training</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='sm:hidden'>
        {nav? <FaTimes size={20}/>:<FaBars size={20} />}
        </div>
      </div>

      <ul className={
        nav ? 'absolute translate-x-0  bg-opacity-60 text-white flex flex-col z-10 justify-center items-center bg-gray-700 w-full h-[100vh] gap-8 text-3xl transition-all duration-500 sm:hidden'
        : 'absolute -translate-x-[100%]  bg-opacity-60 text-white flex flex-col z-10 justify-center items-center bg-gray-700 w-full h-[100vh] gap-8 text-3xl transition-all duration-500 sm:hidden'}>
        <li onClick={handleNav}><Link to='/'>Home</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/training'>Training</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </div>
  )
}

export default Navbar