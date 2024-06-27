import React from 'react'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import bg from '../assets/MOW_bg.png'
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

  <div className='w-lvw h-[25vw] lg:mt-0 sm:mt-[10%]'><img src={bg} alt="Background"></img> </div>
  
    <div className='lg:w-4/6 sm:w-full sm:mt-[8%] lg:mt-[2%] mx-auto'>
        <div className='mx-[10%] w-10/12'>
            <h5>Meals on Wheels</h5>
            <h1 className='mt-[2%]'>Making a difference, one meal at a time.</h1>
            <h5 className='mt-[3%]'>Meals On Wheels provides tasty and nutritious meals donated by a local Richmond business to seniors who are living alone. The meals are delivered weekly. Meals provide important physical nourishment but they are also a way for us to connect with valued members of our community to ensure their emotional and spiritual wellbeing. </h5>
        </div>
      </div>
   

      <h4 id="heavy" className='sm:mt-[10%] lg:mt-[5%] sm:ml-[10%] lg:ml-[23%]'> Looking to help? </h4>
          <div className='mt-[0.5%] sm:ml-[10%] lg:ml-[23%] flex gap-[1%] sm:mx-0 p-0'>   
            <button onClick={() => {navigator.clipboard.writeText('nicolas@impactnofoundation.com'); window.alert("Link copied");}}><h5 className='m-0 p-0 gap-0 w-fit h-fit'>Send an email to nicolas@impactnofoundation.com</h5></button>
            <div className='my-auto ' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>


          <div className='mobileHide mt-[5%] sm:ml-[10%] lg:ml-[23%] flex gap-[1%] sm:mx-0 p-0'>  
          <div className='mobileHide my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowLeft /></div>
            <button><h5 className='mobileHide m-0 p-0 gap-0 w-fit h-fit'> <Link to='/'>Go Back</Link></h5></button>
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
