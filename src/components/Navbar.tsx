'use client'
import { useState } from 'react';
import { IoIosClose, IoIosMenu } from 'react-icons/io'
import { Typography } from './Typography';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const navbarItem: string[] = ["Home", "Course", "About", "Get in Touch"];
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <div className='flex w-full fixed top-10 z-10'>
            <div className={`w-[40%] hidden md:flex`}>
                <Image height={20} width={200} className='h-20 ml-12 cursor-pointer' src="https://res.cloudinary.com/dxj9hipty/image/upload/v1714880416/File/or11wqioiagcf8my1vy4.png" alt="" />
            </div>
            <div className={`min-w-[250px] md:w-[40%] bg-gradient-to-r from-[#9298f0] to-[#6060d8] flex md:hidden flex-col items-center rounded-r-[2rem] shadow-2xl transition-all duration-300 ${showNavbar ? 'h-full' : 'h-16'}`}>
                <div className='flex items-center'>
                    <Image height={20} width={200} className='h-16 ml-4 cursor-pointer' src="https://res.cloudinary.com/dxj9hipty/image/upload/v1714880433/File/fuaodjzbkq0s48zioo04.png" alt="" />
                    {!showNavbar && <IoIosMenu className="text-4xl cursor-pointer text-primaryWhite m-4" onClick={() => setShowNavbar(true)} />}
                    {showNavbar && <IoIosClose className="text-4xl cursor-pointer text-primaryWhite m-4" onClick={() => setShowNavbar(false)} />}
                </div>
                <div className={`transition-all duration-300 ${showNavbar ? 'opacity-100 h-[200px]' : 'opacity-0 h-0'}`}>
                    {
                        navbarItem.map((item, index) => (
                            <Link href={`${item === 'Home' ? '/' : '/' + item.toLowerCase().replaceAll(' ', '-')}`} key={index} onClick={() => setShowNavbar(false)}>
                                <div className='relative m-4'>
                                    <span className='cursor-pointer'><Typography size={'xl'} color={'primary'} weight={'medium'}>{item}</Typography></span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='hidden md:flex h-20 bg-gradient-to-r from-[#6060d8] to-[#9298f0] w-[60%] rounded-l-[2rem] shadow-2xl'>
                <div className='w-full flex items-center'>
                    <div className='flex items-center justify-around w-full h-full'>
                        {
                            navbarItem.map((item, index) => (
                                <Link href={`${item === 'Home' ? '/' : '/' + item.toLowerCase().replaceAll(' ', '-')}`} key={index}>
                                    <div className='flex flex-col items-center before:bg-white hover:before:h-2 hover:before:w-24 before:absolute before:top-0 before:rounded-md before:transition-all before:duration-300'>
                                        <span className='cursor-pointer'><Typography size={'xl'} color={'primary'} weight={'medium'}>{item}</Typography></span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar