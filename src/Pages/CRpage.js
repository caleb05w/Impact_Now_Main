import React from 'react'
import Nicholas from '../assets/Nicholas.png'
import Nicholas1 from '../assets/Nicholas1.png'

import CRPoster from '../assets/CRPoster.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import CR1 from '../assets/CR1.png'
import CR2 from '../assets/CR2.png'
import bg from '../assets/CRbg.png'

import { GoArrowUpLeft } from 'react-icons/go'
import ScrollToTopButton from '../Components/ScrollTopButton';



function CRPage() {
  return (
<div className='overflow-x-hidden'>

  <div className='w-lvw h-[25vw] lg:mt-0 sm:mt-[10%]'><img src={bg}></img> </div>
  
    <div className='w-4/5 mt-[2%] mx-auto'>
        <div className='mx-[10%] w-10/12'>
            <h5>Celebrate Recovery</h5>
            <h1 className='mt-[2%]'>A 12 Step Program for addressing hurts, hangups and habits.</h1>
            <h5 className='mt-[3%]'>Celebrate Recovery (CR) is a biblically-based, recovery program that addresses our Hurts, Hang- ups, and Habits using a 12-step approach based on the Beatitudes from the book of Matthew.</h5>
            
            <button className='group mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><h4 className='group-hover:text-white ease-in-out duration-300'><a href="https://www.celebraterecovery.ca/" target="_blank">Learn More</a></h4></button>
        </div>
    </div>

    <div className=' mt-[5%] w-[100vw] h-[50vh] flex gap-[0.5%]'>
        <img className='object-cover w-full h-full' src={CR1}></img>
        <img className='object-cover w-full h-full' src={CR2}></img>    
    </div>

    <div className='w-4/5 mx-auto py-[6%]'>
        <div className='mx-[10%] w-6/12'>
            <h5>Our Projects</h5>
            <h1 className='mt-[2%]'>Life-changing meals and discussion</h1>
            <h4 className='mt-[5%]'>CR leaders understand your struggles, as they have experienced freedom from addictive and dysfunctional patterns in their own lives. They have been trained to guide people through the 12 Steps/8 Principles, and to provide a safe environment for accountability and building authentic relationships.</h4>
            
            <div className='flex mt-[7%] gap-[1%] mx-0 p-0'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit'> <Link to='/donate'>Learn how you can help out</Link></h5></button>
            <div className='my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>
        </div>

        <div className='ml-[8vw] mt-[8%] w-[85vw] h-[50vh] flex gap-[0.5%]'>
            <img className='object-cover w-[25vw] h-full' src={Nicholas1}></img> 
            <img className='object-cover w-[60vw] h-full' src={Nicholas}></img>     
        </div>

        <div className='w-5/6 mt-[7%] mx-auto'>
          <div className='ml-[40.5%]'>
        
          <h1 className='mt-[1%] w-9/12'>Meet Nicholas</h1>
          <h4 className='mt-[5%]'>“As an outreach member for the Impact N.O.W. Foundation, I have the great pleasure of being involved in some of the community programs that we currently have in the Richmond area. We do our best to provide and serve the community in any which way we can whether it’s simply making connections with people, treating others to meals (some of which are so generously provided by one of the local Filipino grocery stores) or working on our affiliated program, which is soon to launch, Celebrate Recovery.<br></br><br></br>This program aims to provide a safe and supportive environment for members of the community to join together and overcome their hurts, hang-ups and habits. Our team leaders have been working hard and have each come through their own struggles, some of whom have been in other recovery programs and found Celebrate Recovery to be one of the best step-oriented programs in the process of healing from life’s traumas.”
          </h4>

          <div className='flex mt-[7%] gap-[1%] mx-0 p-0'>
          <div className='my-auto' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowLeft /></div>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit'> <Link to='/'>Go Back</Link></h5></button>
          </div>
          
        </div>

        </div>

</div>



  </div>
  )
}

export default CRPage
