import React from 'react'
import image from '../assets/CR.png'
import Nicholas from '../assets/Nicholas.jpg'
import CRPoster from '../assets/CRPoster.png'

function CRPage() {
  return (
    <div className='' style={{backgroundColor: '#F89926'}}>
        
        <div className='py-32 w-3/5 m-auto z-10 '>
            <div className=''>
                <div className=''>
                    <h1 className='mt-10 w-full text-white'> Celebrate Recovery </h1>
                    <div className='w-2/3 h-full'>
                        <h4 className='my-5 text-white'>Celebrate Recovery (CR) is a biblically-based, recovery program that addresses our Hurts, Hang- ups, and Habits using a 12-step approach based on the Beatitudes from the book of Matthew. </h4>

                        <button id='team' className='flex flex-row w-fit mx-0 px-0 bg-transparent group border-none hover:border-none;'>
                            <div className='size-10 my-auto mr-4'>
                            <div className=' size-full rounded-full border-white border flex flex-row justify-center group-hover:border-gray-600 group-hover:ease-in-out duration-200'>
                                <div className='flex flex-col justify-center'> 
                                <h3 className='font-light text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200'> {'>'} </h3>
                                </div>
                            </div>
                            </div>
                            <div className='bg-transparent mx-0 mh-auto p-0 text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200 font-normal'>  <a href="https://www.celebraterecovery.ca/" target="_blank">Learn More</a></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>

        <div className='bg-white min-h-lvh'>
            <div className='w-3/5 m-auto py-[4%]'>

                <div className='flex flex-col gap-4'>
                    <h3> Donate Online </h3>
                    <h4>CR leaders understand your struggles, as they have experienced freedom from addictive and dysfunctional patterns in their own lives. They have been trained to guide people through the 12 Steps/8 Principles, and to provide a safe environment for accountability and building authentic relationships. </h4>
                    <button className='projectButtonTeam m-0 mt-4'> Donate </button>
                </div>

                <div className='pt-[10%] flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-4 h-fit w-fit'>
                        <div className='flex flex-col gap-4'>
                            <h3> Meet Nicholas </h3>
                            <h4>“As an outreach member for the Impact N.O.W. Foundation, I have the great pleasure of being involved in some of the community programs that we currently have in the Richmond area. We do our best to provide and serve the community in any which way we can whether it’s simply making connections with people, treating others to meals (some of which are so generously provided by one of the local Filipino grocery stores) or working on our affiliated program, which is soon to launch, Celebrate Recovery.</h4>
                        </div>
                        <img className=' w-fit h-fit object-cover' src={Nicholas}></img>
                    </div>
                </div>

                <div className='pt-[10%] flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-4 h-fit w-fit'>
                        <div className='flex flex-col gap-4'>
                        <h3> Join Us </h3>
                        <h4> This program aims to provide a safe and supportive environment for members of the community to join together and overcome their hurts, hang-ups and habits. Our team leaders have been working hard and have each come through their own struggles, some of whom have been in other recovery programs and found Celebrate Recovery to be one of the best step-oriented programs in the process of healing from life’s traumas.”</h4>
                            <h4>We meet weekly for a life-changing meal and discussion. If you would like to find out more please email nicolas@impactnowfoundation.com</h4>
                            <button className=' m-0 mt-4 projectButtonTeam '>Projects</button>
                        </div>
                        <img className=' w-full h-full object-cover' src={CRPoster}></img>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default CRPage
