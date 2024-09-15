import React from 'react'
import { data } from '../Components/Projects/ProjectData';
import ProjectCard from '../Components/Projects/ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='pt-20 min-h-screen w-11/12 mx-auto'>
      <h1 className='bg-gradient-to-r  from-blue-400  to-red-400 bg-clip-text text-transparent text-6xl font-bold text-center pb-10 mt-5' >Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center  min-h-full'>
        {
          data?.map((items, index) =>
            <div key={index}>
              <ProjectCard details={items} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Projects;