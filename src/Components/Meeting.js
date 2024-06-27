import React from 'react'
import Button from './Button'

function Meeting( {name, date, link}) {
  return (
    <div className='px-8 py-6 border-gray-200 border-2 rounded-lg shadow-md h-fit w-full'>
        <h1 className='text-2xl'> {name} </h1>
        <h5 className='mb-[10%]'> {date} </h5>
        <a href= {link} target="_blank" rel="noreferrer">
        <Button text={ "View Link"} size={10} ></Button>
        </a>
    </div>
  )
}

export default Meeting
