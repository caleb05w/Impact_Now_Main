import React from 'react'
import logo from '../assets/Logo.png'
import CR from '../assets/CR.png'
import WWA from '../assets/WWA.png'
import MOW from '../assets/MOW.png'
import NSH from '../assets/NSH.png'
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






function Home() {

  return (
    <div className='pb-20 bg-gray-200 overflow-x-hidden'> 
    {/* //div for bg color */}
  
          {/* Background Video */}
    <div className='overflow-hidden absolute w-full sm:min-h-lvh lg:h-[73%] z-10'>
      <div className='bg-black'>
        <div className='flex-row flex justify-center'>
             <img className='object-cover w-full sm:min-h-[80vh] lg:h-full opacity-40' src={NSH}></img>
        </div>
      </div>
  </div>

    
    <div className='m-auto pt-[2%]'>
      {/* bg-white border-gray-200 border-2 rounded-lg shadow-lg */}

    <div className='w-full h-full object-cover flex justify-center z-20'>
      <div className='text-center mx-25 my-20  w-2/3 z-20'>
        <div className='flex justify-center'>  
          <div className='lg:h-[15%] lg:w-[15%] sm:h-[20vw] sm:w-[20vw]'>
          <img className="w-full h-full object-cover" src={logo}></img>
          </div>
         </div>
        <div className='lg:w-2/3 sm:w-10/12 mx-auto text-center z-10'>
          <h1 className='mt-[5%] z-10 text-white'> Impact N.O.W </h1>
          <h5 className=' mt-[8%] z-10 text-white sm:text-[3.5vw] lg:text-[1.2vw]'> Impact N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and in developing nations </h5>

          <div className="md:grid-rows-2 sm:gap-2 grid lg:grid-cols-2 mt-10">
          <button className='headingHover sm:w-full'>About Us</button>
          <button className='headingHover sm:w-full '>Get Involved</button>
          </div>
          </div>
        </div>
      </div>

        {/* Projects */}
      <div className=''>
      
      <div className='h-fit w-fit mt-[19%]'>

        <div className='w-4/5 m-auto'>
          <div className='mx-[10%] w-5/12'>
          <h5>Our Projects</h5>
          <h1 className='mt-[2%]'>We're telling more then just stories</h1>
          <h4 className='mt-[5%]'>ImpAct N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
          
            <div className='flex mt-[7%] gap-[1%] mx-0 p-0'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit'> <Link to='/donate'>Learn how you can help out</Link></h5></button>
            <div className='my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>

          </div>
        </div>

        {/*Showcase of projects */}

        <div className='mt-[6%]  w-lvw  h-full'>

          <div className='flex w-lvw h-fit overflow-hidden gap-[0.5%]'>
            <div className=' group w-[29vw] h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={CR}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Celebrate Recovery</h3></div>
                <div className='relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Celebrate Recovery (CR) is a biblically-based program that helps people overcome Hurts, Hang-ups, and Habits</h5></div>
              </div>
            </div>


            <div className=' group w-[69vw] h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover -translate-x-[0.1%] w-[106%] h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={MOW}></img>
              <div className='w-[96%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-4 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Meals on Wheels</h3></div>
                <div className='relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-4 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Meals On Wheels delivers weekly nutritious meals donated by local Riachmond businesses to seniors living alone. They connect with valued members of our community, supporting their physical, emotional, and spiritual well-being. </h5></div>
              </div>
            </div>
          </div>

            <div className='flex w-lvw h-fit overflow-hidden gap-[0.5%] mt-[0.5%]'>

            <div className=' group w-[69vw] h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={NSH}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Nepal Shalom House</h3></div>
                <div className='relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>
                Shalom House works to provide sponsorships to underprivileged girls from the poorest of the poor Nepalese communities and focuses on overcoming barriers so that young women can advance to a post secondary education.</h5></div>
              </div>
            </div>

            <div className=' group w-[29vw] h-[50vh] bg-black overflow-hidden hover:cursor-pointer'>
              <img className='object-cover w-full h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={WWA}></img>
              <div className='w-[99%] -translate-y-[110%] h-[90%] my-auto mx-auto'>
                <div className='translate-y-[150%] group-hover:translate-y-[60%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[500] text-[1.4vw]'>Wiser with Age</h3></div>
                <div className='relative top-[85%] group-hover:top-[89%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white text-[0.9vw]'>Wiser With Age is a community-based mentorship program that matches seniors with young adults.</h5></div>
              </div>
            </div>

          </div>
        </div>

        <div className='w-4/5 mx-auto mt-[7%]'>
          <div className='mx-[10%] w-7/12'>

          <h5>Our Mission</h5>
          <h1 className='mt-[2%]'>Change that extends past the community</h1>
          <h4 className='mt-[5%]'>ImpAct N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
          </div>

          <div className='mt-[10%] grid grid-cols-2  w-10/12 mx-[10%] gap-[5%]'>
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
          <div className='w-4/5 mx-auto my-[10%]'>
          <div className='border-b-2 border-black'></div>
          </div>


          <div className='flex w-4/5 mx-auto gap-[2%] h-[100%]'>

            <div className='w-7/12 '>
            <h5>Join us in</h5>
            <h1 className='mt-[2%]'>Growing physically, spiritually, mentally, emotionally, and economically.</h1>
            <button className='group mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><Link to='/team'><h4 className='group-hover:text-white ease-in-out duration-300'>Meet the team</h4></Link></button>
            
            {/* <div className='flex mt-[7%] gap-[1%]'>
            <h5 className=''> <Link to='/team'> Meet the team  </Link></h5>
            <div className='my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div> */}


            </div>

            <div className='h-fit w-6/12 overflow-hidden'>
            <img className='object-cover w-full h-[45lvh]' src={Team}></img>
            </div>

          </div>

              {/* Line */}
              <div className='w-4/5 mx-auto my-[10%]'>
          <div className='border-b-2 border-black'></div>
          </div>
        </div>

       <div className='flex max-w-[100vw] h-[50lvh] gap-[0.5%] overflow-hidden'>
          <img className='h-full w-full object-cover' src={Sl1}></img>
          <img className='h-full w-full object-cover' src={Sl2}></img>
          <img className='h-full w-full object-cover' src={Sl3}></img>
        </div> 

        <div className='w-5/6 mt-[7%] mx-auto'>
          <div className='ml-[35%]'>
          <h1 className='mt-[2%] w-9/12'>We’re building the leaders of tomorrow.</h1>

            <div class='grid grid-cols-3 mt-[10%] gap-[3%]'>

              <div className=''> 
                <h4 id='heavy'>Compassion</h4>
                <h5 className='mt-[5%]'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
              </div>

              <div className=''> 
                <h4 id='heavy' >Leadership Development</h4>
                <h5 className='mt-[5%]'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.</h5>
                </div>

              <div className=''> 
                <h4 id='heavy' >Building Communities/Planting Churches</h4>
                <h5 className='mt-[5%]'>We care for every individual with compassion, respect, and equality.
                </h5>
              </div>

            </div>

            <div className='flex mt-[10%] gap-[0.5%]'>
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

    
    </div>
    // div for bg color


  )
}



export default Home 
