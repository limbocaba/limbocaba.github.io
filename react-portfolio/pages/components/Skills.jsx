import React from 'react'
import { FaPython, FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa'
import { SiPostgresql, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { BiGitBranch } from 'react-icons/bi'

function Skills() {
  return (
      <div className=' w-full lg:h-screen p-2'>
        <div className=' max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className=' text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
          <h2 className=' py-4 text-2xl font-bold'>My Professional Skillset</h2>
          <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <FaPython className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Python</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <FaReact className=' w-[64px] h-[64px] animate-spin'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>React</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <FaJs className=' w-[64px] h-[64px] hover:animate-pulse'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>JavaScript</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <SiMongodb className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>MongoDb</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <SiPostgresql className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' font-bold cursor-default'>PostgreSQL</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <SiTailwindcss className=' w-[64px] h-[64px] hover:animate-pulse'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Tailwind CSS</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <DiDjango className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Django</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <SiTypescript className=' w-[64px] h-[64px] hover:animate-pulse'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>TypeScript</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <FaHtml5 className=' w-[64px] h-[64px] hover:animate-spin'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>HTML</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <FaNode className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Node</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <BiGitBranch className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Git Workflow</h3>
                </div>

            </div>
          </div>

          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-100'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
              <div className=' m-auto'>
               <SiExpress className=' w-[64px] h-[64px] hover:animate-bounce'/>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h3 className=' tracking-wider font-bold cursor-default'>Express.Js</h3>
                </div>

            </div>
          </div>

          

          </div>

        </div>

      </div>
  )
}

export default Skills