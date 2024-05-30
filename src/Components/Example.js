import React, { useState } from 'react'

function Example() {
  return (
    <div className='flex h-screen justify-center bg-neutral-900 px-3 py-12'>
        <FlyoutLink href='#'>Pricing</FlyoutLink>
    </div>
  )
}

const FlyoutLink = ({children, href, FlyoutContent}) => {

    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent

    return (
        <div 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='group relative h-fit w-fit'>
            <a href={href} className="relative text-white"> 
                {children}
                <span
                style={{
                    transform: open ? "scaleX(1)" : "scaleX(0)",
                }} 
                className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out'/>
            </a>
            {showFlyout && <FlyoutContent />}
        </div>
    );
};


const PricingContent = () => {
    return (
        <div className='w-64 h-24 bg-white p-6 shadowl-xl'>
            
        </div>    
        )
}

export default Example
