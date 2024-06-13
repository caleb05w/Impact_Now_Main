import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Button from './Button'


function FinanceHolder( {name, date, link}) {
  return (

    
    <div className='h-fit w-full'>

          
          <a href= {link} target="_blank">
            
          <div className='flex mt-[10%]  gap-[1%] mx-0 p-0'>
          <button><h5 className='m-0 p-0 gap-0 w-fit h-fit text-black'> {date}</h5></button>
          <div className='my-auto' style={{color: 'black', fontSize:'1.1vw'}}><GoArrowUpRight /></div>
          </div>

          </a>
          
         

    </div>
  )
}

export default FinanceHolder
