import React, { useState } from 'react'
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom"
import '../output.css'

function Navbar() {

  const [openLinks] = useState(false);
  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);
  // }

  return (
    <div className="w-full h-fit fixed z-50 bg-white">
      <div className="w-4/5 m-auto h-fit py-[1.5%] grid grid-cols-2 items-center">
        <div className='flex w-full h-10'>
        <Link to='/'><img className="object-contain h-full w-fit mr-3 mb-5" src={Logo}  alt="Logo" /></Link>
        <h3 className='my-auto' id='navbar'> <Link to='/'> IMPACT NOW </Link></h3>
        </div>

          <div id={openLinks ? "open" : "close"} className="flex justify-end gap-10 text-gray-600 w-content-fit">
            

            <ul id='navbar'><Link to='/team'> Our Team </Link></ul>

            <ul id='navbar'><Link to='/donate'> Donate </Link></ul>
           < ul id='navbar'><Link to='/logistics'> Other </Link></ul>

          </div>
      </div>

      <div className="border-gray-300 shadow-2xl  border-b-2 w-full"></div>
    </div>
  )
}

export default Navbar
