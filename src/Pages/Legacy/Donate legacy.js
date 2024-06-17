import React from 'react'
import background from '../assets/bg.png'
import { Link } from "react-router-dom"
import { AiOutlineCaretDown } from 'react-icons/ai'



function Donate() {
  return (
    //  <div className='w-full h-lvh' style={{ backgroundImage: `url(${background})`}}>
     <div className= 'w-full h-fit bg-prayer bg-cover'>
    {/* <div class='absolute -z-index-10inset-0 w-full h-full bg-black opacity-70'> </div> */}
     
  
        {/* <div className='w-full lg:h-min-[0vh] absolute -z-10 sm:min-h-lvh bg-black'>
            <img className='sm:w-min-[100vw] sm:h-min-[100vh] sm:object-cover opacity-40' src={background}></img>
        </div> */}

        <div className='w-full h-0 overflow-hidden'>
            <h1> invisible element</h1>
        </div>

        <div className='lg:py-32 w-full lg:px-28 m-auto z-10 sm:p-0 md:text-center '>
            <div className=''>
                <div className='lg:px-32 sm:px-[10%]'>
                    <h1 className='sm:mt-[15%] lg:mt-0 lg:w-2/3 text-white'> Prayers can move mountains. </h1>
                    <div className='lg:w-2/3 md:m-auto h-full'>
                        <h5 className='lg:my-5 sm:mt-[3%] text-white'> If you would like to make an impact by volunteering with us, please email kamal@impactnowfoundation.com</h5>

                    </div>
                </div>
            </div>
        </div>
        

            <div className='max-h-[10%] w-full z-10 mx-auto lg:mt-0 sm:mt-[15%] lg:pb-[10%] sm:pb-[10%]'>
                <div className='w-4/5 lg:px-16 md:px-6 grid lg:grid-cols-3 sm:gap-4 sm:grid-cols-2 lg:gap-8 m-auto '>
                    
                    <div className ='donateButton group justify-center h-fill w-fill text-center border-white border-2 p-[10%] flex flex-col lg:gap-4 sm:gap-1 ease-in-out duration-100'>
                        <h3 className='text-white group-hover:'> Donate </h3>
                        <h5 className='mobileHide text-white'>Donate Online securely with a credit card through our online giving provider Sunergo</h5>
                        <h5 className='desktopHide text-white'> Through our online giving provider Sunergo</h5>
                        <button className='border-1 border-white w-full mt-[20%] text-black bg-white group-hover:bg-black'><a id='donateButton' href="https://richmondbaptist.sunergo.net/qry/sr_donate.taf" target="_blank">Learn More</a></button>
                    </div>

                    <div className ='donateButton group justify-center h-fill w-fill text-center border-white border-2 p-[10%] flex flex-col lg:gap-4 sm:gap-1 ease-in-out duration-100'>
                        <h3 className='text-white'> Interact Etransfer</h3>
                         <h5 className='mobileHide text-white'>You can donate sending an Interact E-Transfer to vishwa@impactnowfoundation.com</h5>
                         <h5 className='desktopHide text-white'> Donate at:  vishwa<br></br>@impactnowfoundation.com</h5>
                        <button id='donateButton'className='border-1 border-white w-full mt-[20%] text-black bg-white group-hover:bg-black' onClick={() => {navigator.clipboard.writeText('vishwa@impactnowfoundation.com'); window.alert("Link copied");}}> Copy Link </button>
                    </div>

                    <div className ='donateButton group justify-center h-fill w-fill text-center border-white border-2 p-[10%] flex flex-col lg:gap-4 sm:gap-1 ease-in-out duration-100'>
                        <h3 className='text-white group-hover:'> Donate </h3>
                        <h5 className='mobileHide text-white'>You can donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                        <h5 className='desktopHide text-white'> Address to: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h5>
                        <button  id='donateButton' className='border-1 border-white w-full mt-[20%] text-black bg-white group-hover:bg-black'  onClick={() => {navigator.clipboard.writeText('Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8'); window.alert("Link copied");}}> Copy Address </button>
                    </div>


                </div>

                <div className='flex justify-center mx-auto mt-[5%] border-white border-2 w-fit rounded-full px-[2%] hover:border-black hover:border-3 background-black' >
                        <button id='donateButton' className='text-white'><Link to='/'> Projects </Link></button>
                </div>
            </div>
            
        
    </div>
  )
}

export default Donate
