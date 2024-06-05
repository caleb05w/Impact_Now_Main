import React from 'react'

function Button( {text, size} ) {
  return (
    <div>
    <button id='team' className='flex flex-row w-full h-10 mx-0 p-0 bg-transparent border-none group'>
        <div className='size-8 my-auto  mr-3'>
            <div className=' size-full rounded-full flex flex-row justify-center border-1 border-gray-600 group-hover:border-black group-hover:ease-in-out duration-200'>
                <div className='flex flex-col justify-center'> 
                    <h3 className='font-light text-[100%] text-gray-600 group-hover:text-black group-hover:ease-in-out duration-200'> {'>'} </h3>
                </div>
            </div>
         </div>
        <div className='bg-transparent mx-0 my-auto p-0 text-[100%] text-gray-600 group-hover:text-black group-hover:ease-in-out duration-200 font-normal'> {text} </div>
    </button>
    </div>
  )
}

export default Button
