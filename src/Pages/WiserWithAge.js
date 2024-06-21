import React from 'react'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import bg from '../assets/WWA_bg.png'
import { motion } from 'framer-motion'




function MealsOnWheels() {
  return (
<motion.div className='overflow-x-hidden'

initial={{ opacity: 0, y: 400 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0,  y: -400}}
transition={{
  initial: { type: 'spring', stiffness: 100, damping: 40, duration: 0.8},
  animate: { type: 'spring', stiffness: 100, damping: 40, duration: 0.3 },
  exit: { type: 'spring', stiffness: 10, damping: 40, duration: 0.3 },
  
}}


>

  <div className='w-lvw h-[25vw] lg:mt-0 sm:mt-[10%]'><img src={bg}></img> </div>
  
    <div className='lg:w-4/6 sm:w-full sm:mt-[8%] lg:mt-[2%] mx-auto'>
        <div className='mx-[10%] w-10/12'>
            <h5>Wiser with Age</h5>
            <h1 className='mt-[2%]'>A Community based mentorship program.</h1>
            <h5 className='mt-[3%]'>Wiser With Age continues to evolve to add value to the lives of seniors and young adults. Young adults help seniors with groceries and drive them to community events to socialize and to attend seminars on helpful topics by guest speakers. Seniors also hold workshops which the young adults help organize and run. At ` end of the program participants film a short inspirational video about their mentor and scholarships are awarded to the young adults of the top three entries. </h5>
        </div>
      </div>
   


    <div className='flex lg:mt-[7%] sm:ml-[5%] lg:ml-[23%] gap-[1%] sm:mx-0 p-0 mobileHide'>
            <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowLeft /></div>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/'>Go Back</Link></h5></button>
            </div>

            <div className='desktopHide my-[5%] h-full w-full '>
            <div className=' w-fit mx-auto'>
               <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Go Back</h4></Link></button>
            </div>
            </div>

  </motion.div>
  )
}

export default MealsOnWheels
