import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandy Caba Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" font-burtons text-xl">developedbysc</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Sandy J Caba</h2>
            <h3 className="text-2xl py-2 ">Developer & Designer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Yellow diamonds in the watch, this shit cost a lot Never send a
              bitch your dot, that's how you get shot I DM in Vanish Mode, I do
              that shit a lot Took her panties off and this bitch thicker than a
              plot
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
      </main>
    </div>
  );
}