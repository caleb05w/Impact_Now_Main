import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import bg from '../assets/NSH_bg.png'
import { motion } from 'framer-motion'




function ShalomHouse() {
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

  <div className='w-lvw h-[25vw] lg:mt-0 sm:mt-[10%]'><img src={bg} alt="background"></img> </div>
  
    <div className='lg:w-4/6 sm:w-full sm:mt-[8%] lg:mt-[2%] mx-auto'>
        <div className='mx-[10%] w-10/12'>
            <h5>Nepal Shalom House</h5>
            <h1 className='mt-[2%]'>Extending our impact on a global scale</h1>
            <h5 className='mt-[3%]'>Shalom House works to provide sponsorships to underprivileged girls from the poorest of the poor Nepalese communities and focuses on overcoming barriers so that young women can advance to a post secondary education.</h5>
        </div>
      </div>
   

    <div className='lg:mt-[5%] sm:mt-[10%] sm:ml-[10%] mx-[5%] lg:ml-[23%] flex gap-[10%]'>
            <div className=''>
            <h4 className='mt-[2%]'>Who we're helping </h4>
            <h5 className='mt-[3%]'>Young women from impoverished areas are at risk of being sex trafficked, with the Nepali- Indian border being one of the busiest trafficking routes in the world. The risk factors for being trafficked are poverty, limited economic opportunities, low education, and low socioeconomic and cultural status.</h5>
            </div>

            <div className=''>
            <h4 className='mt-[2%]'>How we're helping </h4>
            <h5 className='mt-[3%]'>Shalom House will empower 3 young women to advance to a university nursing degree to improve their self-confidence, skills and resources to become leaders; thereby increasing the number of female role models, mentors, and leaders across the local and global communities.</h5>
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

export default ShalomHouse
