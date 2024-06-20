import { useState, useRef } from 'react';
import Person from '../assets/CR.png'
import Kamal from '../assets/Kamal.jpg'
import Vish from '../assets/Vish.png'
import TeamTog from '../Components/TeamTog'
import '../input.css'
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../Components/ScrollTopButton';
import { GoArrowUpRight } from 'react-icons/go';

import { motion } from 'framer-motion';



function Team() {

    const [currentCase, setCurrentCase] = useState(4);
    const [animate, setAnimate] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const scrollToRef = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const case1Ref = useRef(null);



    const handleCase1 = () => {
        switchCase(1);
        scrollToRef(case1Ref)
        // setShowContent(!showContent);
    }
    const handleCase2 = () => {
        switchCase(2);
        scrollToRef(case1Ref)
        // setShowContent(!showContent);
    }
    const handleCase3 = () => {
        switchCase(3);
        scrollToRef(case1Ref)
        // setShowContent(!showContent);
    }
  
    const switchCase = (caseNumber) => {
        setAnimate(false); // Reset animation state
        setTimeout(() => {
          setCurrentCase(caseNumber);
          setAnimate(true); // Trigger animation
        }, 100); // Small delay to ensure reflow for the animation
      };
  
    // Render different content based on the current case
    const renderContent = () => {
      switch (currentCase) {
        case 1:
          return (
          <TeamTog 
           image = {Kamal}
          name = {"Kamal Ghamal"}
          bio = {"Kamal was the principal of a private school in Nepal prior to his theological studies (M.Div.) at Sydney Missionary & Bible College, Australia, after which in July 2006 Kamal joined Richmond Baptist in Canada as an Associate Pastor of Youth and Young Adults. Since 2010 Kamal’s role has been changed to Pastor of Outreach & Assimilation because he believes that his strength and passion is to reach out people with the love and the Gospel of our Lord Jesus Christ and develop leaders to expand the Kingdom of God."}
          bio2 = {"Kamal’s heart desire is to see people come to know Jesus, reach their full potential, reproduce Christ like servant leaders and bring a God honoring impact in their local and global communities. Kamal is amazed to see how God had moved him and his family in several countries to bring glory to God. Kamal often brags that in one year he had an opportunity to minister in three different multicultural cities of three different continents! Kamal has lots of God’s stories to share. He loves to meet people, hear their stories and build relationship. Kamal’s interests include jogging, hiking, reading, and spending time with his family. He and his wife, Rajani, have 2 sons."}
          position ={"President"}
      >
      </TeamTog>
          )
        case 2:
          return (<TeamTog 
            image = {Vish}
            name = {"Vishwa Mohan"}
            bio = {"Vishwa is an experienced and well-travelled chef in the hospitality industry for over 20 years. With a diploma in hospitality management, he is a professional both in the kitchen and F&B Operations. Vishwa has worked in multitude of setting before, including The Oberoi Udaivilas in India, Four season in Maldives, Fairmont in Dubai and china, Burj – al – arab in Dubai, Fairmont Royal York Fairmont Airport and Pacific Rim in Canada. He has also had his own restaurant and now he is leading a team of chefs and managers in the Alma mater society of UBC."}
            bio2 = {"Vishwa Gave his life to Christ in the beginning of 2020 and in the summer of 2021 as Vishwa says, he had a dream, so strong that he felt that his spirit was out of his body and was standing on Granville street. He saw himself walking on Granville street and looking at a homeless person wrapped in a blanket; He helped that person by bringing him to his house, getting him cleaned up, making a hot meal for him and providing a bed to sleep. Next day he took that person to his work kitchen and started training him to work and eventually giving him a full time work. And that person was off the streets. Then Vishwa heard a voice saying “this is your mission”. After that vision/dream, Vishwa talked about his vision to Pastor Kamal Gamal and with the help of Emily and Digamber, they formed Impact Now Foundation to help people living in need."}
            position ={"Treasurer"}
       >
       </TeamTog>)
        case 3:
          return (<TeamTog 
            image = {Person}
            name = {"Emily Kajioka"}
            bio = {"Emily was born and raised in beautiful Richmond, British Columbia. She has been working as a dental technician assistant, fabricating crowns and veneers, for over ten years. Despite growing up in favourable circumstances she knows the feeling of an irretrievably broken life or how lost one can be without knowing the one true God. It is by His grace and His working through fellow man that she has found hope, meaning and provision and she hopes others can discover this too."}
            bio2 = {"But Jesus looked at them and said, “With men it is impossible, but not with God; for all things are possible with God.” Mark 10:27"}
            position ={"Secretary"}
       >
       </TeamTog>)
        case 4:
            return null;
      }
    };

    
     const profile = showContent ? renderContent() : null;



  return (
    <motion.div className=' w-full  min-h-screen lg:py-10 mb-[8%] '
    
     //exiting donate, entering team.


    initial={{ opacity: 0, y: 400 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0,  y: -400}}
    transition={{
      initial: { type: 'spring', stiffness: 100, damping: 40, duration: 0.8},
      animate: { type: 'spring', stiffness: 100, damping: 40, duration: 0.3 },
      exit: { type: 'spring', stiffness: 10, damping: 40, duration: 0.3 },
    }}
    

    // ease: "easeInOut"
    
    
    
    >
        <div className='w-4/5 m-auto'>
          <div className='mt-[13%] mx-[10%] w-5/12'>
          <h5>Our Team</h5>
          <h1 className='mt-[2%]'>Meet the people behind the change.</h1>
          <h4 className='mt-[5%]'>ImpAct N.O.W. builds strong and sustainable communities by serving those living in need in Canada and developing nations.</h4>
          <button className='group mt-[5%] px-4 py-2.5 bg-none border-2 border-black rounded-full w-fit hover:bg-black hover:text-white'><Link to='/donate'><h4 className='group-hover:text-white ease-in-out duration-300'>How to get involved</h4></Link></button>
          </div>
        </div>

        <div className='mt-[8%] flex max-w-[100vw] h-[60lvh] gap-[0.5%] overflow-hidden'>

          <div className=' group w-[full] bg-black overflow-hidden hover:cursor-pointer' onClick={handleCase1}>
              <img className='object-cover w-[33vw] h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={Kamal}></img>
              <div className='w-[99%] -translate-y-[113%] h-[90%] my-auto mx-auto'>
              <div className='relative top-[100%] group-hover:top-[95.5%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white font-[300] text-[1.1vw]'>President</h5></div>
              <div className='relative top-[5%] group-hover:top-[0%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[550] text-[2vw]'>Kamal Ghamal</h3></div>
              </div>
            </div>

            <div className=' group w-[full] bg-black overflow-hidden hover:cursor-pointer' onClick={handleCase2}>
              <img className='object-cover w-[33vw] h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={Vish}></img>
              <div className='w-[99%] -translate-y-[113%] h-[90%] my-auto mx-auto'>
              <div className='relative top-[100%] group-hover:top-[95.5%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white font-[300] text-[1.1vw]'>Treasurer</h5></div>
              <div className='relative top-[5%] group-hover:top-[0%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[550] text-[2vw]'>Vishwa Mohan</h3></div>
              </div>
            </div>

            <div className=' group w-[full] bg-black overflow-hidden hover:cursor-pointer' onClick={handleCase3}>
              <img className='object-cover w-[33vw] h-full group-hover:opacity-40 ease-in-out duration-[500ms] group-hover:scale-[1.07]' src={Kamal}></img>
              <div className='w-[99%] -translate-y-[113%] h-[90%] my-auto mx-auto'>
              <div className='relative top-[100%] group-hover:top-[95.5%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h5 className='text-white font-[300] text-[1.1vw]'>Secretary</h5></div>
              <div className='relative top-[5%] group-hover:top-[0%] h-[100%] opacity-[0%] group-hover:opacity-[100%] translate-x-5 ease-in-out duration-300'><h3 className='text-white font-[550] text-[2vw]'>Emily Kajioka</h3></div>
              </div>
            </div>
        </div>
            <div ref={case1Ref}>
            {profile}
            </div>




          <div className='w-5/6 mt-[7%] mx-auto'>
          <div className='ml-[36%]'>
          <h5> Here's how</h5>
          <h1 className='mt-[1%] w-9/12'>We’re building the leaders of tomorrow.</h1>

            <div class='grid grid-cols-3 mt-[10%] gap-[3%]'>

              <div className=''> 
                <h4 id='heavy'>Compassion</h4>
                <h5 className='mt-[5%]'>We are committed to serve people, build new relationships, and reconcile the hurt and broken to their local and global communities.</h5>
              </div>

              <div className=''> 
                <h4 id='heavy' >Leadership Development</h4>
                <h5 className='mt-[5%]'>We collaborate together to empower others to develop their full potentials, strengths, skills and help pursue their passions.</h5>
                </div>

              <div className=''> 
                <h4 id='heavy' >Building Communities/Planting Churches</h4>
                <h5 className='mt-[5%]'>We care for every individual with compassion, respect, and equality.
                </h5>
              </div>

            </div>

            <div className='flex mt-[10%] gap-[0.5%]'>
            <button><h5 className='m-0 p-0 gap-0 w-fit h-fit'> <Link to='/'>Go Back</Link></h5></button>
            <div className='my-auto hover:text-black' style={{color: '#6b7280', fontSize:'1.2vw'}}><GoArrowUpRight /></div>
            </div>
          </div>
        </div>


        </motion.div>

  )
}

export default Team
