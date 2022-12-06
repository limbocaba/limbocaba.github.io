import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill, BsFillSunriseFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import metaAvatar from "../public/meta-avatar.png";
import sandyPic from "../public/me.jpg"
import design from "../public/design.png";
import code from "../public/code.png";
import thumb from "../public/thumb.png";
import hulu from "../public/hulucloneSS.png";
import petLyfe from "../public/petlyfe.png";
import pokedex from "../public/pokedex.png";
import morty from "../public/morty.png";
import breddit from "../public/breddit.png"
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClickGit = () => {
    window.open("https://github.com/limbocaba", "_blank");
  };

  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jorielcaba2002/", "_blank");
  };

  const handleClickHulu = () => {
    window.open("https://github.com/limbocaba/Hulu-Clone", "_blank");
  };

  const handleClickPoke = () => {
    window.open("https://github.com/limbocaba/Pokedex-API", "_blank");
  };

  const handleClickMorty = () => {
    window.open("https://github.com/limbocaba/Frontend-Game", "_blank");
  };

  const handleClickPet = () => {
    window.open(
      "https://github.com/Brandon-Alvarez-03/pet-style-mern",
      "_blank"
    );
  };

  const handleClickResume = () => {
    window.open("https://drive.google.com/file/d/1txcKU_scjTjR9vFCcxa1V0U2bIIzL95o/view?usp=sharing", "_blank")
  }

  const handleClickBred = () => {
    window.open("https://breddit.netlify.app/","_blank")
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sandy Caba Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" font-burtons text-xl dark:text-white">
              developedbysc
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-black cursor-pointer dark:bg-gradient-to-r dark:from-purple-500 dark:to-red-500 dark:text-black dark:hover:text-white"
                  onClick={handleClickResume}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Sandy J Caba
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              A hungry and motivated developer looking to expand his skillset
              and provide value to a team in YOUR company!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin
              className=" cursor-pointer hover:text-blue-700"
              onClick={handleClickLinked}
            />
            <AiFillGithub
              className=" cursor-pointer hover:text-black dark:hover:text-white"
              onClick={handleClickGit}
            />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={sandyPic} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-600">
              Services I Offer
            </h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                Front-End Development
              </h3>
              <p className="py-2">
                Creating websites,apps and more projects to suit you and your
                companys needs!
              </p>
              <h4 className="py-4 text-teal-600">Skills I Use!</h4>
              <p className=" text-gray-800 py-1">React</p>
              <p className=" text-gray-800 py-1">NextJs</p>
              <p className=" text-gray-800 py-1">Tailwind</p>
              <p className=" text-gray-800 py-1">Rest APIs</p>
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                Back-End Programs
              </h3>
              <p className="py-2">
                Creating and maintaing back-end services such as databases and servers!
              </p>
              <h4 className="py-4 text-teal-600">Skills I Use!</h4>
              <p className=" text-gray-800 py-1">Python</p>
              <p className=" text-gray-800 py-1">Django</p>
              <p className=" text-gray-800 py-1">MongoDB</p>
              <p className=" text-gray-800 py-1">Express</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={thumb} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                But Wait, Theres More!
              </h3>
              <p className="py-2">
                I believe in staying sharp in skills that most would overlook, such as...
              </p>
              <p className=" text-gray-800 py-1">Git Workflow</p>
              <p className=" text-gray-800 py-1">CLI</p>
              <p className=" text-gray-800 py-1">Google Excel</p>
              <p className=" text-gray-800 py-1">Communication Skills</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex justify-center">
              <h3 className="text-3xl py-1 dark:text-teal-600 justify-center underline font-semibold">
                Projects
              </h3>
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"></p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={hulu}
                className="rounded-lg object-cover cursor-pointer transition hover:-translate-y-1 hover:scale-110 hover:brightness-50"
                layout="responsive"
                alt=""
                onClick={handleClickHulu}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pokedex}
                className="rounded-lg object-cover cursor-pointer transition hover:-translate-y-1 hover:scale-110 hover:brightness-50"
                layout="responsive"
                alt=""
                onClick={handleClickPoke}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={petLyfe}
                className="rounded-lg object-cover cursor-pointer transition hover:-translate-y-1 hover:scale-110 hover:brightness-50"
                layout="responsive"
                alt=""
                onClick={handleClickPet}
              />
            </div>
            <div className="basis-1/3 flex-1">
               <Image
                src={breddit}
                alt=""
                layout="responsive"
                className="rounded-lg object-cover cursor-pointer transition hover:-translate-y-1 hover:scale-110 hover:brightness-50"
                onClick={handleClickBred}
              /> 
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
