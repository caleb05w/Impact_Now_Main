import React from 'react'
import logo from '../assets/Logo.png'
import CR from '../assets/CR.png'
import WWA from '../assets/WWA.png'
import MOW from '../assets/MOW.png'
import NSH from '../assets/NSH.png'
import Video from '../assets/BG1.gif'
import build from '../assets/build.png'
import equip from '../assets/equip.png'
import compassion from '../assets/compassion.png'

import '../output.css'


import Team from '../assets/team.png'
import Sl1 from '../assets/sl1.png'
import Sl2 from '../assets/sl2.png'
import Sl3 from '../assets/sl3.png'
import { Link } from "react-router-dom"

import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

import EmailForm from '../Components/Email'
import ScrollToTopButton from '../Components/ScrollTopButton';

import { motion } from "framer-motion";





function Home() {

  return (
    <motion.div className='pb-20  bg-gray-200 overflow-x-hidden'

    initial={{ opacity: 0, y: 400 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0,  y: -400}}
    transition={{
      initial: { type: 'spring', stiffness: 100, damping: 40, duration: 0.8},
      animate: { type: 'spring', stiffness: 100, damping: 40, duration: 0.3 },
      exit: { type: 'spring', stiffness: 10, damping: 40, duration: 0.3 },
    delay: 0.2
      
    }}
    
    > 
    {/* //div for bg color */}
  
          {/* Background Video */}
    <div className='overflow-hidden absolute w-full sm:min-h-lvh lg:h-[73%] z-10'>
      <div className='bg-black'>
        <div className='flex-row flex justify-center'>
             <img className='object-cover w-full sm:min-h-[80vh] md:min-h-[100vh] lg:h-full opacity-40' src={Video}></img>
        </div>
      </div>
      
  </div>

    
    <div className='m-auto pt-[9%]'>
      {/* bg-white border-gray-200 border-2 rounded-lg shadow-lg */}

    <div className='w-full h-full object-cover flex justify-center z-20'>
      <div className='text-center mx-25 my-20  w-2/3 z-20'>
        <div className='flex justify-center'>  
          <div className='lg:h-[15%] lg:w-[15%] md:[h-15vw] md:w-[20vw] sm:h-[20vw] sm:w-[20vw]'>
          <img className="w-full h-full object-cover" src={logo}></img>
          </div>
         </div>
        <div className='lg:w-2/3 md:w-12/12 sm:w-10/12 mx-auto text-center z-10'>
          <h1 className='mt-[5%] z-10 text-white'> Impact N.O.W </h1>
          <h5 className=' mt-[8%] z-10 text-white sm:text-[3.5vw] md:text-[2.5vw] lg:text-[25px]'> Impact N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and in developing nations </h5>

          <div className="md:grid-rows-2 sm:gap-2 grid lg:grid-cols-2 mt-10">
          <button className='headingHover sm:w-full'><Link to='/team'>About Us</Link></button>
          <button className='headingHover sm:w-full'><Link to='/donate'>Get Involved</Link></button>
          </div>
          </div>
        </div>
      </div>

        {/* Projects */}
      <div className=''>

      <div className='h-fit w-fit lg:pt-[12%] md:pt-[20%] sm:pt-[30%]'>

        <div className='sm:full lg:w-4/5 m-auto'>
          <div className='mx-[10%] lg:w-5/12 sm:full'>
          <h5>Our Projects</h5>
          <h1 className='mt-[2%]'>Testing with different text</h1>
          <h4 className='mt-[5%]'>Impact N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
          
            <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/donate'>Learn how you can help out</Link></h5></button>
            <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>

            <button className='desktopHide group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><Link to='/donate'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Get Involved</h4></Link></button>



          </div>
        </div>

        {/*Showcase of projects */}

        <div className='lg:mt-[6%] sm:mt-[13%] w-lvw  h-full'>
        <div className='sm:mx-auto'>

          <div className=' lg:flex sm:flex-row lg:w-lvw sm:w-[95%] sm:mx-[2%] lg:mx-0  h-fit overflow-hidden lg:gap-[0.5%]'>
            <Link to='/celebraterecovery'>
            <div className=' group sm:w-lvw lg:w-[29vw] sm:h-[43vh] lg:h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 sm:opacity-40 lg:opacity-100 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={CR}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='mobileHide translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Celebrate Recovery</h3></div>
                
                <div className='desktopHide w-[85vw] h-[10lvh] mx-[5vw]'>
                <div className='relative bottom-[0%] mt-[4%]'>
                <div className='relative top-[75%] opacity-100'><h1 className='text-white font-[600] text-[5.5vw]'>Celebrate Recovery</h1></div>
                <div className='relative top-[75%] mt-[2%]'><h5 className='text-white text-[2.5vw]'>Celebrate Recovery (CR) is a biblically-based program that helps people overcome Hurts, Hang-ups, and Habits</h5></div>
                </div>
                </div>


                <div className='mobileHide relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Celebrate Recovery (CR) is a biblically-based program that helps people overcome Hurts, Hang-ups, and Habits</h5></div>
              </div>
            </div>
            </Link>


            <Link to='/MealsOnWheels'> 
            <div className='group sm:w-lvw lg:w-[69vw] sm:h-[43vh] sm:mt-[2%] lg:mt-[0%] lg:h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover -translate-x-[0.1%] w-[106%] h-full group-hover:opacity-40 sm:opacity-40 lg:opacity-100 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={MOW}></img>
              <div className='w-[96%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='mobileHide translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-4 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Meals on Wheels</h3></div>

                <div className='desktopHide w-[85vw] h-[10lvh] mx-[5vw]'>
                <div className='relative bottom-[0%] mt-[4%]'>
                <div className='relative top-[75%] opacity-100'><h1 className='text-white font-[600] text-[5.5vw]'>Meals on Wheels</h1></div>
                <div className='relative top-[75%] mt-[2%]'><h5 className='text-white text-[2.5vw]'>Meals On Wheels delivers weekly nutritious meals donated by local Riachmond businesses to seniors living alone. They connect with valued members of our community, supporting their physical, emotional, and spiritual well-being.</h5></div>
                </div>
                </div>

                <div className='mobileHide relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-4 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Meals On Wheels delivers weekly nutritious meals donated by local Riachmond businesses to seniors living alone. They connect with valued members of our community, supporting their physical, emotional, and spiritual well-being. </h5></div>
              </div>
            </div>
            </Link>

            </div>
            
         

            <div className='sm:mx-auto'>
            <div className=' lg:flex sm:flex-row lg:w-lvw sm:w-[95%] lg:mt-[0.5%] sm:mx-[2%] lg:mx-0  h-fit overflow-hidden lg:gap-[0.5%]'>
            
            <Link to='/NepalShalomHouse'> 
            <div className=' group sm:w-lvw lg:w-[69vw] sm:h-[43vh] sm:mt-[2%] lg:mt-[0%]  lg:h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 sm:opacity-40 lg:opacity-100 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={NSH}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='mobileHide translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Nepal Shalom House</h3></div>
                
                <div className='desktopHide w-[85vw] h-[10lvh] mx-[5vw]'>
                <div className='relative bottom-[0%] mt-[4%]'>
                <div className='relative top-[75%] opacity-100'><h1 className='text-white font-[600] text-[5.5vw]'>Nepal Shalom House</h1></div>
                <div className='relative top-[75%] mt-[2%]'><h5 className='text-white text-[2.5vw]'>Shalom House works to provide sponsorships to underprivileged girls from the poorest of the poor Nepalese communities and focuses on overcoming barriers so that young women can advance to a post secondary education</h5></div>
                </div>
              </div>
                
                <div className='mobileHide relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>
                Shalom House works to provide sponsorships to underprivileged girls from the poorest of the poor Nepalese communities and focuses on overcoming barriers so that young women can advance to a post secondary education.</h5></div>
              </div>
            </div>
            </Link>

            <Link to='/WiserWithAge'> 
            <div className=' group sm:w-lvw lg:w-[29vw] sm:h-[43vh] sm:mt-[2%] lg:mt-[0%] lg:h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 sm:opacity-40 lg:opacity-100 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={WWA}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='mobileHide translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Wiser with Age</h3></div>
                
                <div className='desktopHide w-[85vw] h-[10lvh] mx-[5vw]'>
                <div className='relative bottom-[0%] mt-[4%]'>
                <div className='relative top-[75%] opacity-100'><h1 className='text-white font-[600] text-[5.5vw]'>Wiser with Age</h1></div>
                <div className='relative top-[75%] mt-[2%]'><h5 className='text-white text-[2.5vw]'>Wiser With Age is a community-based mentorship program that matches seniors with young adults.</h5></div>
                </div>
                </div>

                <div className='mobileHide relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Wiser With Age is a community-based mentorship program that matches seniors with young adults.</h5></div>
              </div>
            </div>
            </Link>
          </div>
          </div>
        </div>
        </div>

        <div className='sm:w-4/5 mx-auto mt-[7%]'>
          <div className='lg:mx-[10%] mobileHide sm:w-full lg:w-7/12'>

          <h5>Our Mission</h5>
          <h1 className='mt-[2%]'>Change that extends past the community</h1>
          <h4 className='mt-[5%]'>Impact N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
          </div>

          <div className='mt-[10%] grid sm:grid-rows-2 sm:gap-[50%] lg:grid-cols-2 lg:w-10/12 lg:mx-[10%] lg:gap-[5%]'>
            <div className=''>
              <h5>Our Mission</h5>
              <h4 className='mt-[3%]'>Strong communities where individuals are living to their full potential, thriving, and serving other communities.</h4>
            </div>

            <div className=''>
              <h5>Our Vision</h5>
              <h4 className='mt-[3%]'>Strong communities where individuals are living to their full potential, thriving, and serving other communities.</h4>
            </div>

          </div>

          {/* Line */}
          <div className='lg:w-4/5 mx-auto sm:mt-[10vh] sm:mb-[5vh] lg:my-[10%]'>
          <div className='border-b-2 border-black'></div>
          </div>


          <div className='lg:flex sm:flex-rows lg:w-4/5 mx-auto gap-[2%] h-[100%]'>

            <div className='lg:w-7/12 sm:w-full'>
            <h5>Join us in</h5>
            <h1 className='mt-[2%] lg:text-[4vw] sm:text-[6vw]'>Growing physically, spiritually, mentally, emotionally, and economically.</h1>
            <button className='group mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><Link to='/team'><h4 className='group-hover:text-white ease-in-out duration-300'>Meet the team</h4></Link></button>
            
            {/* <div className='flex mt-[7%] gap-[1%]'>
            <h5 className=''> <Link to='/team'> Meet the team  </Link></h5>
            <div className='my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div> */}


            </div>

            <div className='sm:mt-[10%] lg:mt-0 h-fit lg:w-6/12 overflow-hidden'>
            <img className='object-cover w-full h-[45lvh]' src={Team}></img>
            </div>

          </div>


          {/* Line */}
          <div className='lg:w-4/5 mx-auto sm:mt-[5vh] sm:mb-[5vh] lg:my-[10%]'>
          <div className='border-b-2 border-black'></div>
          </div>

        </div>

       <div className='flex max-w-[100vw] h-[50lvh] gap-[0.5%] overflow-hidden'>
          <img className='h-full w-full object-cover' src={Sl1}></img>
          <img className='h-full w-full object-cover' src={Sl2}></img>
          <img className='h-full w-full object-cover' src={Sl3}></img>
        </div> 

        <div className='sm:w-full lg:w-6/6 mt-[7%] mx-auto'>
          <div className='sm:mx-[10%] lg:ml-[36%]'>
          <h5> Here's how</h5>
          <h1 className='mt-[1%] sm:w-full lg:w-11/12'>The values that drive us to keep pushing forwards</h1>

            <div class='grid grid-cols-3 mt-[10%] gap-[5%]'>

              <div className=''> 
                <img src={compassion} className=''></img>
                <h4 id='heavy' className='mt-[10%]'>Compassion</h4>
                <h5 className='mt-[5%]'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
              </div>

              <div className=''> 
              <img src={build} className=''></img>
                <h4 id='heavy' className='mt-[10%]' >Build</h4>
                <h5 className='mt-[5%]'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
                </div>

              <div className=''> 
              <img src={equip} className=''></img>
                <h4 id='heavy'className='mt-[10%]'  >Equip</h4>
                <h5 className='mt-[5%]'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.
                </h5>
              </div>

            </div>

            <div className='desktopHide mt-[5%] h-full w-full '>
              <div className=' w-fit mx-auto'>
                <button className='desktopHide group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide border-0'><ScrollToTopButton
                Content= <h4>Back to top</h4> className='text-[3vw] border-0 border-white group-hover:text-white'></ScrollToTopButton></h4></button>
              </div>
            </div>

            <div className='flex mt-[10%] gap-[0.5%] mobileHide'>
            <ScrollToTopButton
            Content="Back to Top"/>
            <div className='my-auto hover:text-black' style={{color: '#6b7280', fontSize:'1.2vw'}}><GoArrowUpRight /></div>
            </div>
          </div>
        </div>




      </div>

    </div>
    </div>
    <div className='mb-10'></div>

    {/* <EmailForm /> */}

    
    </motion.div>
    // div for bg color


  )
}



export default Home 
