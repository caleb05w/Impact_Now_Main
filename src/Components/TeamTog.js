import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import Meeting from './Meeting'


function TeamTog({name, bio, bio2, position, image}) {
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = () => {
      setShowContent(!showContent);
  };
  
  const content = showContent ? (
  

  <div className=' justify w-full overflow-hidden'>
    
  <button className='p-0 mt-7 bg-transparent w-full hover:border-none' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <img className=' w-full h-full object-cover' src={image}></img>
    <div className='flex flex-col w-full h-full'>
            <h3 className='mt-3 text-black justify-left flex'>{name}</h3>
      <div className='flex justify-between overflow-hidden'>
            <h3 className='text-black mt-1 text-xl'>{position}</h3>
    </div>
    </div>
  </button>
  
    <div className=' overflow-hidden pt-4 p-3 max-h-lvh bg-white border-gray-200 border-2'  style={{ transition: 'ease-in-out 0.3s'}}>
    <h5>{bio}</h5>
    <h5 className='mt-2'>{bio2}</h5>
    </div>
  </div>
  
  ) :
  
  
  <div className='w-full overflow-hidden'>
  
  <button className='p-0 mt-7 bg-transparent w-full hover:border-none' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <img className=' w-full h-full object-cover' src={image}></img>   
    <div className='flex flex-col w-full h-full'>
    <h3 className='mt-3 text-black justify-left flex'>{name}</h3>
      <div className='flex justify-between overflow-hidden'>
    <h3 className='text-black mt-1 text-xl'>Founder</h3>
      </div>
    </div>
  </button>
  
    <div className=' overflow-hidden mt-3 max-h-0' style={{ transition: 'ease-in-out 0.3s'}}>
    </div>
  </div>
  
  
    return (
      
      <div>
              {content}
      </div>
      )
    }

export default TeamTog
