"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import navLink from "./navLink";

const links =[
    {url: '/', name: 'Home'},
    {url: '/about', name: 'About'},
    {url: '/folio', name: 'Folio'},
    {url: '/contact', name: 'Contact'},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/*LINKS*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link =>(
                    <Link href={link.url} key={link.name}>{link.name}</Link>
                ))}
            </div>
            {/*LOGO*/}
            <div className="flex md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" 
                className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">ghostek</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.media</span>
                </Link>
            </div>
            {/*SOCIAL*/}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/GhostekTheGuy">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://dribbble.com/Ghosteeek">
                    <Image src="/dribbble.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.facebook.com/hubert.kolejko/">
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/hubert-kolejko-2b2345208/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/*MENU*/}
            <div className="md:hidden">
                {/*MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen((prev) => !prev)}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {/*MENU LIST*/}
                {open && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map((link)=>(
                        <Link href={link.url} key={link.name}>
                            {link.name}
                        </Link>
                    ))} 
                </div>
            )}
            </div>
            
        </div>
    );
};
export default Navbar;