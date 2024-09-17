"use client";
import { Link } from "react-router-dom";
import "./svg/hallo.svg";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPencilRuler } from "react-icons/fa"; // Import necessary icons
import { useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import Box from "@mui/system/Box";
import { ArrowUpIcon } from '@radix-ui/react-icons'; // Import Radix UI icon
import LiveChat from "./liveChat";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = [
    "https://th.bing.com/th/id/R.c4580930a1b10329e559757c9d7c4b5d?rik=DwAvzSSeJa3zLw&riu=http%3a%2f%2fwww.kranse.com%2fcdn%2fshop%2farticles%2ftips_for_test_anxiety_and_sat_1024x1024.jpg%3fv%3d1509392551&ehk=%2f5GsVQ4%2fn51EVdTTANIhFNEby5hgMWkitSe8QbwO2js%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/564x/8d/d1/b5/8dd1b56d3d32905ea04ac5e536a21236.jpg",
    "https://i.pinimg.com/564x/79/11/4a/79114a65b27221bed1e1488950c04cd3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = ()  => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }; 
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
      const scrollToSection = () => {
      const section = document.getElementById('target-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } 
  
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
            <h1 className="text-2xl sm:text-2xl font-medium text-gray-900 ml-2 ">
              rohman.<span className=" text-blue-900 font-medium">dev </span>
            </h1>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex list-none gap-6 sm:gap-8 md:gap-12 font-normal text-base sm:text-lg md:text-xl">
              <li>
                <Link to="/" className="hover:text-gray-900/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900/80 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-900/80 transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="gap-2 sm:gap-3 md:gap-4 hidden md:flex ">
                        <button className="bg-[#F6F6F6] text-[#1E1F24] py-2 px-2 sm:py-1 sm:px-4 rounded-full hover:bg-blue-400 transition-colors border-[1px] border-black/50">
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
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                        <button className="bg-[#F6F6F6] text-[#1E1F24] py-2 my-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-400 transition-colors border-[1px] border-black">
              Contract
            </button>
          </div>
        </div>
      </div>
      {/* About me Page 1 */}
      <div id="target-section">
        <div className="flex flex-col items-center min-h-full pt-16 pb-20 w-full bg-[#535c47] md:pt-28 md:pb-24 md:w-auto">
          <div>
            <div className="flex flex-col justify-center md:flex-row md:items-start w-full md:w-[1205px] md:justify-between px-4 md:px-0 items-center  ">
              {/* Text and Button */}
              <motion.div
                className="flex flex-col gap-4 max-w-full md:px-0 md:max-w-4xl items-center md:items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base bg-[#535c47] py-1 border-[#F6F6F6] border-[1px] w-28 md:text-lg md:w-28 flex justify-center items-center rounded-full text-[#F6F6F6] ">
                  So why { " " }  
                  <BiQuestionMark className="text-xl flex items-center h-full  text-[#F6F6F6] " />
                </p>
                <h1 className="text-3xl font-medium text-[#F6F6F6] md:text-4xl md:text-gray-100 py-1  md:text-left text-center">
                  Saya bisa bantu <br /> untuk membuat <br /> Projects
                </h1>
                <p className="text-base text-green-100 md:text-lg md:text-left text-center md:items-start items-center ">
                  Manfaatkan kekuatan pengembangan full stack bersama kami!
                  <br className="hidden md:block" /> Kami menyediakan platform
                  paling andal bagi pengembang
                  <br className="hidden md:block" /> dan bisnis untuk mengelola
                  proyek Anda, melacak kemajuan,
                  <br className="hidden md:block" /> dan menerapkan aplikasi
                  dengan lancar.
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
                  className="rounded-2xl shadow-md md:w-[500px] md:h-[400px] "
                />
              </motion.div>
            </div>
          </div>

          { /* Quote and Experience */ }
          <motion.div
            className="mt-8 max-w-full p-4 bg-[#F6F6F6] rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 md:mt-12 md:max-w-4xl md:p-4 mx-4 md:px-6 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#1E1F24] md:text-lg border-r-0 md:border-r-2 px-0 md:pr-6 border-black/40 text-center md:text-left">
              <q>
                dgn menulis: js, ts, tailwind,
                <br className="hidden md:block" /> HTML, CSS, React, prismaORM,
                shadCn ui, MySQL.
                <br className="hidden md:block" /> bisa di pakai untuk membuat web
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
                <p className="text-[#1E1F24] font-semibold text-sm md:text-base">
                  Muhammad Rachman { " " }
                </p>
                <p className="text-[#1E1F24] text-sm md:text-base">
                  My Experience { " " }
                </p>
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
          
            {/* Page 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 mx-4 md:mx-44 bg-transparent max-h-full ">
              <Box
                className="relative rounded-xl w-full h-[300px] md:w-[600px] md:h-[600px] overflow-hidden"
                sx={{
                  borderRadius: "28px",
                  marginInline: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Framer Motion for smooth transitions */}
                <motion.div
                  key={currentIndex}
                  // initial={{ opacity: 0, x: 100 }}
                  // animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: -100 }}
                  // transition={{ duration: 0.5 }}
                  className="absolute w-full h-full bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                  }}
                />

                { /* Text overlay */ }
                <div className="absolute bg-black/50 text-green-100 flex justify-center items-center rounded-lg p-4 top-[10px] right-[10px] md:top-[15px] md:right-[15px] w-24 h-16 md:w-32 md:h-24 border-white/40 border-[1px] backdrop-blur-sm">
                  <div className="flex justify-center text-xs md:text-base">
                    1 Years <br /> Pengalaman <br /> Coding 
                  </div>
                </div>

                { /* Carousel controls */ }
                <button
                  onClick={handlePrev}
                  className="absolute right-16 bottom-3 transform bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border-white/40 border-[1px] text-green-100"
                >
                  &lt; 
                </button> 
                <button
                  onClick={handleNext}
                  className="absolute right-4 bottom-3 transform bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm  border-white/40 border-[1px] text-green-100 flex justify-center text-center"
                > 
                 &gt; 
                </button>
              </Box>

              <div className="flex flex-col justify-center space-y-4 px-4 md:px-12 md:text-left text-center items-center md:items-start">
                <p className="uppercase text-xs md:text-sm border-black border-[1px] py-2 px-3 rounded-full xl:mt-0 mt-2">Tentang Web </p>
                <h1 className="text-2xl md:text-4xl py-1">
                  Kelola proyek <br /> dengan mudah dengan rohman.dev <br /> { " " }
                  Kembangkan keahlian anda
                </h1>
                <p className="pb-1 md:mt-4 text-sm md:text-base">
                  rohman.dev adalah tempat baru memulai pengembangan dan 
                  bisnis untuk mengelola proyek Anda, melacak kemajuan, dan
                  menerapkan aplikasi dengan lancar.
                </p>
                <button className="bg-[#535c47] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-4 w-32 md:w-40">
                  My Portfolio
                </button>
              </div>
            </div>

            {/* Page 3 */}
            <div className="space-y-20">
              <div className="flex flex-col items-center justify-center text-center bg-[#535c47] py-40">
                <p className="text-4xl text-white mb-7 md:text-5xl md:w-[700px]">
                rohman.dev bisa membantu seberapa masalah project sesuai keingian
                  anda { " " }
                </p>
                <p className="text-green-100 md:text-lg mb-1">
                  itu sangatlah penting untuk membuat sekala web modern generasi selanjutnya { " " }   
                </p>

                {/* Icon grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-4 md:mx-52">
                  {/* Front End */}
                  <motion.div
                    className="bg-[#e0f7fa] text-black rounded-xl p-4 flex flex-col items-center"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaCode size={40} className="text-blue-500/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold">Front End </div>
                      <div className="text-sm mt-2">
                        I can Redux, React hooks, HTML, CSS, Tailwind CSS,
                        Next.js, and React. I'm skilled in building modern,
                        responsive web applications
                      </div>
                    </div>
                  </motion.div>

                  {/* Back End */}
                  <motion.div
                    className="bg-[#ffebee] text-black rounded-xl p-4 flex flex-col items-center"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaDatabase size={40} className="text-red-500/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold">Back End </div>
                      <div className="text-sm mt-2">
                        I can work with Prisma, MySQL, Express, and Node.js. I’m
                        experienced in developing robust back-end systems and
                        managing databases.
                      </div>
                    </div>
                  </motion.div>

                  {/* UI & UX */}
                  <motion.div
                    className="bg-[#fff3e0] text-black rounded-xl p-4 flex flex-col items-center"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaPencilRuler size={40} className="text-orange-500/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold">Interest </div>
                      <div className="text-sm mt-2">
                        I want to learn MongoDB, Svelte, Material UI, Framer
                        Motion, color palette, and Sass. I'm interested in
                        expanding my skills in modern web development and
                        design.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div> 
        
          <div className="flex flex-col items-center bg-white w-full min-h-[500px] justify-start px-4 md:px-0 lg:px-0 ">
        <button 
        onClick={scrollToSection}
        className="fixed lg:bottom-12 lg:right-28 right-5 bottom-5 bg-gray-200/60 text-gray-900/90 p-1 lg:p-1 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-400/60 focus:outline-none z-20 backdrop-blur-3xl border-gray-900/90 border-[1px] "
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button> 
                  {/* Contact us Page 4  */}
            <div className="h-[600px] flex justify-center flex-col items-center">
              <motion.h1
                className="text-center text-[32px] md:text-[48px] pb-1 md:pb-1"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Jadi mungkin siap memulai <br /> pengalaman baru #
              </motion.h1>
              <motion.p
                className="pb-3 text-center text-sm md:text-base md:w-[800px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >  
           </motion.p>
              <motion.button
                className="text-white bg-[#535c47] rounded-full px-4 py-2 text-sm md:text-base w-36 md:mt-2 mt-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 900 }}
              >
                Contact email
              </motion.button>
              <motion.div
                className="text-gray-700 text-[60px] md:text-[120px] shadow-black text-shadow mt-4 md:mt-6 justify-center flex items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              > 
                <div className="relative text-center ">
                                    <h1 className="relative m-0 text-custom font-medium leading-none tracking-custom bg-gradient-to-r from-clr-1 via-clr-2 bg-clip-text text-transparent stroke-[4px] animate-aurora-gradient font-sans">
                   Berminat!! 
                  </h1>

                  {/* Subtext */}
                                  </div>
              </motion.div> { " " }
            </div>{" "}
          </div>
          {/* Footer page 5 */}
          <div className="w-full flex flex-col md:flex-row justify-between border-t border-gray-400 h-auto md:h-10 items-center mt-6 py-4 md:px-8 lg:px-44">
            <p className="text-xs md:text-sm text-center md:text-left mb-2 md:mb-0">
              ©2024 rohman.dev, All rights reserved
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
      </div> { " " }  
    </div> 
  );
}; 


export default Navbar;
