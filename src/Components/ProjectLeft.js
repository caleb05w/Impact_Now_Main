import React from 'react'
import { useState } from 'react';


function ProjectLeft({title, description, image, description2, button, button2, backgroundColor, textColor, borderColor}) {
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const content = showContent ? (
        <div className='bg-black grid-cols-2 grid w-full max-h-lvh overflow-hidden' style={{ transition: 'background-color 0.3s' }}>
            <div className='m-16 grid gap-10 text-center'>
                <h1 className='text-white'> {title} </h1>

                <div className='grid grid-cols-2 w-[200%] gap-[20%]  ' style={{ transition: 'ease-in-out 0.3s', transform: 'translateX(5%)'}}>
                <span className='text-white max-h-lvh'  style={{ transition: 'ease-in-out 0.3s'}}> { description2} </span>
                <span className='text-white h-0 overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> {description} </span>
                </div>

                <button className='bg-transparent border-2 text-white rounded-none' id='project' onClick={handleButtonClick}> { button2 } </button>
            </div>
            <img className='z-10 w-[110%] h-[110%] object-cover' style={{ zIndex: 10, transition: 'ease-in-out 0.3s' }} src ={image} ></img>
        </div>
    ) :  
    <div className='grid-cols-2 grid w-full max-h-lvh overflow-hidden' style={{ transition: 'background-color 0.3s', backgroundColor: backgroundColor}}>
        <div className='m-16 gap-10 grid text-center'>
            <h1 className > {title} </h1>
            
           
            <div className='grid grid-cols-2 w-[200%] gap-[20%] justify-items-center' style={{ transition: 'ease-in-out 0.3s', transform: 'translateX(-55%)', color: textColor}}  >
                <span className='h-0 overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> { description2} </span>
                <span className='h-max-lvh overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> { description} </span>
                </div>

            <button className='bg-transparent rounded-none' id='project' style={{color: textColor, border: borderColor}} onClick={handleButtonClick}> { button } </button>
        </div>
        <img className='object-cover h-full w-full z-10' style={{ zIndex: 10, transition: 'ease-in-out 0.3s' }} src ={ image } ></img>
    </div>;


    return (
        <div className=''>
            {content}
        </div>
    )
}

export default ProjectLeft