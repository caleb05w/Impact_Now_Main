import React from 'react'
import donate1 from '../assets/donate1.png'
import donate2 from '../assets/donate2.png'
import donate3 from '../assets/donate3.png'
import donate4 from '../assets/donate4.png'
import donate5 from '../assets/donate5.png'

import { GoArrowRight} from 'react-icons/go'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function Donate() {


  
  return (
    //  <div className='w-full h-lvh' style={{ backgroundImage: `url(${background})`}}>
     <motion.div className= 'w-full h-fit bg-cover'

     //works: exiting our team, going into donate
     

     initial={{ opacity: 0, y: 400 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0,  y: -400}}
     transition={{
      initial: { type: 'inertia', velocity:10,  duration: 0.8},
      animate: { type: 'inertia', velocity:10,  duration: 0.3 },
      exit: { type: 'inertia', velocity:10, duration: 0.3 },
      delay: 0.1
       
     }}
     
     >


        <div className='w-full h-0 overflow-hidden pt-[5%]'>
            <h1> invisible element</h1>
        </div>

        <div className='mx-[1%] flex gap-[0.5%] h-[50vh] overflow-hidden'>
            <img className='lg:w-[30vw] sm:w-[100vw] h-full object-cover' alt="Our community thrives off your donations" src={donate2}></img>
            <img className='lg:w-[70vw] sm:w-[0] lg:h-full object-cover' alt="Our community thrives off your donations"src={donate1}></img>
        </div>

        <div className='sm:w-full lg:w-6/6 sm:mt-[10%] lg:mt-[4%] mx-auto'>
          <div className='sm:mx-[10%] lg:ml-[31%] lg:mx-0'>
          <h1 className='lg:mt-[1%] sm:mt-[5%] sm:w-full lg:w-8/12'>Our community thrives because of your support.</h1>

{/*             
            mobile donate options */}
            <div class='desktopHide sm:flex-rows lg:grid  lg:grid-cols-3 sm:mt-[15%] lg:mt-[7%] gap-[5%]'>
            

              <div className='lg:mt-0 sm:mt-[4%]'> 
                <h4 id='heavy'>Donate</h4>
                <h4 className='sm:mt-[1%] lg:mt-[5%]'>Donate online securely with a credit card through our online giving provider Sunergo</h4>

                <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                    <button> <a href="https://richmondbaptist.sunergo.net/qry/sr_donate.taf" target="_blank" rel="noreferrer"><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Donate Now</h5></a></button>
                    <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                    </div>

                    <div className='desktopHide my-[3%] h-full w-full '>
                    <div className=' w-fit '>
                    <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Donate Now</h4></Link></button>
                    </div>
                </div>

              </div>

        <div className='lg:w-4/5 mx-auto sm:my-[10%] lg:my-[10%]'>
          <div className='border-b-2 border-black'></div>
        </div>

              <div className='lg:mt-0 sm:mt-[4%]'> 
                <h4 id='heavy' >Interact Etransfer</h4>
                <h4 className='sm:mt-[1%] lg:mt-[5%]'>You can donate to us through sending an Interact E-transer to vishwa@impactnowfoundation.com</h4>

                <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                    <button onClick={() => {navigator.clipboard.writeText('vishwa@impactnowfoundation.com'); window.alert("Link copied");}}> <h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Copy Address </h5></button>
                    <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                    </div>

                    <div className='desktopHide my-[3%] h-full w-full '>
                    <div className=' w-fit'>
                    <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Copy Address</h4></Link></button>
                    </div>
                </div>

                </div>

        <div className='lg:w-4/5 mx-auto sm:my-[10%] lg:my-[10%]'>
          <div className='border-b-2 border-black'></div>
        </div>

              <div className='lg:mt-0 sm:mt-[4%]'> 
                <h4 id='heavy' >Cheque and address</h4>
                <h4 className='lg:mt-[4%] sm:mt-[1%] lg: mt-[5%] mobileHide'>Donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h4>
                <h4 className='desktopHide'> Address to: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h4>

                
                
              <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                    <button onClick={() => {navigator.clipboard.writeText(''); window.alert("Link copied");}}> <h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Copy Address </h5></button>
                    <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                    </div>

                    <div className='desktopHide my-[3%] h-full w-full '>
                    <div className=' w-fit'>
                    <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Copy Address</h4></Link></button>
                    </div>
                </div>

              </div>

              <div className='lg:w-4/5 mx-auto sm:my-[10%] lg:my-[10%]'>
                <div className='border-b-2 border-black'></div>
            </div>

            
        <h5 className='mt-[10%] sm:ml-[1%] lg:ml-[30.5vw] h-fit'>Looking for more ways to support? <br></br>Email kamal@impactnowfoundation.com</h5>

        <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/'>Go Back</Link></h5></button>
            <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
            </div>

            <div className='desktopHide my-[5%] h-full w-full '>
            <div className=' w-fit'>
               <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Go Back</h4></Link></button>
            </div>
            </div>

        </div>
        {/* mobile donate options */}



        {/* desktop donate options */}
        {/*             
            mobile donate options */}
            <div class='mobileHide sm:flex-rows lg:grid  lg:grid-cols-3 sm:mt-[15%] lg:mt-[0%] gap-[5%]'>
            

            <div className='lg:mt-0 sm:mt-[4%]'> 
              <h4 id='heavy'>Donate</h4>
              <h4 className='sm:mt-[1%] lg:mt-[5%]'>Donate online securely with a credit card through our online giving provider Sunergo</h4>

              <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                  <button> <a href="https://richmondbaptist.sunergo.net/qry/sr_donate.taf" target="_blank" rel="noreferrer" ><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Donate Now</h5></a></button>
                  <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                  </div>

                  <div className='desktopHide my-[3%] h-full w-full '>
                  <div className=' w-fit '>
                  <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Donate Now</h4></Link></button>
                  </div>
              </div>

            </div>

            <div className='lg:mt-0 sm:mt-[4%]'> 
              <h4 id='heavy' >Interact Etransfer</h4>
              <h4 className='sm:mt-[1%] lg:mt-[5%]'>You can donate to us through sending an Interact E-transer to vishwa@impactnowfoundation.com</h4>

              <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                  <button onClick={() => {navigator.clipboard.writeText('vishwa@impactnowfoundation.com'); window.alert("Link copied");}}> <h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Copy Address </h5></button>
                  <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                  </div>

                  <div className='desktopHide my-[3%] h-full w-full '>
                  <div className=' w-fit'>
                  <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Copy Address</h4></Link></button>
                  </div>
              </div>

              </div>

            <div className='lg:mt-0 sm:mt-[4%]'> 
              <h4 id='heavy' >Cheque and address</h4>
            <h4 className=' lg:mt-[4%] sm:mt-[1%] lg: mt-[5%] mobileHide'>Donate by sending a check to the church address: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h4>
              <h4 className='desktopHide'> Address to: Impact N.O.W. 6640 Blundell Rd.Richmond BC V7C 1H8</h4>

              
              
            <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>
                  <button onClick={() => {navigator.clipboard.writeText(''); window.alert("Link copied");}}> <h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide' > Copy Address </h5></button>
                  <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowRight /></div>
                  </div>

                  <div className='desktopHide my-[3%] h-full w-full '>
                  <div className=' w-fit'>
                  <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Copy Address</h4></Link></button>
                  </div>
              </div>

            </div>
      </div>
      {/* desktop donate options */}

            
            {/* <div className='flex lg:mt-[7%]  gap-[1%] mx-0 p-0 mobileHide'>  
                <div className='my-auto mobileHide' style={{color: '#6b7280', fontSize:'1.1vw'}}><GoArrowLeft /></div>
                <button><h5 className='m-0 p-0 gap-0 w-fit h-fit mobileHide'> <Link to='/'>Go Back</Link></h5></button>
                </div>

                <div className='desktopHide my-[3%] h-full w-full '>
                <div className=' w-fit mx-auto'>
                <button className='desktopHide mx-auto group sm:mt-[10%] lg:mt-[5%] px-4 py-2.5 bg-none rounded-full w-fit border-2 border-black hover:bg-black hover:text-white'><Link to='/'><h4 className='group-hover:text-white ease-in-out duration-300 desktopHide'>Go Back</h4></Link></button>
                </div>
            </div> */}

        </div>

        

        <h5 className='mobileHide sm:mt-[0%] lg:mt-[10%] sm:ml-[1%] lg:ml-[30.5vw] h-fit'>Looking for more ways to support? <br></br>Email kamal@impactnowfoundation.com</h5>


            <div className='mx-[1%] flex py-[2%] w-[98%] sm:h-[30vh] lg:h-[50vh] gap-[0.5%] overflow-hidden'>
               
                <div className=''>
                <img className='sm:w-[100vw] lg:w-[30vw] h-full object-cover' alt="Our community events" src={donate3}></img>
                </div>

                <div className=''>
                    <img className='sm:w-0 lg:w-[45vw] h-full object-cover' alt="Handing our freezees" src={donate4}></img>
                </div>

                <div className=''>
                <img className='sm:w-0 lg:w-[25vw] h-full object-cover' alt="Face painting" src={donate5}></img>
                </div>

            </div>
    </div>



        


            
        
    </motion.div>
  )
}

export default Donate
