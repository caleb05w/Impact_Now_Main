import React from 'react'
import background from '../assets/bg.png'
import { Link } from "react-router-dom"

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

        <div className='py-32 w-full px-28 m-auto z-10 '>
            <div className=''>
                <div className='px-32'>
                    <h1 className='mt-10 w-2/3 text-white'> Prayers can move mountains </h1>
                    <div className='w-2/3 h-full'>
                        <h5 className='my-5 text-white'> If you would like to make an impact by volunteering with us, please email kamal@impactnowfoundation.com</h5>

                        <button id='team' className='flex flex-row w-fit mx-0 px-0 bg-transparent group'>
                            <div className='size-10 my-auto mr-4'>
                            <div className=' size-full rounded-full border-white border flex flex-row justify-center group-hover:border-gray-600 group-hover:ease-in-out duration-200'>
                                <div className='flex flex-col justify-center'> 
                                <h3 className='font-light text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200'> {'>'} </h3>
                                </div>
                            </div>
                            </div>
                            <div className='bg-transparent mx-0 mh-auto p-0 text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200 font-normal'> <Link to='/'> Projects </Link></div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
        

            <div className='h-fit w-full z-10 mt-10 mx-auto bg-gray-200 pb-24'>
                <div className='h-fit w-4/5 px-16 grid grid-cols-3 gap-8 m-auto'>
                    
                
                    <div className='mt-10 mb-8 rounded-lg w-full h-fit border border-gray-300 bg-white  shadow-md text-center'>
                        <div className='mx-8 my-12 grid gap-10'>
                            <h3> Donate Online </h3>
                            <h5>Donate Online securely with a credit card through our online giving provider Sunergo</h5>
                            <button className='mt-3'>Donate Now</button>
                        </div>
                    </div>

                    <div className='mt-10 mb-8 rounded-lg w-full h-fit border border-gray-300  bg-white shadow-md text-center'>
                        <div className='mx-8 my-12 grid gap-10'>
                            <h3> Interact Etransfer</h3>
                            <h5> You can donate sending an Interact E-Transfer to vishwa@impactnowfoundation.com</h5>
                            <button className='mt-3'>Donate Now</button>
                        </div>
                    </div>

                    <div className='mt-10 mb-8 rounded-lg w-full h-fit border border-gray-300 bg-white shadow-md text-center'>
                        <div className='mx-8 my-12 grid gap-10'>
                            <h3> Donate by check </h3>
                            <h5> You can donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                            <button className='mt-3'>Donate Now</button>
                        </div>
                    </div>

                </div>
            </div>
        
    </div>
  )
}

export default Donate
