import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";


function Footer() {

  const handleClickGit = () => {
    window.open("https://github.com/limbocaba", "_blank");
  };

  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jorielcaba2002/", "_blank");
  };

  const handleClickEmail = () => {
    window.open("mailto:cabassndy@gmail.com");
  };

  return (
    <div className=' h-[100px] bg-blue-100'>
      <div className=' text-4xl flex justify-center py-4 gap-5'>
        <AiFillGithub onClick={handleClickGit} className='  cursor-pointer hover:scale-110 ease-in duration-200 hover:text-black' />
        <AiFillLinkedin onClick={handleClickLinked} className=' cursor-pointer hover:scale-110 ease-in duration-200 hover:text-[#0474b3] '/>
        <AiFillMail onClick={handleClickEmail} className=' cursor-pointer hover:scale-110 ease-in duration-200 hover:text-black'/>
      </div>
      <div className=' justify-center flex font-bold text-sm font-cursive'>
        Sandy Caba 2023
      </div>
    </div>
  )
}

export default Footer