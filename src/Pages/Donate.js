import React from 'react'
import background from '../assets/bg.png'
import { Link } from "react-router-dom"
import { AiOutlineCaretDown } from 'react-icons/ai'



function Donate() {
  return (
    // <div className='w-full h-lvh' style={{ backgroundImage: `url(${background})`}}>
    <div className = 'w-full h-fit'>
        
        
        <div className='w-full lg:h-full absolute -z-10 sm:min-h-lvh'>
            <img className='sm:w-full sm:min-h-lvh sm:object-cover' src={background}></img>
        </div>

        <div className='w-full h-0 overflow-hidden'>
            <h1> invisible element</h1>
        </div>

        <div className='lg:py-32 w-full lg:px-28 m-auto z-10 sm:p-0 md:text-center '>
            <div className=''>
                <div className='lg:px-32 sm:px-[10%]'>
                    <h1 className='sm:mt-[15%] lg:mt-0 lg:w-2/3 text-white'> Prayers can move mountains </h1>
                    <div className='lg:w-2/3 md:m-auto h-full'>
                        <h5 className='lg:my-5 sm:text-lg sm:mt-[3%] text-white'> If you would like to make an impact by volunteering with us, please email kamal@impactnowfoundation.com</h5>

                        <button id='team' className='mobileHide group flex flex-row w-fit lg:mx-0 lg:px-4 lg:py-3 rounded-lg shadow-md bg-green-600 hover:bg-black  md:px-2 md:py-0 mg:lg-auto'>
                            <div className='mobileHide lg:size-10 my-auto mr-4 md:size-5'>
                            <div className='size-full rounded-full border flex flex-row justify-center hover:border-black hover:border-1'>
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
        

            <div className='max-h-[10%] w-full z-10 mx-auto lg:pb-[10%] sm:pb-[5%]'>
                <div className='w-4/5 lg:px-16 md:px-6 grid lg:grid-cols-3 sm:gap-4 sm:grid-cols-2 lg:gap-8 m-auto '>
                    
                
                    <div className='group mt-10 md:h-fit mb-2 rounded-lg w-full border-2 border-transparent bg-white shadow-md text-center hover:border-orange-400 hover:border-1 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                        <AiOutlineCaretDown size={80} className='mobileHide fill-transparent mx-auto m-0 p-0 -translate-y-6 lg:group-hover:fill-orange-400 lg:group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                        <div className='mx-8 lg:mt-0 sm:mt-[10%] grid lg:gap-3 sm:gap-1 md:-translate-y-[35%]' style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className=''> Donate Online </h3>
                            <h5 className='mobileHide'>Donate Online securely with a credit card through our online giving provider Sunergo</h5>
                            <h5 className='desktopHide'> Through our online giving provider Sunergo</h5>
                            <button className='mt-[4%] border-black text-black hover:text-white'><a className='hover:text-gray-400 lg:text-2xl' id='donateButton' style={{transition: 'ease-in-out 0.3s'}} href="https://richmondbaptist.sunergo.net/qry/sr_donate.taf" target="_blank">Learn More</a></button>
                        </div>
                    </div>

                    <div className='group mt-10 md:h-fit mb-2 rounded-lg w-full border-2 border-transparent bg-white shadow-md text-center hover:border-orange-400 hover:border-1 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                        <AiOutlineCaretDown size={80} className='mobileHide fill-transparent mx-auto m-0 p-0 -translate-y-6 lg:group-hover:fill-orange-400 lg:group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                        <div className='mx-8 lg:mt-0 sm:mt-[10%] sm:mb-[8%] grid lg:gap-3 sm:gap-1 md:-translate-y-[35%]' style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className=''> Interact Etransfer</h3>
                            <h5 className='mobileHide'>You can donate sending an Interact E-Transfer to vishwa@impactnowfoundation.com</h5>
                            <h5 className='desktopHide'> Donate at: vishwa@impactnowfoundation.com</h5>
                            
                             <button className='mt-[4%] border-black text-black hover:text-white'><a className='hover:text-gray-400 lg:text-2xl' id='donateButton' style={{transition: 'ease-in-out 0.3s'}} onClick={() => {navigator.clipboard.writeText('vishwa@impactnowfoundation.com'); window.alert("Link copied");}} >Copy Email</a></button>
                        </div>
                    </div>

                    <div className='group lg:mt-10 md:h-fit mb-2 rounded-lg w-full border-2 border-transparent bg-white shadow-md text-center hover:border-orange-400 hover:border-1 hover:shadow-2xl' style ={{ transition: 'ease-in-out 0.3s' }}>
                        <AiOutlineCaretDown size={80} className='mobileHide fill-transparent mx-auto m-0 p-0 -translate-y-6 lg:group-hover:fill-orange-400 lg:group-hover:-translate-y-3' style={{transition: 'ease-in-out 0.3s'}}></AiOutlineCaretDown>
                        <div className='mx-8 lg:mt-0 sm:mt-[10%] sm:mb-[8%] grid lg:gap-3 sm:gap-1 md:-translate-y-[35%]' style={{transition: 'ease-in-out 0.3s'}}>
                            <h3 className=''> Donate by check </h3>
                            <h5 className='mobileHide'>You can donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                            <h5 className='desktopHide'> Address to: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                            <button className='mt-[4%] border-black text-black hover:text-white'><a className='hover:text-gray-400 lg:text-2xl' id='donateButton' style={{transition: 'ease-in-out 0.3s'}} onClick={() => {navigator.clipboard.writeText('Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8'); window.alert("Link copied");}} >Copy Address</a></button>
                        </div>
                    </div>

                </div>
            </div>
        
    </div>
  )
}

export default Donate
