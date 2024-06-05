import { useState, useRef } from 'react';
import Person from '../assets/CR.png'
import Kamal from '../assets/Kamal.jpg'
import TeamTog from '../Components/TeamTog'
import '../input.css'



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
            image = {Person}
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
    <div className=' w-full min-h-screen py-10 '>
        <div className='m-auto mb-10 p-10 bg-white  w-4/5 h-fit'>
            <div className='text-center pt-10'>
                <h1> Meet the Team </h1>
                <h5 className='mt-4'> Some body text about the team goes here.</h5>

                <div className="grid grid-cols-2 mt-20 w-[50%] mx-auto">
                    <button className='projectButtonTeam'>About Us</button>
                    <button className='projectButtonTeam'>Get Involved</button>
                </div> 
            </div>


{/* I want to be able to look at his face wihtout having to look away} */}
            

            <div className='max-h-[100%] overflow-hidden translate-y-[25%]'>
                <div className='w-fit grid grid-cols-3 gap-8'>
                
                    <div className='text-center'>
                    <h3> Kamal Ghamal</h3>
                    <h5> President </h5>
                    <img className='object-cover w-full max-h-[70%]' src={Kamal} onClick={handleCase1} ></img>
                    </div>

                                    
                    <div className='text-center'>
                    <h3> Vishwa Mohan</h3>
                    <h5> Treasurer </h5>
                    <img className='object-cover w-full max-h-[70%]' src={Person} onClick={handleCase2}></img>
                    </div>

                                    
                    <div className='text-center'>
                    <h3> Emily Kajioka </h3>
                    <h5> Secretary </h5>
                    <img className='object-cover w-full max-h-[70%]' src={Kamal} onClick={handleCase3}></img>
                    </div>

                </div>
            </div>
            <div className={animate ? 'slide-left' : ''}></div>

            
            <div ref={case1Ref}>
            {profile}
            </div>
        </div>
      
    </div>
  )
}

export default Team
