import React, { useState } from 'react'
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom"
import '../output.css'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from '../input.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="w-full h-fit fixed z-50 bg-white">
      <div className="w-4/5 m-auto h-fit py-[1.5%] grid grid-cols-2 items-center">
        <div className='flex w-full h-10'>
        <img className="object-contain h-full w-fit mr-3 mb-5" src={Logo} />
        <h3 className='my-auto' id='navbar'> <Link to='/'> IMPACT NOW </Link></h3>
        </div>

          <div id={openLinks ? "open" : "close"} className="flex justify-end gap-10 text-gray-600 w-content-fit">
            

            <ul id='navbar'><Link to='/team'> Our Team </Link></ul>

            <ul id='navbar'><Link to='/donate'> Donate </Link></ul>

            <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic" className="no-arrow">
                    <div className='flex flex-row gap-1 w-fit h-fits'>
                      <ul id='navbar'> Other </ul>
                      <div className='rotate-90'> <ul>{'>'}</ul></div>
                    </div>
                  </Dropdown.Toggle>


              <Dropdown.Menu className='e-caret-hide'>
                <Dropdown.Item ><ul id='navbar'><Link to='/Minutes'> Meeting Minutes</Link></ul></Dropdown.Item>
                <Dropdown.Item ><ul id='navbar'><Link to='/Finance'> Finances</Link></ul></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
      </div>

      <div className="border-gray-300 shadow-2xl  border-b-2 w-full"></div>
    </div>
  )
}

export default Navbar
