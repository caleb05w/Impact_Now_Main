import React from 'react'
import background from '../assets/bg.png'
import { Link } from "react-router-dom"
import { AiOutlineCaretDown } from 'react-icons/ai'



function Donate() {
  return (
    // <div className='w-full h-lvh' style={{ backgroundImage: `url(${background})`}}>
    <div className = 'w-full h-fit'>
        
        
        <div className='w-full h-full absolute -z-10'>
            <img src={background}></img>
        </div>

        <div className='w-full h-0 overflow-hidden'>
            <h1> invisible element</h1>
        </div>

        <div className='lg:py-32 w-full lg:px-28 m-auto z-10 md:p-0 md:text-center '>
            <div className=''>
                <div className='px-32'>
                    <h1 className='mt-10 lg:w-2/3 md:w-10/12 md:mx-auto text-white'> Prayers can move mountains </h1>
                    <div className='lg:w-2/3 md:w-10/12 md:m-auto h-full'>
                        <h5 className='lg:my-5 md:my-[3%] text-white'> If you would like to make an impact by volunteering with us, please email kamal@impactnowfoundation.com</h5>

                        <button id='team' className='group flex flex-row w-fit lg:mx-0 lg:px-4 lg:py-3 rounded-lg shadow-md bg-green-600 hover:bg-black  md:px-2 md:py-0 mg:lg-auto'>
                            <div className='lg:size-10 my-auto mr-4 md:size-5'>
                            <div className=' size-full rounded-full border flex flex-row justify-center hover:border-black hover:border-1'>
                                <div className='flex flex-col justify-center'> 
                                <h3 id='white' className='font-light text-4xl' style = {{transition: 'ease-in-out 0.3s'}}> {'>'} </h3>
                                </div>
                            </div>
                            </div>
                            <div className='arrowButton bg-transparent mx-0 mh-auto p-0 text-4xl -translate-y-0.5 buttonUpscaleMd'> <Link to='/'> Projects </Link></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
        

            <div className='max-h-[10%] w-full z-10 mt-10 mx-auto bg-gray-200 pb-24'>
                <div className='w-4/5 lg:px-16 md:px-6 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-8 m-auto '>
                    
                
                    <div className='group mt-10 md:h-fit mb-2 rounded-lg w-full border-2 border-transparent bg-white shadow-md text-center hover:border-orange-400 hover:border-1 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                        <AiOutlineCaretDown size={80} className='fill-transparent mx-auto m-0 p-0 -translate-y-6 group-hover:fill-orange-400 group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                        <div className='mx-8 mt-[10%] grid lg:gap-10 md:gap-4 -translate-y-10' style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className='md:text-2xl'> Donate Online </h3>
                            <h5>Donate Online securely with a credit card through our online giving provider Sunergo</h5>
                            <button className='mt-3 border-black text-black hover:text-white'><a className='hover:text-gray-400' style={{transition: 'ease-in-out 0.3s'}} href="https://richmondbaptist.sunergo.net/qry/sr_donate.taf" target="_blank">Learn More</a></button>
                        </div>
                    </div>

                    <div className='group mt-10 md:h-fit mb-2 rounded-lg w-full border-2 border-transparent bg-white shadow-md text-center hover:border-blue-400 hover:border-3 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                    <AiOutlineCaretDown size={80} className='fill-transparent mx-auto m-0 p-0 -translate-y-6 group-hover:fill-blue-400 group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                    <div className='mx-8 mt-[10%] grid lg:gap-10 md:gap-4 -translate-y-10' style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className='md:text-2xl'>  Interact Etransfer</h3>
                            <h5> You can donate sending an Interact E-Transfer to vishwa@impactnowfoundation.com</h5>
                            <button className='mt-3 border-black hover:text-gray-400' style={{transition: 'ease-in-out 0.3s'}} onClick={() => {navigator.clipboard.writeText('vishwa@impactnowfoundation.com'); window.alert("Link copied");}} >Copy Link</button>
                        </div>
                    </div>

                    <div className='group mt-10 md:h-fit mb-2 rounded-lg w-full border-3 border-transparent bg-white shadow-md text-center hover:border-green-500 hover:border-3 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                    <AiOutlineCaretDown size={80} className='fill-transparent mx-auto m-0 p-0 -translate-y-6 group-hover:fill-green-500 group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                    <div className='mx-8 mt-[10%] grid lg:gap-10 md:gap-4 -translate-y-10'  style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className='md:text-2xl'> Donate by check </h3>
                            <h5> You can donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                            <button className='mt-3 border-black hover:text-gray-400' style={{transition: 'ease-in-out 0.3s'}} onClick={() => {navigator.clipboard.writeText(' 6640 Blundell Rd.Richmond BC V7C 1H8'); window.alert("Address copied");}} >Copy Address</button>
                        </div>
                    </div>

                </div>
            </div>
        
    </div>
  )
}

export default Donate
