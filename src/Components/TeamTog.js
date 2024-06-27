import React from 'react'


function TeamTog({name, bio, bio2, image, position}) {
  

return (

  <div>
    
    <div className='mt-[4%] sm:mx-[1vw] lg:mx-[5vw] sm:max-w-[98vw] lg:max-w-[90vw] max-h-[200vh] overflow-hidden border-2 border-gray-200 shadow-md'>
      <div className='grid sm:grid-rows-2 lg:grid-cols-2 h-fit'>

      <div className='max-h-[70vh] w-full'>
          <img className='object-cover w-full h-full' src={image} alt="Team member"></img>
      </div>

      <div className='m-10 w-fit h-full'>
    <h5> {position} </h5>
          <h3> {name} </h3>
          <h5 className='sm:mt-0 md:mt-0 lg:mt-10'> {bio}
          <br></br><br></br>{bio2}</h5>
      </div>
      </div>
  </div>
  
  </div>

)
}

export default TeamTog
