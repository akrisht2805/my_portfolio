import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {

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
        <div className='bg-zinc-600 min-h-[40vh] flex flex-col justify-evenly'>
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-96 p-12'>
                <div className='sm:w-[30vw]'>
                    <h1 className='text-white text-3xl my-2' >AKRISHT YADAV</h1>
                    <p className='text-white' >A full stack developer with a strong grasp of programming, teamwork, and problem-solving skills!</p>
                </div>
                <div className='sm:w-[30vw]'>
                    <h1 className='text-white text-3xl my-2'>SOCIAL</h1>
                    <div className='flex '>
                        <FaLinkedinIn
                            className=" text-white text-[30px] mr-2  cursor-pointer hover:text-blue-400"
                            onClick={() => handleSocialMedia("linkedIn")}
                        />
                        <IoLogoInstagram
                            className=" text-white text-[30px] mx-2  cursor-pointer hover:text-blue-400"
                            onClick={() => handleSocialMedia("instagram")}
                        />
                        <FaGithub
                            className=" text-white text-[30px] mx-2 cursor-pointer hover:text-blue-400"
                            onClick={() => handleSocialMedia("github")}
                        />
                        <SiLeetcode
                            className=" text-white text-[30px] ml-2  cursor-pointer hover:text-blue-400"
                            onClick={() => handleSocialMedia("leetcode")}
                        />
                    </div>
                </div>

            </div>
            <div>
                <hr className='w-11/12 mx-auto' />
                <p className='p-8 text-white text-center'> &#169;copyright 2024, <span className='italic'>Made by <span className='underline'>Akrisht Yadav!</span></span> </p>
            </div>
        </div>
    )
}

export default Footer;