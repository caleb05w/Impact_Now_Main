// import React from 'react'
// import { useState } from 'react';
// import { AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
// import { Meetinglist } from '../assets/Meetinglist';
// import Meeting from '../Components/Meeting';

// function Dropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className='relative flex flex-col items-center w-full h-full'>
//       <button onClick={() => setIsOpen((prev) => !prev)} className='bg-glue-400 p-4 w-full flex items-center justify-between font-bold text0lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'
//       >
//         Dropdown
//         {!isOpen ? (
//           <AiOutlineCaretDown className='h-8'></AiOutlineCaretDown>
//         ) : (
//           <AiOutlineCaretUp className='h-8'></AiOutlineCaretUp>
//         )}
//       </button>

//       {isOpen && (
//         <div className='mt-20 grid grid-cols-3 gap-4'>
//             {Meetinglist.map((Meetinglist, key) => {
//             return <Meeting name={Meetinglist.name} date={Meetinglist.date} link={Meetinglist.link} />
//             })}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Dropdown
