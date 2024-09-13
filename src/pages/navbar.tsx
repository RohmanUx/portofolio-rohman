'use client'
import { Link } from "react-router-dom";
import "./svg/hallo.svg";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPencilRuler } from "react-icons/fa"; // Import necessary icons
import { useState } from "react";
import { BiQuestionMark } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
    
  return (
    <div>
  { /*navbar*/ }
      <div>
      <motion.div
        className="fixed top-0 left-0 w-full py-1 flex items-center justify-between bg-[#FFF] bg-opacity-60 backdrop-blur-lg shadow-md z-50 px-4 sm:px-8 md:px-16 lg:px-[138px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-black ml-2">
            rohmanDev
          </h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex list-none gap-6 sm:gap-8 md:gap-12 font-normal text-base sm:text-lg md:text-xl">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="gap-2 sm:gap-3 md:gap-4 hidden md:flex ">
          <button className="bg-[#F6F6F6] text-[#1E1F24] py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-blue-600 transition-colors border-[1px] border-black">
            Meeting
          </button>
          <button className="bg-[#F6F6F6] text-[#1E1F24] py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-600 transition-colors border-[1px] border-black">
            Contract
          </button>
        </div>
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </motion.div>
      <div
        className={`fixed top-0 left-0 w-full bg-[#FFF] bg-opacity-60 backdrop-blur-lg shadow-md z-40 px-4 py-2 md:hidden transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col list-none gap-4 font-normal text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
          </li>
        </ul> 
        <div className="gap-2 sm:gap-3 md:gap-4 flex flex-col py-2">
          <button className="bg-[#F6F6F6] text-[#1E1F24] py-2 my-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-blue-600 transition-colors border-[1px] border-black">
            Meeting
          </button>
          <button className="bg-[#F6F6F6] text-[#1E1F24] py-2 my-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-600 transition-colors border-[1px] border-black">
            Contract
          </button>
        </div>

      </div>
      </div>      
   
   
  { /* About me Page 1 */ }
    <div>
  <div className="flex flex-col items-center min-h-full pt-16 pb-20 w-full bg-[#535c47] md:pt-28 md:pb-24 md:w-auto"> 
    <div> 
      <div className="flex flex-col items-start justify-center md:flex-row md:items-start w-full md:w-[1205px] md:justify-between px-4 md:px-0">
        { /* Text and Button */ }
        <motion.div
          className="flex flex-col gap-4 max-w-full md:px-0 md:max-w-4xl "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base bg-[#535c47] py-1 border-[#F6F6F6] border-[1px] w-28 md:text-lg md:w-28 flex justify-center items-center rounded-full text-[#F6F6F6] ">
            So why <BiQuestionMark className="text-xl flex items-center h-full  text-[#F6F6F6] "/> 
          </p>
          <h1 className="text-3xl font-medium text-[#F6F6F6] md:text-4xl md:text-gray-100 pb-1">
            Kami bisa bantu <br /> untuk membuat <br /> Projects 
          </h1>
          <p className="text-base text-[#F6F6F6] md:text-lg">
  Manfaatkan kekuatan pengembangan full stack bersama kami!
  <br className="hidden md:block" /> Kami menyediakan platform paling andal bagi pengembang 
    <br className="hidden md:block" />  dan bisnis untuk mengelola proyek Anda, melacak kemajuan, 
  <br className="hidden md:block" />  dan menerapkan aplikasi dengan lancar.
</p>
          <button className="bg-[#F6F6F6] py-2 rounded-full hover:bg-blue-400 transition-colors text-[#1E1F24] w-32 md:w-40">
            My Certificate
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://cdn.dribbble.com/userupload/15332517/file/original-a64cd79737df1ee5c2451eb8c825a5d5.png?resize=1200x900"
            alt="Example"
            width={350}
            height={280}
            className="rounded-2xl shadow-md md:w-[500px] md:h-[400px]"
          />
        </motion.div>
      </div>
    </div>

    {/* Quote and Experience */}
    <motion.div
      className="mt-8 max-w-full p-4 bg-[#F6F6F6] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 md:mt-12 md:max-w-4xl md:p-6 mx-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-[#1E1F24] md:text-lg italic border-r-0 md:border-r-2 px-0 md:px-6 border-black ">
        <q>
          Saya bisa menulis: js, ts, tailwind,
          <br className="hidden md:block" /> HTML, CSS, React, prismaORM, shadCn ui, MySQL.
          <br className="hidden md:block" /> Digunakan untuk membuat web 
        </q>
      </p>
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.dribbble.com/userupload/15332517/file/original-a64cd79737df1ee5c2451eb8c825a5d5.png?resize=1200x900"
          alt="Muhammad Rachman"
          width={60}
          height={60}
          className="rounded-full md:w-20 md:h-20"
        />
        <div>
          <p className="text-[#1E1F24] font-semibold text-sm md:text-base">Muhammad Rachman</p>
          <p className="text-[#1E1F24] text-sm md:text-base">My Experience</p>
        </div>
      </div>
    </motion.div>

    {/* Partners */}
    <div className="mt-8 max-w-full mx-2 flex flex-wrap justify-center gap-4 md:gap-6 md:mt-10 md:max-w-2xl">
      <div className="bg-[#F6F6F6] px-4 py-1 rounded-full shadow-sm text-center text-gray-900 text-sm md:text-base">
        LinkedIn
      </div>
      <div className="bg-[#F6F6F6] px-4 py-1 rounded-full shadow-sm text-center text-gray-900 text-sm md:text-base">
        JobSeek
      </div>
      <div className="bg-[#F6F6F6] px-4 py-1 rounded-full shadow-sm text-center text-gray-900 text-sm md:text-base">
        Jooble
      </div>
      <div className="bg-[#F6F6F6] px-4 py-1 rounded-full shadow-sm text-center text-gray-900 text-sm md:text-base">
        Glints
      </div>
      <div className="bg-[#F6F6F6] px-4 py-1 rounded-full shadow-sm text-center text-gray-900 text-sm md:text-base">
        Deals
      </div>
    </div>
  </div>
    </div>
      <div className="space-y-20">
        <div className="space-y-20">        
          <div className="space-y-20">
 
  { /* Page 2 */ }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 mx-4 md:mx-44 bg-transparent max-h-full">
  <div
    className="relative rounded-xl bg-cover bg-no-repeat w-full h-[300px] md:w-[600px] md:h-[600px]"
    style={{
      marginInline: "0",
      backgroundImage:
        "url(https://th.bing.com/th/id/R.c4580930a1b10329e559757c9d7c4b5d?rik=DwAvzSSeJa3zLw&riu=http%3a%2f%2fwww.kranse.com%2fcdn%2fshop%2farticles%2ftips_for_test_anxiety_and_sat_1024x1024.jpg%3fv%3d1509392551&ehk=%2f5GsVQ4%2fn51EVdTTANIhFNEby5hgMWkitSe8QbwO2js%3d&risl=&pid=ImgRaw&r=0)",
      borderRadius: "28px",
      paddingBlock: "32px",
      gridColumn: "1 / 2", // Adapt to one column on mobile
      gridRow: "1 / 2",
    }}
  >
    <div className="absolute bg-black/50 text-white flex justify-center items-center rounded-lg p-4 top-[10px] right-[10px] md:top-[25px] md:right-[25px] w-24 h-16 md:w-36 md:h-24 border-white border-[1px]">
      <div className="flex justify-center text-xs md:text-base">
        1 Years <br /> Pengalaman <br /> Coding ux
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-center space-y-4 px-4 md:px-12">
    <p className="uppercase text-xs md:text-sm">Tentang Kami </p>
    <h1 className="text-2xl md:text-4xl">
      Kelola proyek <br /> dengan mudah dengan kami  <br /> Kembangkan keahlian anda 
    </h1>
    <p className="mt-2 md:mt-4 text-sm md:text-base">
    rohmanDev adalah tempat paling terpercaya bagi pengembang dan bisnis untuk
      mengelola proyek Anda, melacak kemajuan, dan
      menerapkan aplikasi dengan lancar.
     </p>
    <button className="bg-[#535c47] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-4 w-32 md:w-40">
      My Portfolio
    </button>
  </div>
</div>

    { /* Page 3 */ }
            <div className="space-y-20">
  <div className="flex flex-col items-center justify-center text-center bg-[#535c47] py-24">
    <p className="text-4xl text-white mb-4 md:text-5xl md:w-[700px]">
     Saya bisa meperbaiki seberapa masalah project 
     sesuai keingian anda    </p> 
    <p className="text-white md:text-lg"> 
      itu sangatlah penting untuk web modern generasi selanjutnya     </p> 

    {/* Icon grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-4 md:mx-52">
      {/* Front End */}
      <motion.div
        className="bg-[#e0f7fa] text-black rounded-lg p-4 flex flex-col items-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <FaCode size={40} className="text-blue-500" />
        <div className="mt-6 text-center">
          <div className="font-semibold">Front End </div>
          <div className="text-sm mt-2">
            I can Redux, React hooks, HTML, CSS, Tailwind CSS, Next.js, and
            React. I'm skilled in building modern, responsive web applications
          </div>
        </div>
      </motion.div>

      { /* Back End */ }
      <motion.div
        className="bg-[#ffebee] text-black rounded-lg p-4 flex flex-col items-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <FaDatabase size={40} className="text-red-500" />
        <div className="mt-6 text-center">
          <div className="font-semibold">Back End </div>
          <div className="text-sm mt-2">
            I can work with Prisma, MySQL, Express, and Node.js. I’m experienced
            in developing robust back-end systems and managing databases.
          </div>
        </div>
      </motion.div>

      {/* UI & UX */}
      <motion.div
        className="bg-[#fff3e0] text-black rounded-lg p-4 flex flex-col items-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <FaPencilRuler size={40} className="text-orange-500" />
        <div className="mt-6 text-center">
          <div className="font-semibold">Interest </div>
          <div className="text-sm mt-2">
            I want to learn MongoDB, Svelte, Material UI, Framer Motion, color
            palette, and Sass. I'm interested in expanding my skills in modern
            web development and design.
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div> 
</div> 
</div> 

<div> 
<div className="flex flex-col items-center bg-white w-full min-h-[500px] justify-start px-4 md:px-0 lg:px-0"> 
  {/* Contact us Page 4  */}
  <div className="h-[600px] flex justify-center flex-col items-center"> 
  <motion.h1
    className="text-center text-[32px] md:text-[48px] pb-2 md:pb-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  > 
    Siap untuk memulai <br /> pengalaman baru  
  </motion.h1>
  <motion.p
    className="pb-3 text-center text-sm md:text-base md:w-[800px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    rohmanDev adalah tempat paling terpercaya dari seberapa kalangan komunitas pengembang dan bisnis untuk
  melacak semua proyek yang diperlukan, mengelola kemajuan, menerapkan aplikasi dengan lancar, 
  dan merencanakan Impinan sesuai keinginan Anda. 
  </motion.p>
  <motion.button
    className="text-white bg-[#535c47] rounded-full px-4 py-2 text-sm md:text-base w-36 md:mt-2 mt-2"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    Contact email
  </motion.button>
  <motion.p
    className="text-gray-700 text-[60px] md:text-[120px] shadow-black text-shadow mt-4 md:mt-6 justify-center flex items-center text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    business with me!!
  </motion.p> </div> 
  {/* Footer page 5 */}
  <div className="w-full flex flex-col md:flex-row justify-between border-t border-gray-400 h-auto md:h-10 items-center mt-6 py-4 md:px-8 lg:px-44">
  <p className="text-xs md:text-sm text-center md:text-left mb-2 md:mb-0">
    ©2024 rohmanDev, All rights reserved
  </p>
  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
    <motion.p
      className="underline text-xs md:text-sm text-center md:text-left"
      whileHover={{ scale: 1.05, color: "#ff6347" }}
    >
      Term & Condition
    </motion.p>
    <motion.p
      className="underline text-xs md:text-sm text-center md:text-left"
      whileHover={{ scale: 1.05, color: "#ff6347" }}
    >
      Privacy Policy
    </motion.p>
  </div>
  </div>

    </div> 
    </div> 
    </div> { " " } 
    </div>
  );
};

export default Navbar;
