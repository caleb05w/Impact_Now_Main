import React from 'react'
import Nicholas from '../assets/Nicholas.png'
import Nicholas1 from '../assets/Nicholas1.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import CR1 from '../assets/CR1.png'
import CR2 from '../assets/CR2.png'
import bg from '../assets/CRbg.png'
import { motion } from 'framer-motion'




function CRPage() {
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
  
    <div className='lg:w-4/5 sm:w-full sm:mt-[5%] lg:mt-[2%] mx-auto'>
        <div className='mx-[10%] w-10/12'>
            <h5>Celebrate Recovery</h5>
            <h1 className='mt-[2%]'>A 12 Step Program for addressing hurts, hangups and habits.</h1>
            <h5 className='mt-[3%]'>Celebrate Recovery (CR) is a biblically-based, recovery program that addresses our Hurts, Hang- ups, and Habits using a 12-step approach based on the Beatitudes from the book of Matthew.</h5>
            
            <button className='group mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><h4 className='group-hover:text-white ease-in-out duration-300'><a href="https://www.celebraterecovery.ca/" target="_blank" rel="noreferrer">Learn More</a></h4></button>
        </div>
    </div>

    <div className=' mt-[5%] w-[100vw] h-[50vh] flex gap-[0.5%]'>
        <img className='object-cover w-full h-full' src={CR1} alt="See change in person"></img>
        <img className='object-cover w-full h-full' src={CR2} alt="Building communities one at a time"></img>    
    </div>

    <div className='sm:w-full lg:w-4/5 mx-auto py-[6%]'>
        <div className='mx-[10%] sm:w-fit lg:w-6/12'>
            <h5>Our Projects</h5>
            <h1 className='mt-[2%]'>Life-changing meals and discussion</h1>
            <h4 className='mt-[5%]'>CR leaders understand your struggles, as they have experienced freedom from addictive and dysfunctional patterns in their own lives. They have been trained to guide people through the 12 Steps/8 Principles, and to provide a safe environment for accountability and building authentic relationships.</h4>

            <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/donate'>Learn how you can help out</Link></h5></button>
            <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>

            <button className='desktopHide group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/donate'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Get Involved</h4></Link></button>



        </div>

        <div className='lg:ml-[8vw] sm:mx-auto mt-[8%] sm:w-full lg:w-[85vw] h-[50vh] flex sm:gap-0 lg:gap-[0.5%]'>
            <img className='object-cover lg:w-[25vw] sm:w-[0vw] h-full' src={Nicholas1} alt="Meet Nicholas"></img> 
            <img className='object-cover lg:w-[60vw] sm:w-[100vw] h-full' src={Nicholas} alt="Meet Nicholas"></img>     
        </div>

        <div className='w-5/6 mt-[7%] mx-auto'>
          <div className='sm:ml-0 lg:ml-[40.5%]'>
        
          <h1 className='mt-[1%] w-9/12'>Meet Nicholas</h1>
          <h4 className='mt-[5%]'>“As an outreach member for the Impact N.O.W. Foundation, I have the great pleasure of being involved in some of the community programs that we currently have in the Richmond area. We do our best to provide and serve the community in any which way we can whether it’s simply making connections with people, treating others to meals (some of which are so generously provided by one of the local Filipino grocery stores) or working on our affiliated program, which is soon to launch, Celebrate Recovery.<br></br><br></br>This program aims to provide a safe and supportive environment for members of the community to join together and overcome their hurts, hang-ups and habits. Our team leaders have been working hard and have each come through their own struggles, some of whom have been in other recovery programs and found Celebrate Recovery to be one of the best step-oriented programs in the process of healing from life’s traumas.”
          </h4>

          <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
          <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowLeft /></div>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/'>Go Back</Link></h5></button>
            </div>

            <div className='desktopHide my-[5%] h-full w-full '>
            <div className=' w-fit mx-auto'>
               <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Go Back</h4></Link></button>
            </div>
            </div>

        </div>

        </div>

</div>



  </motion.div>
  )
}

export default CRPage
