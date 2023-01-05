import Link from "next/link";
import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaAddressCard, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  const handleClickGit = () => {
    window.open("https://github.com/limbocaba", "_blank");
  };

  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jorielcaba2002/", "_blank");
  };

  const handleClickResume = () => {
    window.open("https://drive.google.com/file/d/1unJpBlTzcZ7ZHZ5x2s1xoWcDM3qY2Yeo/view?usp=sharing", "_blank")
  }

  const handleClickEmail = () => {
    window.open('mailto:cabassndy@gmail.com')
  }

  return (
    <div className=" fixed w-full h-20 shadow-xl z-[100]">
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-blue-100 text-2xl">
        {/* Place leftside logo here */}
       <h1 className=" cursor-pointer hover:border-b border-gray-400 font-burtons px-7">SJC</h1>
        <div>
          <ul className=" hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-lg uppercase hover:border-b border-black">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" ml-10 text-lg uppercase hover:border-b border-black">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className=" ml-10 text-lg uppercase hover:border-b border-black">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" ml-10 text-lg uppercase hover:border-b border-black">
                Projects
              </li>
            </Link>
            <Link href="/#abour">
              <li
                onClick={handleClickResume}
                className=" ml-10 text-lg uppercase hover:border-b border-black">
                Resume
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className=" md:hidden cursor-pointer hover:border-b border-black">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={
        nav
          ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
          : ''}
      >

        <div className={
          nav
          ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              <Link href='/'>
              {/* Place leftside navbar logo here */}
              <h3 className=" uppercase tracking-widest font-bold">Sandy J Caba</h3>
              </Link>
              <div onClick={handleNav} className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[90%] py-4">
                Contact me to make amazing projects together!
              </p>
            </div>
          </div>
          <div className=" py-4 flex flex-col">
            <ul className=" uppercase">
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-gray-100 rounded-lg">Home</li>
              </Link>
              <Link href="/about">
                <li className=" py-4 text-sm hover:bg-gray-100 rounded-lg">About</li>
              </Link>
              <Link href="/skills">
                <li className=" py-4 text-sm hover:bg-gray-100 rounded-lg">Skills</li>
              </Link>
              <Link href="/projects">
                <li className=" py-4 text-sm hover:bg-gray-100 rounded-lg">Projects</li>
              </Link>
              {/* <Link href="/contact">
                <li className=" py-4 text-sm hover:bg-gray-100 rounded-lg">Contact</li>
              </Link> */}
            </ul>
            <div className=" pt-40">
              <p className=" uppercase tracking-widest text-[#5651e5]">
                Lets Connect!
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div onClick={handleClickLinked} className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin />
                </div>
                <div onClick={handleClickGit} className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div onClick={handleClickEmail} className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaEnvelope />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
