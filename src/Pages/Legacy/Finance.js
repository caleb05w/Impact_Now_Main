import React from 'react'
import Meeting from '../Components/Meeting';
import { Finances } from '../assets/Meetinglist';

function Finance() {
  return (
    <div className='w-fi '>
        <div className='border-black border-2'>
            <h1> Finances</h1>
            <h5>Click to download each report</h5>

            <div className='mt-10 grid grid-cols-3 gap-4 ease-in-out duration:300'>
                          {Finances.map((Finances, key) => {
                          return <Meeting name={Finances.name} date={Finances.date} link={Finances.link} />
                          })}
            </div>


        </div>
    </div>
  )
}

export default Finance
