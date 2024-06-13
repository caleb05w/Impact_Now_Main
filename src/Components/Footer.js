import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/logo_white.png";


function Footer() {
  return (
    <div className="bg-black w-full h-fit text-white mx-auto" id='footer'>
        <div className="grid grid-cols-5 pt-10 w-full m-auto h-fit justify-items-center">
                <ul id='footer'><Link to='/'> Home </Link></ul>
                <ul className='flex flex-col gap-1'> 
                <ul id='footer'><Link to='/donate'> Donate </Link></ul>
                </ul>
                <img className="object-contain h-10 w-fit" src={Logo}/> 
                <ul className='flex flex-col gap-1'> 
                {/* <ul id='footer'><Link to='/about'> About </Link></ul> */}
                  <Link to='/team' className='mobileHide'>  Meet the Team </Link>
                </ul>
                <ul className='flex flex-col gap-1'> 
                <ul id='footer'><Link to='/Policy'> Privacy Policy </Link></ul>
                  <Link to='/minutes' className='mobileHide'> Minutes </Link>
                  <Link to='/Finance' className='mobileHide'> Finances </Link>
                </ul>
        </div>

        <h5 className="text-center pb-10 sm:mt-[3%] lg:mt-0"> @2024 IMPACT N.O.W Foundation </h5>
    </div>
  )
}

export default Footer

