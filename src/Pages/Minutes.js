import React from 'react'
import { Meetinglist_2024, Meetinglist_2023, Meetinglist_2022, Meetinglist_2021 } from '../assets/Meetinglist';
import Meetingtog from '../Components/Meetingtog';


function Minutes() {
  return (
    
    <div className='bg-gray-300 w-full min-h-screen py-10 '>
        <div className='m-auto mb-10 p-16 bg-white  w-4/5 h-fit'>
            <h1> Meeting Minutes</h1>
            <h5>Click to view each meeting</h5>



            <div className='mt-10'>
            <Meetingtog
            Meetinglist = {Meetinglist_2024}
            year = {2024}
            />
            </div>

            <div className=''>
            <Meetingtog
            Meetinglist = {Meetinglist_2023}
            year = {2023}
            />
            </div>

            <div className=''>
            <Meetingtog
            Meetinglist = {Meetinglist_2022}
            year = {2022}
            />
            </div>

            <div className=''>
            <Meetingtog
            Meetinglist = {Meetinglist_2021}
            year = {2021}
            />
            </div>

            
            
        </div>
    </div>
    )
  }

              

export default Minutes
