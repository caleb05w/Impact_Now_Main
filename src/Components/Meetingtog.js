import React from 'react'
import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
import Meeting from '../Components/Meeting';



function Meetingtog({Meetinglist, year}) {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
};

const content = showContent ? (

<div className=' justify w-full overflow-hidden'>

<button className='bg-black text-white rounded-none w-full' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <div className='flex flex-col w-full h-full'>
    <div className='container flex flex-row justify-between overflow-hidden'>
      <h4 className='text-white'>{year}</h4>
      <AiOutlineCaretUp className='fill-white my-auto'></AiOutlineCaretUp>
    </div>
  </div>
</button>

  <div className=' overflow-hidden mt-3 max-h-lvh mb-4'  style={{ transition: 'ease-in-out 0.3s'}}>
    <div className='grid grid-cols-3 gap-4'>{Meetinglist.map((Meetinglist, key) => {
      return <Meeting name={Meetinglist.name} date={Meetinglist.date} link={Meetinglist.link} />
      })}
    </div>
  </div>
</div>

) :

            
<div className=' justify w-full overflow-hidden'>

<button className='bg-transparent border border-black text-white rounded-none w-full' onClick={handleButtonClick} style={{ transition: 'background-color 0.3s' }}> 
  <div className='flex flex-col gap-4 w-full h-full'>
    <div className='container flex flex-row justify-between overflow-hidden'>
      <h4 className='text-black'>{year}</h4>
      <AiOutlineCaretDown className='fill-black my-auto'></AiOutlineCaretDown>
    </div>
  </div>
</button>

  <div className=' overflow-hidden mt-3 max-h-0' style={{ transition: 'ease-in-out 0.3s'}}>
    <div className='grid grid-cols-3 gap-4'>{Meetinglist.map((Meetinglist, key) => {
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

