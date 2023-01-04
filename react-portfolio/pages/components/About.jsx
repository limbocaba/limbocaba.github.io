import React from "react";

function About() {
  return (
    <div className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className=" py-4 text-3xl font-bold">Who I Am</h2>
          <p className=" py-2 text-gray-600"></p>
          <p className=" py-2 text-gray-600">
            I am a motivated developer born and mostly raised in NYC. Although I was born in the states, my parents came here from the Dominican Republic. I embrace my culture and show appreciation as much as I can, and I hope to do incorporate that into some future projects!
          </p>
          <p className="py-2 text-gray-600">
            Before I decided to take a deep dive into the world of tech, I was working at a Chick-Fil-A as well as an Amazon warehouse. Working those jobs made me realize I did not want to work in places like that for the rest of my life. After I combined that realization with my interest in computer science, I decided software engineering was the path for me!
          </p>
        </div>
        {/* <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className=" rounded-xl" src={pokedex} alt="aboutimg" />
        </div> */}
      </div>
    </div>
  );
}

export default About;
