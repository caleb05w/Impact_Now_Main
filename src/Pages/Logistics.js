import React from 'react'
import { Link } from "react-router-dom"
import { Meetinglist_2024, Meetinglist_2023, Meetinglist_2022, Meetinglist_2021 } from '../assets/Meetinglist';
import Meetingtog from '../Components/Meetingtog';
import { Finances } from '../assets/Meetinglist';
import { GoArrowLeft } from 'react-icons/go'
import FinanceHolder from '../Components/FinanceHolder';

import { motion } from 'framer-motion';



function Logistics() {
  return (
    <motion.div className='lg:pt-[12%]'
    
    initial={{ opacity: 0, y: 400 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0,  y: -400}}
    transition={{
      initial: { type: 'spring', stiffness: 100, damping: 40, duration: 0.8},
      animate: { type: 'spring', stiffness: 100, damping: 40, duration: 0.3 },
      exit: { type: 'spring', stiffness: 10, damping: 40, duration: 0.3 },
      
    }}
    
    
    >
         {/* className=' sm:mt-[20%] lg:pt-[12%] */}

    <div className='min-h-lvh w-full'>

        <div className='sm:full lg:w-4/5 m-auto'>
            <div className='mx-[10%] lg:w-5/12 sm:full'>
                {/* <h5>Our Projects</h5> */}
                <h1 className='mt-[2%]'>What's going on behind the scenes</h1>
                <h4 className='mt-[5%]'>ImpAct N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
                
                    {/* <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                    <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/donate'>Learn how you can help out</Link></h5></button>
                    <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                    </div> */}

                    <button className='desktopHide group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><Link to='/donate'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Get Involved</h4></Link></button>
                </div>

                <div className='mx-[10%] mt-[10%] w-full h-fit grid grid-cols-3'>
                    <div className='w-fit h-fit'>
                        <h1 className='text-[2vw]'> Meeting Minutes </h1>
                        
                        <div className='mt-[5%]'>
                        <Meetingtog
                        Meetinglist = {Meetinglist_2024}
                        year = {2024}
                        />
                        </div>

                        <div className=''>
                        <Meetingtog
                        Meetinglist = {Meetinglist_2023}
                        year = {2023}
                        />
                        </div>

                        <div className=''>
                        <Meetingtog
                        Meetinglist = {Meetinglist_2022}
                        year = {2022}
                        />
                        </div>

                        <div className=''>
                        <Meetingtog
                        Meetinglist = {Meetinglist_2021}
                        year = {2021}
                        />
                        </div>

                    </div>

                <div className='mx-[10%] w-full h-fit'>
                    <div className='w-fit h-fit'>
                        <h1 className='text-[2vw]'> Finances </h1>
                        

                        <div className='mt-[5%]'>
                          {Finances.map((Finances, key) => {
                          return <FinanceHolder name={Finances.name} date={Finances.date} link={Finances.link} />
                          })}
                        </div>

                    </div>
                </div>

                <div className=''>
                    <h1 className='text-[2vw]'> Return Home </h1>
                    <div className='flex mt-[5%] gap-[1%] mx-0 p-0'>
                    <div className='my-auto' style={{color: 'black', fontSize:'1.1vw'}}><GoArrowLeft /></div>
                        <button><h5 className='m-0 p-0 gap-0 w-fit h-fit text-black'> <Link to='/'>Go Back</Link></h5></button>
                    </div>
                </div>


                </div>


            </div>
        </div>
    </motion.div>
  )
}

export default Logistics
