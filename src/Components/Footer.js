import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/logo_white.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-black w-full lg:h-fit sm:h-0 text-white sm:px-fit lg:px-[5%]" id='footer'>

      {/* Mobile Footer */}

      <div className="desktopHide bg-black w-full h-fit text-white mx-auto">
        <div className="grid grid-cols-4 pt-10 w-full h-fit justify-items-center">
                <h4 className='text-white'><Link to='/'> Home </Link></h4>
                <h4 className='flex flex-col gap-1 text-white'> 
                  <Link to='/donate'> Donate </Link>
                </h4>
                <h4 className='flex flex-col gap-1 text-white'> 
                  <Link to='/about'> About </Link>
                  <Link to='/team'>  Meet the Team </Link>
                </h4>
                <h4 className='flex flex-col gap-1 text-white'> 
                  <Link to='/Policy'> Privacy Policy </Link>
                  <Link to='/minutes'> Minutes </Link>
                  <Link to='/Finance'> Finances </Link>
                </h4>
        </div>

        <h5 className="text-center pb-10 mt-[5%] "> @2024 IMPACT N.O.W Foundation </h5>
    </div>


      <div className='mobileHide grid grid-cols-2 pt-[10vh] pb-[15vh] sm:h-0 lg:h-fit'>
        <div className='w-[25vw]'> 
          <img className='mt-[0%]'src = {Logo}></img>
          <h4 className='mobileHide text-white mt-[20%]'>Impact N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and developing nations..</h4>
        </div>

        <div class='grid grid-cols-3 mt-[10%] gap-[3%] sm:h-0 lg:h-fit'>

          <div className=''> 
          <h4 id='heavy' className='text-white'>Projects</h4>
            <div className='grid grid-rows-4 gap-[3vh] mt-[30%]'> 
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/WiserWithAge'>Wiser With Age</Link></h5>
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/NepalShalomHouse'>Nepal Shalom House</Link></h5>
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/CelebrateRecovery'>Celebrate Recovery</Link></h5>
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/MealsOnWheels'>Meals on Wheels</Link></h5>
            </div>
        </div>

          <div className=''> 
          <h4 id='heavy' className='text-white'>Discover</h4>
            <div className='grid grid-rows-4 gap-[3vh] mt-[30%]'> 
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/team'>Our Team</Link></h5>
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/donate'>How to Help</Link></h5>
            </div>
          </div>

          <div className=''> 
          <h4 id='heavy' className='text-white'>Other</h4>
            <div className='grid grid-rows-4 gap-[3vh] mt-[30%]'> 
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/logistics'>Logistics</Link></h5>
              <h5 className=' lg:text-base md:text-2xl sm:text-4xl text-white'><Link to='/Policy'>Privacy Policy</Link></h5>
            </div>
          </div>
        </div>
      </div>

      <div className='mobileHide flex justify-between w-full h-fit pb-[10vh]'>
           @2024 IMPACT N.O.W Foundation
          <div className='flex translate-x-[-8vw]'>
          <div className='text-4xl'> <a href="https://www.instagram.com/impactnow_2024/" target="_blank" ><FaSquareInstagram /></a></div>
          <div className='text-4xl'> <a href="https://www.facebook.com/groups/331238719786607" target="_blank" ><FaFacebookSquare /></a></div>
          </div>
        </div>
    </div>
  )
}

export default Footer
