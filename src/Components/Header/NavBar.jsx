import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { id: 0, tabName: "Home", link: "#home" },
        { id: 1, tabName: "About", link: "#about" },
        { id: 2, tabName: "Projects", link: "#projects" },
        { id: 3, tabName: "Experience", link: "#experience" },
        { id: 4, tabName: "Contact", link: "#contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='sticky top-0 bg-zinc-500 z-50'>
            <div className='flex justify-between items-center px-4 py-2 md:hidden'>
                <button
                    onClick={toggleMenu}
                    className='text-white text-xl font-bold'
                    aria-label="Toggle menu"
                >
                    <MdMenu className='h-10 w-10' />
                </button>
                <a href='#home'>
                    <button
                        className='text-white text-xl font-bold border-2 rounded-full p-1'
                        aria-label="Toggle menu"
                    >
                        AY
                    </button>
                </a>
            </div>
            <ul className={`flex flex-col md:flex-row items-center justify-between md:w-6/12 mx-auto p-2 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
                {tabs.map((tab, index) => (
                    <li key={index} className='text-white group hover:text-blue-400 w-full md:w-auto'>
                        <a
                            className='block m-2 text-lg group text-center'
                            href={tab.link}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <button className='border-b-4 border-zinc-500  group-hover:border-b-4 px-2 group-hover:border-blue-400'>
                                {tab.tabName}
                            </button>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;