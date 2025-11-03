"use client";

import Link from 'next/link';
import { IoHomeOutline, IoCodeSlash, IoDocumentTextOutline, IoMenu, IoClose } from "react-icons/io5";
import { PiCertificate } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NavBar() {

    const pth = usePathname();

    function setActiveLinks(path:String) {
        return path === pth ? 'active' : 'non-active';
    }
    
    return(
    <div className='sticky top-0 left-0 w-full text-center align-middle justify-center justify-items-center bg-[#f1e1a7] md:py-5 z-50'>
            <nav className='hidden py-2 px-5 border-[#2c2d68] border-2 rounded-full md:block'>
                <ul className='flex flex-row w-auto justify-center m-auto gap-3'>
                <li className={setActiveLinks("/")} ><Link href="/" className='nav-link'><IoHomeOutline className='text-xl'/>Home</Link></li>
                <li className={setActiveLinks("/projects")}><Link href="/projects" className='nav-link'><IoCodeSlash className='text-xl'/>Projects</Link></li>
                <li className={setActiveLinks("/certifications")}><Link href="/certifications" className='nav-link'><PiCertificate className='text-xl'/>Certifications</Link></li>
                <li className={setActiveLinks("/resume")}><Link href="/resume" className='nav-link'><IoDocumentTextOutline className='text-xl'/>Resume</Link></li>
                </ul>
            </nav>

            <nav className='relative w-full text-end md:hidden'>
                <IoMenu className='inline m-5 text-3xl cursor-pointer' onClick={()=>{
                    document.getElementById("toggleMenu")?.classList.toggle("translate-x-full");
                    document.getElementById("toggleMenu")?.classList.toggle("opacity-0");
                }}/>
            </nav>

            <div id='toggleMenu' className='fixed top-0 right-0 h-full w-64 bg-[#2c2d68] text-white transform translate-x-full opacity-0 transition-all duration-300'>
                <div className='bg-[#2c2d68] text-white h-full w-64 border-0'>
                    <div className='text-end w-full'>
                        <IoClose className='inline m-5 text-3xl cursor-pointer' onClick={()=>{
                            document.getElementById("toggleMenu")?.classList.toggle("translate-x-full");
                            document.getElementById("toggleMenu")?.classList.toggle("opacity-0");
                        }}/>
                    </div>
                    <ul className='flex flex-col gap-5 text-left'>
                        <li className={setActiveLinks("/")}><Link href="/" className='nav-link'><IoHomeOutline className='text-xl'/>Home</Link></li>
                        <li className={setActiveLinks("/projects")}><Link href="/projects" className='nav-link'><IoCodeSlash className='text-xl'/>Projects</Link></li>
                        <li className={setActiveLinks("/certifications")}><Link href="/certifications" className='nav-link'><PiCertificate className='text-xl'/>Certifications</Link></li>
                        <li className={setActiveLinks("/resume")}><Link href="/resume" className='nav-link'><IoDocumentTextOutline className='text-xl'/>Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}