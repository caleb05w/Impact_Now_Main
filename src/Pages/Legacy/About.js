import React from 'react'
import '../output.css'

function About() {
  return (

    <div className='' style={{backgroundColor: '#0072B7'}}>
        
    <div className='py-32 w-3/5 m-auto z-10 '>
        <div className=''>
            <div className=''>
                <h1 className='mt-10 w-full text-white'> Mission & Vision </h1>
                <div className='w-2/3 h-full'>
                    <h4 className='my-5 text-white'> A Brief introdcution of what ImpactNOW even is </h4>

                    <button id='team' className='flex flex-row w-fit mx-0 px-0 bg-transparent group border-none hover:border-none;'>
                        <div className='size-10 my-auto mr-4'>
                        <div className=' size-full rounded-full border-white border flex flex-row justify-center group-hover:border-gray-600 group-hover:ease-in-out duration-200'>
                            <div className='flex flex-col justify-center'> 
                            <h3 className='font-light text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200'> {'>'} </h3>
                            </div>
                        </div>
                        </div>
                        <div className='bg-transparent mx-0 mh-auto p-0 text-4xl text-white group-hover:text-gray-600 group-hover:ease-in-out duration-200 font-normal'>  <a href="https://www.celebraterecovery.ca/" target="_blank">Meet the Team</a></div>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <div className='bg-white min-h-lvh'>
        <div className='w-3/5 m-auto py-[10%]'>

            <div className='grid grid-cols-2 gap-4'>
                <div className='container'>
                    <h3> Our Mission </h3>
                    <h4>ImpAct N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and developing nations..</h4>
                </div>

                <div className='container'>
                  <h3> Our Vision </h3>
                  <h4>ImpAct N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and developing nations.</h4>
                </div>
            </div>

            <div className='h-fit w-fit flex flex-col py-[15%] gap-20'>
              <h1> Our Pillars & Values </h1>

                  <div className='grid grid-cols-3 gap-4'>

                    <div className='container'>
                      <h3>01 | Care </h3>
                     <h5 className='mt-4' >We care for every individual with compassion, respect, and equality.</h5>
                    </div>

                    <div className='container'>
                      <h3>02 | Build </h3>
                      <h5 className='mt-4'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
                    </div>

                    <div className='container'>
                      <h3>03 | Equip </h3>
                      <h5 className='mt-4'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.</h5>
                    </div>

                  </div>

                  <div className='grid grid-cols-3 gap-4'>
                    
                    <div className='container'>
                      <h3>04 | Compassion </h3>
                      <h5 className='mt-4'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
                    </div>

                    <div className='container'>
                      <h3>05 | Leadership Development </h3>
                      <h5 className='mt-4'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.</h5>
                    </div>

                    <div className='container'>
                      <h3>06 | Building Communities/Planting Churches </h3>
                      <h5 className='mt-4'>We care for every individual with compassion, respect, and equality.</h5>
                    </div>

                  </div>
            </div>

            <div className='pb-8'>
              <h1> Our Conviction </h1>
              <h5 className='mt-4'> Impacting every individual now to grow as a whole person: physically, spiritually, mentally, emotionally, and economically. <br></br> <br></br> ImpAct N.O.W. works in collaboration with leaders in Canada and in developing nations to transform individuals’ lives by the power of the Gospel of Jesus Christ. Our driving passion is to partner with people of the nations of the world, give praise to Jesus and advance the Kingdom of God in a practical and supernatural way. We firmly believe that true religion in the sight of God the Father is to look after the poor, the widow, the orphan and the outcast. We are committed to bring God-honoring impact and transformation into the lives of people in our local and global communities with a message of hope, faith, reconciliation, and the compassion of Jesus Christ.</h5>
            </div>

            <button className='border-black text-black'> Projects </button>


        </div>
    </div>

</div>

  )
}

export default About
