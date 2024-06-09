import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ProjectCR({title, description, image, description2, button, button2, backgroundColor, textColor, borderColor}) {
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const content = showContent ? (
        <div className='grid-cols-2 grid w-full max-h-lvh overflow-hidden' style={{ transition: 'background-color 0.3s', backgroundColor: backgroundColor}}>
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
    <div className='grid-cols-2 grid w-full max-h-lvh overflow-hidden' style={{ transition: 'background-color 0.3s', backgroundColor: backgroundColor}}>
    <img className='z-10 w-[110%] h-[110%] object-cover' style={{ zIndex: 10, transition: 'ease-in-out 0.3s' }} src ={image} ></img>
    <div className='mx-[5%] my-[10%] grid gap-10 text-center'>
        <h1 className='text-white'> {title} </h1>

        <div className='grid grid-cols-2 w-[200%] gap-[20%]  ' style={{ transition: 'ease-in-out 0.3s', transform: 'translateX(5%)'}}>
        <span className='text-white max-h-lvh'  style={{ transition: 'ease-in-out 0.3s'}}> { description} </span>
        <span className='text-white h-0 overflow-hidden' style={{ transition: 'ease-in-out 0.3s'}}> {description} </span>
        </div>

        <Link to='/CelebrateRecovery'><button className='projectButton border-white border-2' onClick={handleButtonClick}>  Learn More </button></Link>
    </div>
</div>

    return (
        <div className=''>
            {content}
        </div>
    )
}

export default ProjectCR