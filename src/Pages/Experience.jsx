import React from 'react'
import ExperienceCard from '../Components/Experience/ExperienceCard';
import { data } from '../Components/Experience/experienceData';

const Experience = () => {

  return (
    <div id='experience' className='pt-20 min-h-screen w-11/12 mx-auto'>
      <h1 className='bg-gradient-to-r  from-blue-400  to-red-400 bg-clip-text text-transparent text-6xl font-bold text-center pb-10 mt-8' >Experience</h1>
      {
        data?.map((items, index) =>
            <ExperienceCard details={items} />
        )
      }
    </div>
  )
}

export default Experience;