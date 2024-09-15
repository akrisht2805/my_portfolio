import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

const Home = () => {

    const word = 'Akrisht';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < word.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + word[index]);
                setIndex(index + 1);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [index]);

    return (
        <div id='home' className='pt-16 relative'>
            <Icon />
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-0">
                < h1 className=' text-white font-bold text-5xl md:text-8xl' >
                    Hi, I'm <span className='text-blue-400'>{displayedText}</span>
                </ h1>
                <p className=' text-white text-center'>
                    A full stack developer with a strong grasp of programming, teamwork, and problem-solving skills!
                </p>
            </div >
        </div>
    )
}


const Icon = () => {

    const handleSocialMedia = (type) => {
        let url = "";
        if (type === "linkedIn") {
            url = "https://www.linkedin.com/in/akrisht-yadav/";
        } else if (type === "instagram") {
            url = "https://www.instagram.com/stunner_akrisht/";
        } else if (type === "github") {
            url = "https://github.com/akrisht2805";
        } else if (type === "leetcode") {
            url = "https://leetcode.com/u/akrisht2805/";
        }
        window.open(url, "_blank");
    };

    return (
        <div className='border-2 hidden md:block  min-h-fit w-[55px] absolute left-0 top-[43vh]'>
            <FaLinkedinIn
                className=" text-white text-[30px] my-2 mx-auto cursor-pointer"
                onClick={() => handleSocialMedia("linkedIn")}
            />
            <div className='w-full h-[2px] bg-white' />
            <IoLogoInstagram
                className=" text-white text-[30px] my-2 mx-auto cursor-pointer"
                onClick={() => handleSocialMedia("instagram")}
            />
            <div className='w-full h-[2px] bg-white ' />
            <FaGithub
                className=" text-white text-[30px] my-2 mx-auto cursor-pointer"
                onClick={() => handleSocialMedia("github")}
            />
            <div className='w-full h-[2px] bg-white ' />
            <SiLeetcode
                className=" text-white text-[30px] my-2 mx-auto cursor-pointer"
                onClick={() => handleSocialMedia("leetcode")}
            />
        </div>
    )
}

export default Home;