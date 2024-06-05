import React from 'react'
import { useState } from 'react'


function TeamTog({name, bio, bio2, image, position}) {
  

return (

  <div>
    
    <div className='mt-[4%] max-w-[100%] h-fit border-2 border-gray-200 shadow-md'>
      <div className='grid grid-cols-2 h-fit'>

      <div className='h-full w-full'>
          <img className='object-cover w-full h-full' src={image}></img>
      </div>

      <div className='m-10 w-fit h-full'>
      <h5> {position} </h5>
          <h3> {name} </h3>
          <h5 className='mt-10'> {bio}
          <br></br><br></br>{bio2}</h5>
      </div>
      </div>
  </div>
  
  </div>

)
}

export default TeamTog
