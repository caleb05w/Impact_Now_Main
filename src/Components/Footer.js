import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/logo_white.png";


function Footer() {
  return (
    <div className="bg-black w-full h-fit text-white mx-auto">
        <div className="grid grid-cols-5 pt-10 w-full h-fit justify-items-center">
                <ul><Link to='/'> Home </Link></ul>
                <ul className='flex flex-col gap-1'> 
                  <Link to='/donate'> Donate </Link>
                </ul>
                <img className="object-contain h-10 w-fit" src={Logo}/> 
                <ul className='flex flex-col gap-1'> 
                  <Link to='/about'> About </Link>
                  <Link to='/team'>  Meet the Team </Link>
                </ul>
                <ul className='flex flex-col gap-1'> 
                  <Link to='/Policy'> Privacy Policy </Link>
                  <Link to='/minutes'> Minutes </Link>
                  <Link to='/Finance'> Finances </Link>
                </ul>
        </div>

        <h5 className="text-center pb-10 "> @2024 IMPACT N.O.W Foundation </h5>
    </div>
  )
}

export default Footer

