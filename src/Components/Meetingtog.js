import React from 'react'
import { useState } from 'react';
import Meeting from '../Components/Meeting';
import { GoArrowUpRight } from 'react-icons/go';
import { GoArrowDownRight } from 'react-icons/go';



function Meetingtog({Meetinglist, year}) {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
};

const content = showContent ? (

<div className=' justify w-full overflow-hidden'>

<button className='bg-black text-white rounded-none min-w-[100%] ease-in-out duration-300' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <div className='flex flex-col w-full h-full '>
    <div className='container flex flex-row justify-between overflow-hidden'>
      <h5 className='text-white'>{year}</h5>
      <div className='translate-y-[10%] hover:text-black mx-[3%]' style={{color: 'white', fontSize:'1.3vw'}}><GoArrowDownRight /></div>
    </div>
  </div>
</button>

  <div className=' overflow-hidden mt-3 max-h-[200vh] mb-4'  style={{ transition: 'ease-in-out 0.3s'}}>
    <div className='grid grid-cols-2 gap-4'>{Meetinglist.map((Meetinglist, key) => {
      return <Meeting name={Meetinglist.name} date={Meetinglist.date} link={Meetinglist.link} />
      })}
    </div>
  </div>
</div>

) :

            
<div className=' justify w-full overflow-hidden'>

<button className='bg-transparent  text-white rounded-none max-w-fit ease-in-out duration-300' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <div className='flex flex-col gap-4 w-full h-full'>
    <div className='container flex flex-row justify-between overflow-hidden'>
      <h5 className='text-black'>{year}</h5>
      <div className='translate-y-[10%] hover:text-black mx-[3%]' style={{color: 'black', fontSize:'1.3vw'}}><GoArrowUpRight /></div>
    </div>
  </div>
</button>

  <div className=' overflow-hidden mt-3 max-h-0' style={{ transition: 'ease-in-out 0.3s'}}>
    <div className='grid grid-cols-2 gap-4'>{Meetinglist.map((Meetinglist, key) => {
      return <Meeting name={Meetinglist.name} date={Meetinglist.date} link={Meetinglist.link} />
      })}
    </div>
  </div>
</div>


  return (
    
    <div>
            {content}
    </div>
    )
  }

              

export default Meetingtog

