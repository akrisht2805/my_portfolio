import React from 'react'

const About = () => {
    return (
        <div id='about' className='sm:w-8/12 min-h-screen pt-20 px-4 sm:px-0 mx-auto'>

            <h1 className='bg-gradient-to-r  from-blue-400  to-red-400 bg-clip-text text-transparent text-6xl font-bold py-4'>Introduction</h1>

            <p className='text-white text-base md:text-xl text-justify'>👨‍💻 Hi, I am an Associate Product Engineer at Cognologix Technologies Pvt Ltd with hands-on experience in <span className='text-blue-400'>full-stack web development, specializing in React, Java, and Spring boot.</span> I have successfully developed and deployed web applications such as the Allocation Management System, which optimized resource management and project delivery within my organization. With a solid foundation in <span className='text-blue-400'>data structures, algorithms, and low-level design</span>, I am adept at solving complex problems and collaborating with cross-functional teams to deliver high-quality software solutions. I hold a Bachelor of Technology in Computer Science and Engineering, and have <span className='text-blue-400'>solved over 500+ problems on Leetcode</span>, showcasing my proficiency in coding challenges🚀.</p>

            <br></br>

            <p className='text-white text-base md:text-xl text-justify'>🏞️Outside of coding, I have a passion for traveling and enjoy playing online games, which helps me maintain a balanced and dynamic lifestyle. On a different note, I'am also into photography📸.It is not just a hobby, I see it as a way to capture moments🎞️.</p>

            <a href='https://drive.google.com/file/d/1EUNA0q3gcqBCX0kAfPzvVcBFHAkjgB3P/view?usp=drivesdk'>
                <button className='text-white border-2 rounded-lg p-4 my-6 flex text-xl hover:border-blue-400 items-center'>View Resume
                    <svg className="ml-4 w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </button>
            </a>

        </div>
    )
}

export default About;