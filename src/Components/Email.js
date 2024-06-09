import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiBattery50 } from 'react-icons/hi2';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7js25ee', 'template_rhopn5k', e.target, 'FiBoRLlCE8mwyaxIr')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='mt-[10%] p-10 bg-white  justify-center w-full h-[100%] '>
            

            <form className='w-full'onSubmit={handleSubmit}>
                <div className='w-full grid grid-cols-2 gap-4'>
                
                <div className=''>
                    <h1> HEllo </h1>
                </div>


              
               

                <div className='flex flex-col gap-4 h-full w-full'>

                <div className='grid grid-cols-2 gap-4'>
                    <label className='flex border-black border-2 '>
                        <div className='py-3 px-3 border-black bg-black'> <h5 className='text-white'>Name</h5> </div>
                        <input className='w-full' type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>

                    <label className='flex w-full h-full border-black border-2 '>
                        <div className='py-3 px-3 border-black bg-black'> <h5 className='text-white'>Email</h5> </div>
                        <input className='w-full' type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>

                    </div>

                   <label className=' h-full w-full border-black border-2 '>
                        <div className=' px-3 py-3 border-black bg-black'> <h5 className='text-white'>Message</h5> </div>
                        <textarea className='w-full h-fit border-2 border-black' name="message" value={formData.message} onChange={handleChange} required />
                    </label>

                    <button className='flex justify-center mt-6 border-black border-2'type="submit">Send</button>
                
            
                
                </div>

                </div>
            
            </form>
            </div>
    );
};

export default EmailForm;