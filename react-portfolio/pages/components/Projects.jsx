import React from "react";
import Image from "next/image";
import hulu from "../../public/hulucloneSS.png";
import petLyfe from "../../public/petlyfe.png";
import pokedex from "../../public/pokedex.png";
import breddit from "../../public/breddit.png";
import stoxy from "../../public/stoxy.png";
import morty from "../../public/morty.png"

function Projects() {
  const handleClickHuluDemo = () => {
    window.open("https://sandys-clone.surge.sh/", "_blank");
  };

  const handleClickPokeDemo = () => {
    window.open("https://sandys-pokedex.netlify.app/", "_blank");
  };

  const handleClickPetDemo = () => {
    window.open("https://pet-lyfe.netlify.app/", "_blank");
  };

  const handleClickBredDemo = () => {
    window.open("https://breddit.netlify.app/", "_blank");
  };

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
    window.open("https://github.com/SEI-Buffleheads/reddit-clone", "_blank");
  };

  const handleClickStoxy = () => {
    window.open("https://stoxy.netlify.app", "_blank");
  };

  const handleClickMorty = () => {
    window.open("https://mortyrun.netlify.app/", "_blank")
  }

  const handleClickMortyGit = () => {
    window.open("https://github.com/limbocaba/Frontend-Game", "_blank")
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
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              Demo
            </h3>
            <h3
              onClick={handleClickHulu}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              GitHub
            </h3>
          </div>
          <div>
            <h3 className=" text-2xl py-2 text-[#5651e5] tracking-wide">
              Hulu: Hottest Films Out Now!
            </h3>
          </div>
          <div>
            <p className=" text-sm tracking-wide">
              A mimic of Hulus landing page that uses TMDBs API to constantly
              update the categories and ratings of all films and TV shows on the
              site! Created using React, you can navigate the different
              categories to see what films are new to theaters along with the
              highest rated films of all time! Scroll through and see if one
              peaks your interest!
            </p>
          </div>
        </div>
        <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
          <Image
            src={stoxy}
            height={250}
            width={500}
            className="rounded-lg object-cover"
            alt=""
          />
          <div className=" flex">
            <h3
              onClick={handleClickStoxy}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              Demo
            </h3>
            <h3
              // onClick={handleClickPoke}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              GitHub
            </h3>
          </div>
          <div>
            <h3 className=" text-2xl py-2 text-[#5651e5] tracking-wide">
              Stoxy: Stocks Trading App{" "}
            </h3>
          </div>
          <div>
            <p className=" text-sm tracking-wide">
              Stoxy is a finance app that allows you to track up-to-date prices
              on stocks. Using React and Firebase, you can see the share prices
              of the hottest companies out today and see what the hottest topics
              are that might influence the market in the future. These price
              changes and percentages are all rendered using the Finnhub API.
            </p>
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
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              Demo
            </h3>
            <h3
              onClick={handleClickPet}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              GitHub
            </h3>
          </div>
          <div>
            <h3 className=" text-2xl py-2 text-[#5651e5] tracking-wide">
              PetLyfe: Pet E-Commerce Site
            </h3>
          </div>
          <div>
            <p className=" text-sm tracking-wide">
              An e-commerce website created to sell pet clothes and pet toys!
              Using React on the frontend and MongoDB, Express and RESTful APIs
              on the backend, this site allows you to add and remove items for
              your furry friends from your cart and checkout with your order!
            </p>
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
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              Demo
            </h3>
            <h3
              onClick={handleClickBred}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              GitHub
            </h3>
          </div>
          <div>
            <h3 className=" text-2xl py-2 text-[#5651e5] tracking-wide">
              Breddit: The Better Reddit
            </h3>
          </div>
          <div>
            <p className=" text-sm tracking-wide">
              A social media platform inspired by Reddit that allows you to post
              on your feed to get comments and upvotes from your friends!
              Created using a React-Boostrap frontend and a Python/Django
              backend, this app allows you to engage in live chat with other
              users on the app and post whatever is on your mind!
            </p>
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
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              Demo
            </h3>
            <h3
              onClick={handleClickPoke}
              className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider"
            >
              GitHub
            </h3>
          </div>
          <div>
            <h3 className=" text-2xl py-2 text-[#5651e5] tracking-wide">
              Pokedex: Gotta Catch Em All!{" "}
            </h3>
          </div>
          <div>
            <p className=" text-sm tracking-wide">
              A simple but fun Pokedex site that contains all pokemon and,when
              clicked on, displays their attack and defense stats along with
              their pokemon type and an image. Powered by React, you can scroll
              through the paginated site and see countless pokemon. Can you find
              your favorite one?
            </p>
          </div>
        </div>
        <div className="basis-1/3 flex-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:shadow-blue-100 flex-col">
      <Image
        src={morty}
        height={250}
        width={500}
        className="rounded-lg object-cover"
        alt=""
      />
      <div className=" flex">
        <h3
          onClick={handleClickMorty}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">Demo</h3>
        <h3
          onClick={handleClickMortyGit}
          className=" rounded-lg shadow-lg bg-black text-white my-4 cursor-pointer py-3 px-3 mx-3 hover:bg-gray-400 tracking-wider">
          GitHub
        </h3>
          </div>
          <div>
            <h3 className=' text-2xl py-2 text-[#5651e5] tracking-wide'>Run Morty Run!</h3>
          </div>
          <div>
            <p className=' text-sm tracking-wide'>Run Morty Run is a scroller game where you have to dodge not only Ricks portals but his flying saucer too! This browser game was made using only HTML, CSS and vanilla JavaScript. What is the highest score you can get?</p>
          </div>
    </div>
      </div>
    </>
  );
}

export default Projects;
