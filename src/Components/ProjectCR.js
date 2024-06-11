import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ProjectCR({title, description, image, description2, button, button2, backgroundColor, textColor, borderColor}) {
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const content = showContent ? (
        <div className='lg:grid-cols-2 grid w-full max-h-lvh overflow-hidden' style={{ transition: 'background-color 0.3s', backgroundColor: backgroundColor}}>
            <img className='z-10 w-[110%] h-[110%] object-cover' style={{ zIndex: 10, transition: 'ease-in-out 0.3s' }} src ={image} ></img>
            <div className='mx-[5%] my-[10%] grid gap-10 text-center'>
                <h1 className='text-white'> {title} </h1>

                <div className='grid grid-cols-2 w-[200%] gap-[20%]  ' style={{ transition: 'ease-in-out 0.3s', transform: 'translateX(5%)'}}>
                <span className='text-white max-h-lvh'  style={{ transition: 'ease-in-out 0.3s'}}> { description} </span>
                <span className='text-white h-0 overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> {description} </span>
                </div>

                <Link to='/CelebrateRecovery'><button className='projectButton border-white border-2' onClick={handleButtonClick}> Learn More </button></Link>
            </div>
        </div>
    ) :  
    <div className='lg:grid-cols-2 lg:grid w-full max-h-[150vw] overflow-hidden' style={{ transition: 'background-color 0.3s', backgroundColor: backgroundColor}}>
    <img className=' lg:w-[110%] lg:h-[110%] sm:h-[80vw] sm:w-[100%] object-cover' style={{ zIndex: 10, transition: 'ease-in-out 0.3s' }} src ={image} ></img> 
    <div className='mx-[5%] lg:my-[10%] sm:my-[7%] grid lg:gap-10 sm:gap-5 lg:text-center sm:text-left'>
        <h1 className='text-white lg:pl-0 sm:pl-[10%]'> {title} </h1>

        <div className='grid grid-cols-2 w-[200%] gap-[20%] ' style={{ transition: 'ease-in-out 0.3s', transform: 'translateX(5%)'}}>
        <span className='text-white max-h-lvh'  style={{ transition: 'ease-in-out 0.3s'}}> { description} </span>
        <span className='text-white h-0 overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> {description} </span>
        </div>

        <Link to='/CelebrateRecovery'><button className=' sm:mt-[5%] sm:flex sm:justify-center projectButton border-white border-2 sm:min-w-[80%] ' onClick={handleButtonClick}>  Learn More </button></Link>
    </div>
</div>

    return (
        <div className=''>
            {content}
        </div>
    )
}

export default ProjectCR