// "use client";
import { Link } from "react-router-dom";
import "./svg/hallo.svg";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPencilRuler } from "react-icons/fa"; // Import necessary icons
import { useState } from "react";
import Box from "@mui/system/Box";
import { ArrowUpIcon } from "@radix-ui/react-icons"; // Import Radix UI icon
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,

  DropdownItem,
} from "@nextui-org/dropdown";
import {
  IoArrowDownSharp,
  IoCode,
  IoDocument,
  IoMailOpen,
} from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
// import { nextui as myNextUI } from 'nextui'; // Use a different name to avoid conflict
import { Card, CardFooter } from "@nextui-org/card";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiDaisyui,
  SiNextui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiHostinger,
} from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = [
    "https://th.bing.com/th/id/R.c4580930a1b10329e559757c9d7c4b5d?rik=DwAvzSSeJa3zLw&riu=http%3a%2f%2fwww.kranse.com%2fcdn%2fshop%2farticles%2ftips_for_test_anxiety_and_sat_1024x1024.jpg%3fv%3d1509392551&ehk=%2f5GsVQ4%2fn51EVdTTANIhFNEby5hgMWkitSe8QbwO2js%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/564x/8d/d1/b5/8dd1b56d3d32905ea04ac5e536a21236.jpg",
    "https://i.pinimg.com/564x/79/11/4a/79114a65b27221bed1e1488950c04cd3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
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
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/*navbar*/}

      <div className="w-full px-3 fixed  sm:px-8 md:px-14 lg:px-[125px] z-50 mt-4 rounded-full mx-0">
        <motion.div
          className="top-0 left-0 w-full py-[1.5px] flex items-center justify-between bg-green-900/90 backdrop-blur-3xl shadow-md z-50 rounded-full px-5 backdrop-saturate-150 border border-white/10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center flex items-center">
            <h1 className="text-2xl sm:text-2xl font-medium text-gray-100/90 ml-0 font-mono border-r-2 border-white/90 pr-2 h-5 text-center flex items-center">
              Rohman.
              <span className=" text-orange-100/90 font-medium bg-black/0">
                com{" "}
              </span>
            </h1>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex list-none gap-10 sm:gap-10 md:gap-10 font-normal text-sm sm:text-base  font-mono text-white/90">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-100/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-green-100/80 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-green-100/80 transition-colors flex items-center text-center"
                >
                  Help{" "}
                  <IoArrowDownSharp className="ml-2 text-sm text-white text-center" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="gap-2 sm:gap-3 md:gap-4 hidden md:flex ml-12">
            <Button className="bg-black/90 text-white/90 py-1 px-1 sm:py-1 sm:px-4 rounded-full hover:bg-white transition-colors border-2 border-black/90 hover:text-black/90 font-mono">
              Contract <AiOutlineWhatsApp className="ml-1" />
            </Button>
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
            <Button className="bg-[#F6F6F6] text-[#1E1F24] py-2 my-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-400 transition-colors border-[1px] border-black/80">
              Contract me
            </Button>
          </div>
        </div>
      </div>
      {/* About me Page 1 */}
      <div id="target-section">
        <div className="flex flex-col items-center min-h-full pt-16 pb-20 w-full bg-green-900 md:pt-28 md:pb-24 md:w-auto">
          <div>
            <div className="flex flex-col justify-center md:flex-row md:items-start w-full md:w-[1205px] md:justify-between md:px-0 items-center  ">
              {/* Text and Button */}
              <motion.div
                className="flex flex-col max-w-full md:px-0 md:max-w-4xl items-center justify-center  py-10  text-[#F6F6F6] text-sm sm:w-full xl:flex xl:justify-start xl:items-start px-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className=" bg-green-900/80 xl:py-[1px] border-[#F6F6F6]/90 border-[1px] w-20 sm:text-sm sm:w-20 flex justify-center items-center rounded-full text-white/90 py-[1px] font-mono sm:mb-2 mb-4">
                  Layanan
                </p>
                <h1 className="text-5xl  text-[#F6F6F6] md:text-4xl md:text-gray-100 py-0  md:text-left text-center font-mono sm:mb-5 mb-8">
                  Ada yang bisa <br /> dibantu dibuatkan <br /> Projects web
                </h1>
                <p className="text-base text-green-100 md:text-base md:text-left text-center md:items-start items-center font-mono mb-5 sm:mb-2 gap-2 sm:w-[500px] w-72">
                  Saya seorang pengalaman pengembangan
                                    full stack akan membantu Anda dalam mengelola
                                   proyek secara efisien, melacak kemajuan, dan
                                    menerapkan aplikasi dengan lancar
                                    sesuai keinginan bersama
                </p>
                <a href="https://drive.google.com/file/d/1wvxBA4zNG3tm6fNPh-4OYqnrMxRgFHpn/view?usp=sharing">
                  <Button
                    color="primary"
                    variant="bordered"
                    className="py-1 h-9 rounded-full hover:bg-green-100 transition-colors w-20 md:w-28 border border-black/90 text-black/90 bg-white/90 font-mono sm:px-1 px-14"
                  >
                    My resume
                  </Button>{" "}
                </a>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="flex justify-center mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none mx-0 p-0 skeleton"
                >
                  <Image
                    width={400}
                    height={400}
                    src=""
                    alt="NextUI Album Cover"
                    className="rounded-xl m-0 p-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px]"
                  />
                  <CardFooter className="justify-between before:bg-green-100/10 bg-green-900/10 border-green-200/20 border overflow-hidden py-0 absolute before:rounded-none rounded-none bottom-0 shadow-small m-0 z-10 w-full h-20">
                    <p className="sm:text-2xl text-white/90 text-sm">
                      I wanna intership Contact me
                    </p>
                    <Button
                      className="text-tiny text-black bg-black/0 border border-black/90 bg-white rounded-full px-5 sm:m-0 ml-2"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Contact me
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Quote and Experience */}
          <motion.div
            className="mt-8 max-w-full p-4 bg-green-100/90 rounded-2xl shadow-lg flex flex-col md:flex-row items-center sm:gap-6 gap-0 md:mt-12 md:max-w-4xl md:p-4 mx-4 md:px-6 border border-black/90 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-black/90 md:text-lg border-r-0 md:border-r-2 px-0 md:pr-6 border-black/90 text-center md:text-left font-mono mb-4 mt-2 sm:mb-0 sm:mt-0">
              <q>
                berpengalaman writting{" "}
                <mark className="bg-green-900/90 text-white">
                  {" "}
                  javascrip, typescrip, tailwind,
                  <br className="hidden md:block" /> React, next, prismaORM,
                  shadcnUi, express, node, MySQL,{" "}
                  <br className="hidden md:block" />
                  nextUi, dasyUi, html, css, elementor
                </mark>{" "}
                untuk website
              </q>
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.dribbble.com/userupload/15332517/file/original-a64cd79737df1ee5c2451eb8c825a5d5.png?resize=1200x900"
                alt="Muhammad Rachman"
                width={60}
                height={60}
                className="rounded-full md:w-20 md:h-20 shadow-2xl"
              />

              <div>
                <p className="text-black/90 font-semibold text-sm md:text-base font-mono">
                  Muhammad Rachman{" "}
                </p>
                <p className="text-green-900/90 text-sm md:text-base font-mono">
                  - My Experience -{" "}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Partners */}
          <div className="mt-8 max-w-full mx-2 flex flex-wrap justify-center gap-4 md:gap-6 md:mt-10 md:max-w-2xl">
            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              glassdoor
            </Button>
            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              Glints
            </Button>
            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              joobseek
            </Button>
            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              linklind
            </Button>
            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              Jooble
            </Button>

            <Button
              color="primary"
              variant="shadow"
              className="bg-green-900/90 px-4 py-1 h-8 rounded-full text-center text-gray-100 text-sm md:text-base border border-white/60"
            >
              Dealls
            </Button>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-black/0 bg-opacity-80 border-white/60 border backdrop-blur-3xl w-full px-0 md:px-26 sm:px-4 lg:px-10 mb-7 h-auto overflow-hidden">
        <div className="mx-auto w-full">
          <div className="animate-marquee-right whitespace-nowrap dark:text-white/90 font-mono tracking-wider text-sm sm:text-base lg:text-lg">
            please intership fullstack to me !!
          </div>
        </div>
      </div>
      <div className="space-y-20">
        <div className="space-y-20">
          <div className="space-y-20">
            {/* Page 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 mx-4 md:mx-44 bg-transparent max-h-full ">
              <Box
                className="relative rounded-2xl w-full h-[300px] md:w-[600px] md:h-[600px] overflow-hidden"
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
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                  }}
                />

                {/* Text overlay */}
                <div className="absolute bg-black/10 text-green-100 flex justify-center items-center rounded-xl p-4 top-[10px] right-[10px] md:top-[15px] md:right-[15px] w-24 h-16 md:w-32 md:h-24 border-white/10 border-[1px] backdrop-blur-sm">
                  <div className="flex justify-center text-xs sm:text-base">
                    1 Years <br /> Pengalaman <br /> Coding
                  </div>
                </div>

                {/* Carousel controls */}
                <div className="bg-white">
                  <button
                    onClick={handlePrev}
                    className="absolute right-16 bottom-2 transform bg-black/60 h-8 w-8 rounded-full backdrop-blur-sm border-white/40 border text-green-100 text-sm flex items-center justify-center"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-5 bottom-2 transform bg-black/60 h-8 w-8 rounded-full backdrop-blur-sm  border-white/40 border text-green-100 flex justify-center text-center text-sm items-center"
                  >
                    &gt;
                  </button>{" "}
                </div>
              </Box>

              <div className="flex flex-col justify-center px-4 md:px-16 md:text-left text-center items-center md:items-start text-white sm:mt-4 mt-8">
                <p className="text-sm md:text-sm border-white border px-4 rounded-full xl:mt-0 mt-0 h-7 font-mono flex items-center bg-green-900 sm:mb-1 mb-3">
                  Tentang web{" "}
                </p>
                <h1 className="text-2xl md:text-4xl py-1 mb-5">
                  rohman.com <br /> adalah proyek portofolio fullstack pribadi{" "}
                  <br />{" "}
                </h1>
                <p className="pb-1 md:mt-4 text-sm md:text-base font-mono text-green-100 sm:mb-0 mb-3">
                  Memulai dasar yg baik dan kadang tidak selalu bagus tapi tetap
                  berusaha terbaik walaupun gagal{" "}
                </p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button className="bg-white text-black rounded-full mt-1 md:mt-3  w-[135px] text-sm border border-black h-7 flex items-center justify-center sm:mb-0 mb-2">
                      My portfolio <IoDocument className="text-sm"/>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Example with disabled actions"
                    disabledKeys={["edit", "delete"]}
                    className="bg-black"
                  >
                    <DropdownItem
                      key="text-danger"
                      className="fllex justify-start"
                    >
                      Portofolio:
                      <div className="flex flex-col justify-start">
                        <Button className="bg-white text-black rounded-full mt-1 md:mt-3 w-24 text-sm border border-black h-7 flex items-center justify-center">
                          1.Blog-luno
                        </Button>
                        <Button className="bg-white text-black rounded-full mt-1 md:mt-3 w-36 text-sm border border-black h-7 flex items-center justify-center">
                          2.Company-profile{" "}
                        </Button>{" "}
                      </div>
                    </DropdownItem>
                    <DropdownItem key="edit">
                      Portofolio hasil kerja:
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                    >
                      <div className="text-red-100">belum ada</div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button className="bg-white text-black rounded-full mt-1 md:mt-3 w-40 text-sm border border-black h-7 flex items-center justify-center">
                      My dokumentasi <IoDocument />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Example with disabled actions"
                    disabledKeys={["edit", "delete"]}
                    className="bg-black"
                  >
                    <DropdownItem
                      key="text-danger"
                      className="fllex justify-start"
                    >
                      dokumentasi:
                      <div className="flex flex-col justify-start">
                        <Button className="bg-white text-black rounded-full mt-1 md:mt-3 w-24 text-sm border border-black h-7 flex items-center justify-center">
                          1.frontend
                        </Button>
                        <Button className="bg-white text-black rounded-full mt-1 md:mt-3 w-24 text-sm border border-black h-7 flex items-center justify-center">
                          2.backend
                        </Button>{" "}
                      </div>
                    </DropdownItem>
                    <DropdownItem key="edit" className="w-60">saya serius bahwa saya bisa menjelaskan semua apa yang udah ditulis didokumentasinya</DropdownItem>
                                      </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/* Page 3 */}
            <div className="space-y-20">
              <div className="flex flex-col items-center justify-center text-center bg-green-900 py-40">
                <p className="text-4xl text-white/80 mb-7 md:text-5xl md:w-[700px] font-mono">
                  Saya juga bisa membantu seberapa masalah project sesuai
                  keingian anda dan beragam{" "}
                </p>
                {/* Icon grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mx-4 md:mx-52">
                  {/* Front End */}
                  <motion.div
                    className="bg-black/60 text-black rounded-2xl p-4 flex flex-col items-center  border border-black/20"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaCode size={40} className="text-blue-100/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold text-white">Front End </div>
                      <div className="text-xs mt-4 text-white flex flex-row flex-wrap space-x-2 space-y-2 items-center justify-center">
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 mt-2 h-6">
                          <FaCss3Alt className="text-blue-500" />
                          <span className="text-black">CSS </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <FaHtml5 className="text-orange-500" />
                          <span className="text-black">HTML </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiTailwindcss className="text-teal-500" />
                          <span className="text-black">Tailwind CSS </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <FaReact className="text-blue-400" />
                          <span className="text-black">React </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiRedux className="text-purple-600" />
                          <span className="text-black">Redux </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiNextdotjs className="text-gray-300" />
                          <span className="text-black">Next.js </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiDaisyui className="text-gray-900" />
                          <span className="text-black">dasyUi </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiNextui className="text-gray-900" />
                          <span className="text-black">nextUi </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiShadcnui className="text-gray-900" />
                          <span className="text-black">shadcnUi </span>
                        </div>
                      </div>{" "}
                    </div>
                  </motion.div>

                  {/* Back End */}
                  <motion.div
                    className="bg-green-900/90 text-black rounded-2xl p-4 flex flex-col items-center border border-white/20"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaDatabase size={40} className="text-red-500/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold text-white">Back End </div>
                      <div className="text-xs mt-4 text-white flex flex-row flex-wrap space-x-2 space-y-2 items-center justify-center">
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 mt-2 h-6">
                          <SiNodedotjs className="text-blue-500" />
                          <span className="text-black">node </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiExpress className="text-orange-500" />
                          <span className="text-black">express </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <IoCode className="text-teal-500" />
                          <span className="text-black">robust </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <IoCode className="text-blue-400" />
                          <span className="text-black">oop </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <IoCode className="text-purple-600" />
                          <span className="text-black">
                            controller app router middleware etc{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiMysql className="text-gray-300" />
                          <span className="text-black">mySql </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiMongodb className="text-gray-900" />
                          <span className="text-black">mongo </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiPrisma className="text-gray-900" />
                          <span className="text-black">prismaOrm </span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 border border-black rounded-full bg-green-100/90 h-6">
                          <SiHostinger className="text-gray-900" />
                          <span className="text-black">hosting & vps </span>
                        </div>
                      </div>{" "}
                    </div>
                  </motion.div>

                  {/* UI & UX */}
                  <motion.div
                    className="bg-black/60 text-black rounded-2xl p-4 flex flex-col items-center  border border-black/20"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaPencilRuler size={40} className="text-orange-100/90" />
                    <div className="mt-6 text-center">
                      <div className="font-semibold text-white">Interest </div>
                      <div className="text-sm mt-2 text-white">
                        I want to learn <br /> 1.MongoDB, 2.Svelte, 3.Framer
                        Motion, 4.Sass, 5.mySql, 6.ux ui. <br /> I'm interested
                        in expanding my skills in modern web development and
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
          <div className="flex flex-col items-center w-full min-h-[500px] justify-start px-4 md:px-0 lg:px-0 ">
            <button
              onClick={scrollToSection}
              className="fixed lg:bottom-10 lg:right-28 right-5 bottom-2 bg-green-100/90 text-gray-900/90 p-1 lg:p-1 rounded-full shadow-lg flex items-center justify-center hover:bg-green-400/90 focus:outline-none z-20 backdrop-blur-3xl border-gray-900/90 border-[1px] "
            >
              <ArrowUpIcon className="w-6 h-6" />
            </button>
            {/* Contact us Page 4  */}
            <div className="h-[600px] flex justify-center flex-col items-center">
              <motion.h1
                className="text-center text-sm md:text-[48px] pb-8 w-full text-gray-900/80"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="h-full font-mono text-2xl text-white/90">
                  Hubungi saya jika membutuhkan suatu
                </div>
              </motion.h1>
              <motion.button
                className=" rounded-full flex items-center justify-center h-8 w-32 font-mono text-sm bg-white text-black/90 border border-black/90 "
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 900 }}
              >
                {" "}
                Contact <IoMailOpen className="ml-2 text-sm" />{" "}
              </motion.button>
              <motion.div
                className="text-black/90 text-6xl md:text-[120px] mt-4 md:mt-7 justify-center flex items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="relative text-center ">
                  <h2 className="relative m-0 text-custom font-medium leading-none tracking-custom bg-gradient-to-r from-clr-1 via-clr-2 bg-clip-text text-transparent stroke-[4px] animate-aurora-gradient font-mono ">
                    Contact Me...
                  </h2>

                  {/* Subtext */}
                </div>
              </motion.div>{" "}
            </div>{" "}
          </div>
          {/* Footer page 5 */}
          <div className="w-full flex flex-col md:flex-row justify-between border-t border-white/10 h-auto md:h-10 items-center mt-6 py-4 md:px-8 lg:px-44 text-lg font-mono text-white/90">
            <p className="text-center md:text-left mb-2 md:mb-0">
              ©2024 rohman.dev all rights reserved
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <motion.p
                className="underline text-center md:text-left"
                whileHover={{ scale: 1.05, color: "#ff6347" }}
              >
                Term & Condition
              </motion.p>
              <motion.p
                className="underline text-center md:text-left"
                whileHover={{ scale: 1.05, color: "#ff6347" }}
              >
                Privacy Policy
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
