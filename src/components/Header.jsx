import React from 'react'
import logo from '../assets/Koinxlogo.jpg'
function Header() {
  return (
    <div className='w-full p-4 px-10 flex items-center justify-between h-16 shadow-sm bg-white'>
      <img src={logo} alt="logo" />
      <button className='px-6 rounded-[4px] py-1   border  border-[#0052FE] text-base tracking-wider font-semibold text-[#0052FE]'>Sign In</button>
    </div>
  )
}

export default Header
