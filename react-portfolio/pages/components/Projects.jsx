import React from 'react'
import Image from "next/image";
import hulu from "../../public/hulucloneSS.png";
import petLyfe from "../../public/petlyfe.png";
import pokedex from "../../public/pokedex.png";
import breddit from "../../public/breddit.png";


function Projects() {

  const handleClickHuluDemo = () => {
    window.open("https://sandys-clone.surge.sh/","_blank")
  }

  const handleClickPokeDemo = () => {
    window.open("https://sandys-pokedex.netlify.app/","_blank")
  }

  const handleClickPetDemo = () => {
    window.open("https://pet-lyfe.netlify.app/","_blank")
  }

  const handleClickBredDemo = () => {
    window.open("https://breddit.netlify.app/","_blank")
  }

  const handleClickHulu = () => {
    window.open("https://github.com/limbocaba/Hulu-Clone", "_blank");
  };

  const handleClickPoke = () => {
    window.open("https://github.com/limbocaba/Pokedex-API", "_blank");
  };

  const handleClickPet = () => {
    window.open(
      "https://github.com/Brandon-Alvarez-03/pet-style-mern",
      "_blank"
    );
  };

  const handleClickBred = () => {
    window.open("https://github.com/SEI-Buffleheads/reddit-clone","_blank")
  }

  return (
    <>
    <div>
    <div className="flex justify-center">
      <h3 className="text-2xl py-1 justify-center uppercase dark:text-purple-400 tracking-wider text-[#5651e5]">
        Projects
      </h3>
    </div>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"></p>
  </div>
  <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap p-20">
    <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
      <Image
        src={hulu}
        height={250}
        width={500}
        className="rounded-lg object-cover cursor-default"
        alt=""
      />
      <div className=" flex">
        <h3
          onClick={handleClickHuluDemo}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">Demo</h3>
        <h3
          onClick={handleClickHulu}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">
          GitHub
        </h3>
        </div>
    </div>
    <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
      <Image
        src={pokedex}
        height={250}
        width={500}
        className="rounded-lg object-cover"
        alt=""
      />
      <div className=" flex">
        <h3
          onClick={handleClickPokeDemo}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">Demo</h3>
        <h3
          onClick={handleClickPoke}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">
          GitHub
        </h3>
        </div>
    </div>
    <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
      <Image
        src={petLyfe}
        height={250}
        width={500}
        className="rounded-lg object-cover"
        alt=""
      />
      <div className=" flex">
        <h3
          onClick={handleClickPetDemo}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">Demo</h3>
        <h3
          onClick={handleClickPet}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">
          GitHub
        </h3>
        </div>
    </div>
    <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
       <Image
        src={breddit}
        height={250}
        width={500}
        alt=""
        className="rounded-lg object-cover"
      /> 
      <div className=" flex">
        <h3
          onClick={handleClickBredDemo}
            className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">Demo</h3>
        <h3
          onClick={handleClickBred}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">
          GitHub
          </h3>
        </div>
    </div>
      </div>
      </>
  )
}

export default Projects