import React from 'react'
import '../output.css'

function About() {
  return (
    <div className='py-10 bg-gray-200'>
    <div className='w-4/5 my-10 m-auto h-fit py-16 px-16 rounded-lg shadow-lg bg-white'>  
    
      <h1 className='mt-12'> Mission & Vision </h1> 

      <button id='team' className='flex flex-row w-fit mx-0 px-0 bg-transparent group'>
        <div className='size-10 my-auto mr-4'>
          <div className=' size-full rounded-full border-gray-400 border-1 flex flex-row justify-center group-hover:border-black group-hover:ease-in-out duration-200'>
            <div className='flex flex-col justify-center'> 
              <h3 className='font-light text-4xl text-gray-400 group-hover:text-black group-hover:ease-in-out duration-200'> {'>'} </h3>
            </div>
          </div>
        </div>
        <div className='bg-transparent mx-0 mh-auto p-0 text-4xl text-gray-400 group-hover:text-black group-hover:ease-in-out duration-200 font-normal'>Meet the team </div>
      </button>

      <div className='grid grid-flow-row mb-20'>
      <div className='mt-20 grid grid-cols-2 gap-8 mb-12 h-fit'>
        <div className='h-full px-10 py-10 border-gray-300 border-2 shadow-lg rounded-lg'>
          <h3 className='text-4xl'> Mission </h3>
          <h5 className='mt-4'>ImpAct N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and developing nations.</h5>
        </div>

        <div className='h-[100%] px-10 py-10 border-gray-300 border-2 shadow-lg rounded-lg'>
          <h3 className='text-4xl'> Vision </h3>
          <h5 className='mt-4'>Strong communities where individuals are living to their full potential, thriving, and serving other communities.</h5>
        </div>
      </div>
      </div>

     <div className=' absolute w-4/5 left-[10%]'>
      <div className='bg-gray-900 p-16 pt-20'>
        <h1 className='text-4xl text-gray-300'> Our Pillars & Values </h1>

        <div className='grid grid-cols-3 gap-12'>
          
          <div className='mt-10 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'> 01 | Care </h3>
            <h5 className='mt-3'>We care for every individual with compassion, respect, and equality</h5>
          </div>

          <div className='mt-10 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'> 02 | Build </h3>
            <h5 className='mt-3'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
          </div>

          <div className='mt-10 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'> 03 | Equip </h3>
            <h5 className='mt-3'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.</h5>
          </div>
          
        </div>

        <div className='grid grid-cols-3 gap-12'>
          
          <div className='mt-16 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'> 04 | Compassion </h3>
            <h5 className='mt-3'>We demonstrate the love and compassion of Jesus Christ by meeting the dire needs of people in desperate situations. We Act justly, Love mercy and Walk humbly. (Micah 6:8)</h5>
          </div>

          <div className='mt-16 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'> 05 | Leadership development </h3>
            <h5 className='mt-3'>We disciple and mentor individuals to develop their strengths and skills needed to build their future and become self-sustained.</h5>
          </div>

          <div className='mt-16 h-fit w-fit'>
            <h3 className='text-xl text-gray-300'>Building Communities/Planting Churches </h3>
            <h5 className='mt-3'>We build community/support groups that transform local communities and plant new churches in developing nations, where individuals are invited to be hands and feet of Jesus.</h5>
          </div>

          </div>
        </div>
      </div> 
      
      {/* space taken up by absolute value container */}
      <div className='mt-[58%]'></div>

      <div className='p-10 border-2 border-gray-300 shadow-lg rounded-lg'>
        <h1 className='text-4xl'> Our conviction </h1>
        <h5 className='mt-4'>Impacting every individual now to grow as a whole person: physically, spiritually, mentally, emotionally, and economically.ImpAct N.O.W. works in collaboration with leaders in Canada and in developing nations to transform individuals’ lives by the power of the Gospel of Jesus Christ. Our driving passion is to partner with people of the nations of the world, give praise to Jesus and advance the Kingdom of God in a practical and supernatural way. We firmly believe that true religion in the sight of God the Father is to look after the poor, the widow, the orphan and the outcast. We are committed to bring God-honoring impact and transformation into the lives of people in our local and global communities with a message of hope, faith, reconciliation, and the compassion of Jesus Christ.</h5>
      </div>
      
    </div>
    </div>
  )
}

export default About
