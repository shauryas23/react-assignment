"use client";

import Image from 'next/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import { useState } from 'react';
import { BsSun } from 'react-icons/bs';

export default function Home() 
{
  let iconStyles = { color: "white"};
  const[darkMode, setDarkMode] = useState(true);
  let content;
  if (darkMode) {
    content = <BsSun style={iconStyles}  onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>;
  } else {
    content = <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>;
  }
  return(
    <div className={darkMode ? 'dark':''}>
      <main className='bg-gray-300 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between' >
            <h1 className='text-xl font-bold dark:text-white'>PORTFOLIO</h1>
            <ul className='flex items-center'>
              <li>
                {content}
                  
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href = 'https://sharif.edu/~hatef/files/Bill%20Gates%2022.pdf' target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl max-w-lg mx-auto'>Shaurya Sharma</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>STUDENT AND DEVELOPER</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>
              Freshman in the department of Computer Science and Engineering at the Indian Institute of Technology Kanpur and a basketball player. 
              Aspires to be a software developer and an entrepreneur!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href = 'https://twitter.com/i/topics/808713037230157824' target="_blank"> <AiFillTwitterCircle/> </a>
            <a href = 'https://www.linkedin.com/in/williamhgates/' target="_blank"><AiFillLinkedin/></a>
            <a href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0' target="_blank"><AiFillYoutube/></a>
            </div>
           
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-teal-500'>SERVICES I OFFER</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
            As a web developer, I offer comprehensive web development services to create professional and user-friendly websites.
            With expertise in front-end development, I craft visually appealing interfaces using HTML, CSS, and JavaScript, ensuring seamless user experiences across devices. 
            Additionally, my back-end development skills enable me to handle server-side functionalities, databases, and API integrations using technologies like Node.js and PHP.
            From responsive design to optimized performance, I deliver end-to-end solutions that align with clients' requirements and industry best practices, enhancing their online presence and driving business growth.

            </p>
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl pt-10 pb-2 text-teal-500'>SKILLS</h3>
            <ul className='text-md py-0 leading-8 text-gray-800 dark:text-white'>
              <li>
                HTML, CSS(including Bootstrap, Tailwind)
              </li>
              <li>
                Javascript(including node, react, angular, vue, express, svelte)
              </li>
              <li>
                python(including django)
              </li>
              <li>
                mongoDB, MySQL
              </li>
              <li>
                Ruby on Rails
              </li>
              <li>
                PHP
              </li>
              <li>
                Flutter
              </li>
            

            </ul>
          </div>
        </section>



      </main>



    </div>
              
  )
}
