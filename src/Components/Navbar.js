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
    <div className="w-full ">
      <div className="w-4/5 m-auto h-fit py-[1.5%] grid grid-cols-2  items-center">
        <div className='flex w-full h-10'>
        <img className="object-contain h-full w-fit mr-3 mb-5" src={Logo} />
        <h3 className='my-auto'> <Link to='/'> IMPACT NOW </Link></h3>
        </div>

          <div id={openLinks ? "open" : "close"} className="flex justify-end gap-10 text-gray-600 w-content-fit">
            {/* <ul><Link to='/about'> About </Link></ul> */}

            <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic" className="no-arrow">
                    <div className='flex flex-row gap-1 w-fit h-fits'>
                      <ul> About </ul>
                      <div className='rotate-90'> <ul>{'>'}</ul></div>
                    </div>
                  </Dropdown.Toggle>


              <Dropdown.Menu className='e-caret-hide'>
                <Dropdown.Item ><ul><Link to='/Team'> Meet The Team </Link></ul></Dropdown.Item>
                <Dropdown.Item ><ul><Link to='/about'> About</Link></ul></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <ul><Link to='/donate'> Donate </Link></ul>

            <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic" className="no-arrow">
                    <div className='flex flex-row gap-1 w-fit h-fits'>
                      <ul> Other </ul>
                      <div className='rotate-90'> <ul>{'>'}</ul></div>
                    </div>
                  </Dropdown.Toggle>


              <Dropdown.Menu className='e-caret-hide'>
                <Dropdown.Item ><ul><Link to='/Minutes'> Meeting Minutes</Link></ul></Dropdown.Item>
                <Dropdown.Item ><ul><Link to='/Finance'> Finances</Link></ul></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
      </div>

      <div className="border-gray-300 shadow-2xl  border-b-2 w-full"></div>
    </div>
  )
}

export default Navbar
