import React from 'react'
import logo from '../assets/Logo.png'
import CR from '../assets/CR.png'
import WWA from '../assets/WWA.png'
import MOW from '../assets/MOW.png'
import NSH from '../assets/NSH.png'
import '../output.css'
import Project from '../Components/Project'
import ProjectLeft from '../Components/ProjectLeft'
import ProjectCR from '../Components/ProjectCR'
import video from '../assets/BG1.gif'
import EmailForm from '../Components/Email'





function Home() {

  return (
    <div className='pb-20 bg-gray-200'> 
    {/* //div for bg color */}
  
          {/* Background Video */}
    <div className='overflow-hidden absolute w-full h-[73%] z-10'>
      <div className='bg-black'>
        <div className='flex-row flex justify-center'>
             <img className='object-cover w-full h-full opacity-40' src={video}></img>
        </div>
      </div>
  </div>

    
    <div className='md:w-10/12 lg:w-4/5 m-auto pt-[2%]'>
      {/* bg-white border-gray-200 border-2 rounded-lg shadow-lg */}

    <div className='w-full h-full object-cover flex justify-center z-20'>
      <div className='text-center mx-25 my-20 w-2/3 z-20'>
        <div className='flex justify-center'>  
          <div className='h-[15%] w-[15%]'>
          <img className="w-full h-full object-cover" src={logo}></img>
          </div>
         </div>
        <div className='w-2/3 mx-auto text-center z-10'>
          <h1 className='mt-[5%] z-10 text-white'> Impact N.O.W </h1>
          <h5 className=' mt-[8%] z-10 text-white'> Impact N.O.W. builds strong and sustainable communities by serving individuals living in need in Canada and in developing nations </h5>

          <div className="md:grid-rows-2 md:gap-2 grid lg:grid-cols-2 mt-10">
          <button className='headingHover'>About Us</button>
          <button className='headingHover'>Get Involved</button>
          </div>
          </div>
        </div>
      </div>

        {/* Projects */}
      <div className=''>
      <div className='h-fit w-full mt-[5%] md:mt-[10%] sm:grid sm:grid-rows-4'>

      <ProjectCR title='CELEBRATE RECOVERY'
       description='Celebrate Recovery (CR) is a biblically-based, recovery program that addresses our Hurts, Hang- ups, and Habits using a 12-step approach based on the Beatitudes from the book of Matthew.' 
       image={CR} 
       description2='words' 
       button='Learn More' 
       button2='Go Back'
       backgroundColor='#F89926'
       borderColor='2px solid white' 
       textColor= 'white' />

       
      <ProjectLeft title='WISER WITH AGE'
       description='Wiser With Age is a community-based mentorship program that matches seniors with young adults.The program was first started during the Pandemic in order to alleviate adverse effects on the senior and young adult populations’ mental health due to social isolation, depression, stress, and lack of involvement in activities.' 
       image={WWA} 
       description2='Wiser With Age continues to evolve to add value to the lives of seniors and young adults. Young adults help seniors with groceries and drive them to community events to socialize and to attend seminars on helpful topics by guest speakers. Seniors also hold workshops which the young adults help organize and run. At the end of the program participants film a short inspirational video about their mentor and scholarships are awarded to the young adults of the top three entries.' 
       button='Learn More' 
       button2='Go Back'
       backgroundColor='#FFFFFF' 
       borderColor='2px solid #2B2C2C' />

      <Project title='MEALS ON WHEELS'
       description='Meals On Wheels provides tasty and nutritious meals donated by a local Richmond business to seniors who are living alone. The meals are delivered weekly. Meals provide important physical nourishment but they are also a way for us to connect with valued members of our community to ensure their emotional and spiritual wellbeing. '
       image={MOW} 
       description2='If you would like to get involved, please send an email to nicolas@imactnowfoundation.com.' 
       button='Donate Now' 
       button2='Go Back'
       backgroundColor='#8FC544' 
       borderColor='2px solid white' />

      <ProjectLeft title='NEPAL SHALOM HOUSE'
       description='Shalom House works to provide sponsorships to underprivileged girls from the poorest of the poor Nepalese communities and focuses on overcoming barriers so that young women can advance to a post secondary education. '
       image={NSH} 
       description2='Young women from impoverished areas are at high risk of sex trafficking, especially along the busy Nepali-Indian border. Factors include poverty, limited opportunities, low education, and low socioeconomic and cultural status. Shalom House will empower three young women to pursue a university nursing degree, boosting their confidence, skills, and resources to become leaders and role models in their communities.' 
       button='Learn More' 
       button2='Go Back'
       backgroundColor='#FFFFFF' 
       borderColor='2px solid #2B2C2C' />

      </div>
    </div>
    </div>
    <div className='mb-10'></div>

    <EmailForm />

    
    </div>
    // div for bg color


  )
}



export default Home 
