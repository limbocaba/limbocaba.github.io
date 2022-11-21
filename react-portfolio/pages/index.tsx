import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import metaAvatar from "../public/meta-avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import thumb from "../public/thumb.png";
import hulu from "../public/hulucloneSS.png";
import petLyfe from "../public/petlyfe.png";
import pokedex from "../public/pokedex.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClickGit = () => {
    window.open("https://github.com/limbocaba","_blank")
  }

  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jorielcaba2002/", "_blank")
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
            <h1 className=" font-burtons text-xl dark:text-white">developedbysc</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
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
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack Developer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi debitis ut eveniet quas, vitae natus aliquam, sint obcaecati quidem labore dignissimos et, dolor dicta delectus nisi ipsa! Necessitatibus, impedit?
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin className=" cursor-pointer" onClick={handleClickLinked} />
            <AiFillGithub className=" cursor-pointer" onClick={handleClickGit} />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={metaAvatar} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-600">Services I Offer</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, fugit veniam assumenda voluptatem consequuntur aliquid accusamus quidem asperiores sint quia neque commodi magni id. Eum quae rerum ut harum sunt.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                Clean Coded Projects
              </h3>
              <p className="py-2">
                Creating websites,apps and more projects to suit you and your
                companys needs!
              </p>
              <h4 className="py-4 text-teal-600">Skills I Use!</h4>
              <p className=" text-gray-800 py-1">React</p>
              <p className=" text-gray-800 py-1">Tailwind</p>
              <p className=" text-gray-800 py-1">Python</p>
              <p className=" text-gray-800 py-1">Postgresql</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                Clean Coded Projects
              </h3>
              <p className="py-2">
                Creating websites,apps and more projects to suit you and your
                companys needs!
              </p>
              <h4 className="py-4 text-teal-600">Skills I Use!</h4>
              <p className=" text-gray-800 py-1">React</p>
              <p className=" text-gray-800 py-1">Tailwind</p>
              <p className=" text-gray-800 py-1">Python</p>
              <p className=" text-gray-800 py-1">Postgresql</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={thumb} alt="" width={100} height={100} />
              <h3 className="text-large font-medium pt-8 pb-2">
                Clean Coded Projects
              </h3>
              <p className="py-2">
                Creating websites,apps and more projects to suit you and your
                companys needs!
              </p>
              <h4 className="py-4 text-teal-600">Skills I Use!</h4>
              <p className=" text-gray-800 py-1">React</p>
              <p className=" text-gray-800 py-1">Tailwind</p>
              <p className=" text-gray-800 py-1">Python</p>
              <p className=" text-gray-800 py-1">Postgresql</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-600 ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet adipisci odit deleniti quaerat at eius doloremque. Autem animi sed impedit, harum iusto aut quisquam itaque, perspiciatis quo, velit officia?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={hulu}
                className="rounded-lg object-cover"
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pokedex}
                className="rounded-lg object-cover"
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={petLyfe}
                className="rounded-lg object-cover"
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
