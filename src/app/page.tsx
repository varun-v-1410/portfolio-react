"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaTools, FaDatabase, FaPuzzlePiece, FaRandom, FaGamepad, FaEdge, FaCode } from "react-icons/fa";
import { IoSchoolOutline, IoCodeWorking } from "react-icons/io5";
import { SiBootstrap, SiCplusplus, SiExpress, SiFramework, SiGit, SiGithub, SiGithubcopilot, SiJavascript, SiMongodb, SiNextdotjs, SiNotion, SiOpenai, SiPostman, SiPython, SiReact, SiScikitlearn, SiSpringboot, SiSurrealdb, SiTensorflow, SiVite } from "react-icons/si";
import SkillSet from "./_components/SkillSet";
import { FaDumbbell, FaGolang, FaJava, FaPersonSwimming } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { GiShuttlecock, GiSkills } from "react-icons/gi";
import { RiSpeakLine, RiTeamFill } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useGSAP(() => {
    gsap.timeline()
      .to("#bdy", { opacity: 1, duration: 1 })
      .from("#description", { y: -100, opacity: 0, duration: 1})
      .from("#profilepic", { x: 100, opacity: 0, duration: 2 }, "<")
      .from("#github",{opacity:0, scale:1.5, duration:1, ease:"back.out(2)",scrollTrigger:{
        trigger:"#github",
        start:"top 80%",
        end:"bottom 60%",
        scrub:screen.width>768 ? false : true,
        toggleActions:"play none none none"
      }})
      .from("#linkedin",{opacity:0, scale:1.5, duration:1, ease:"back.out(2)",scrollTrigger:{
        trigger:"#linkedin",
        start:"top 80%",
        end:"bottom 60%",
        scrub:screen.width>768 ? false : true,
        toggleActions:"play none none none"
      }},"+=0.2")
      .from("#instagram",{opacity:0, scale:1.5, duration:1, ease:"back.out(2)",scrollTrigger:{
        trigger:"#instagram",
        start:"top 80%",
        end:"bottom 60%",
        scrub:screen.width>768 ? false : true,
        toggleActions:"play none none none"
      }},"+=0.2");
  }, []);

  return(
    <div className="h-fit w-full pb-10 md:pb-0" id="bdy">
      <div className="w-full h-auto">
        <div className="p-5 pt-10 grid gap-2 md:grid-cols-2 md:gap-20 h-full w-full md:p-2 md:pt-15">
          <div className="flex items-center justify-center md:justify-end order-last md:order-first" id="description">
            <div className="text-start md:justify-end md:content-end">
              <div className="text-2xl h-full">
                Hiii 👋.....,
                <div className="pl-0 md:pl-5 pt-10">
                  <span className="text-3xl font-bold">I am Varun V</span>
                  <p className="text-xl w-96 pt-5 text-justify font-bold">
                    I am an aspiring student currently pursuing my B.Tech in the branch of Computer Science And Engineering (CSE) at Jain (Deemed-To-Be University). I possess a strong foundation in vast programming languages, machine learning and deep learning. I am currently seeking an opportunity to apply my skills in a dynamic environment and contribute to innovative projects.
                  </p>
                </div>
              </div>
              <div className="relative top-10 md:static md:top-0 w-auto">
                <img src="./gift-box.svg" alt="giftbox" className="w-80 md:absolute md:bottom-0 md:left-0"/>
                <a href="https://github.com/varun-v-1410" target="_blank" className="cursor-pointer text-black absolute bottom-35 left-52" id="github">
                  <FaGithub className="w-6 h-6 text-[#2c2d68] hover:text-[#545353]" />
                </a>
                <a href="https://www.linkedin.com/in/varun-v-823839247/" target="_blank" className="cursor-pointer text-black absolute bottom-20 left-50" id="linkedin">
                  <FaLinkedin className="w-6 h-6 text-[#2c2d68] hover:text-[#545353]" />
                </a>
                <a href="https://www.instagram.com/varun.v.gowda/" target="_blank" className="cursor-pointer text-black absolute bottom-30 left-65" id="instagram">
                  <FaInstagram className="w-6 h-6 text-[#2c2d68] hover:text-[#545353]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start" id="profilepic">
            <div className="w-[60%] max-h-full shadow-2xl shadow-[#545353] rounded-4xl">
              <img src="/profile-pic.webp" alt="Profile Picture" className="w-full rounded-4xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto mt-20 md:h-screen md:mt-0">
        <div className="grid gap-5 md:gap-20 md:grid-cols-2 h-full w-full">
          <div className="flex items-center justify-center md:justify-start text-2xl">
            <div className="flex flex-col gap-10">
              <span className="text-center">Class 10<sup>th</sup>,<br/><a href="https://maps.app.goo.gl/8Hrpr8d47VrZ8q6L6" target="_blank" className="font-bold">Sri Bhuvanendra Residential School</a> - 2019</span>
              <span className="text-center">Class 12<sup>th</sup>,<br/><a href="https://maps.app.goo.gl/t6LbAyrZcB6FFctY6" target="_blank" className="font-bold">Sadhana PU College</a> - 2022</span>
              <span className="text-center">B.Tech in Computer Science And Engineering (CSE),<br/><a href="https://set.jainuniversity.ac.in/" target="_blank" className="font-bold">Jain (Deemed-To-Be University)</a> - 2026</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end order-first">
            <div className="w-[60%] md:h-[60%] shadow-2xl shadow-[#545353] border-2 border-[#2c2d68] rounded-4xl items-center justify-center flex flex-col gap-5 text-center text-3xl font-bold p-10 md:p-0">
              <span className="text-9xl"><IoSchoolOutline /></span>
              <span>My Education</span>
            </div>
          </div>
        </div>
      </div>
      <SkillSet title="Programming Skill-Set" icon={<IoCodeWorking/>} heading={[{level:"Beginner",lang:[{title:"C++",icon:<SiCplusplus/>},{title:"GoLang",icon:<FaGolang/>}]},
      {level:"Intermediate",lang:[{title:"Java",icon:<FaJava/>},{title:"Python",icon:<SiPython/>},{title:"JavaScript",icon:<SiJavascript/>}]},
      {level:"Advanced",lang:[{title:"React",icon:<SiReact/>},{title:"React Native",icon:<SiReact/>}]}]} last/>
      <SkillSet title="Frameworks" icon={<SiFramework/>} languages={[{title:"Express.js",icon:<SiExpress/>},{title:"Bootstrap",icon:<SiBootstrap/>},{title:"Tensorflow",icon:<SiTensorflow/>},{title:"Scikit-Learn",icon:<SiScikitlearn/>},
      {title:"Next.js",icon:<SiNextdotjs/>},{title:"Vite",icon:<SiVite/>},{title:"Spring Boot",icon:<SiSpringboot/>}]}/>
      <SkillSet title="Tools" icon={<FaTools/>} languages={[{title:"Notion",icon:<SiNotion/>},{title:"Git",icon:<SiGit/>},{title:"Github",icon:<SiGithub/>},{title:"Github Copilot",icon:<SiGithubcopilot/>},
      {title:"ChatGPT",icon:<SiOpenai/>},{title:"Postman",icon:<SiPostman/>}]} last/>
      <SkillSet title="Database" icon={<FaDatabase/>} languages={[{title:"MySQL",icon:<TbBrandMysql/>},{title:"MongoDB",icon:<SiMongodb/>},{title:"SurrealDB",icon:<SiSurrealdb/>}]}/>
      <SkillSet title="Soft Skills" icon={<GiSkills/>} languages={[{title:"Teamwork",icon:<RiTeamFill/>},{title:"Problem Solving",icon:<FaPuzzlePiece/>},{title:"Adaptability",icon:<FaRandom/>}]} last/>
      <SkillSet title="Languages" icon={<RiSpeakLine/>} languages={[{title:"Kannada",icon:<span className="text-5xl font-bold">ಅ</span>},{title:"English",icon:<span className="text-5xl font-bold">A</span>},{title:"Hindi",icon:<span className="text-5xl font-bold">अ</span>}]}/>
      <SkillSet title="Hobbies & Interests" icon={<FaGamepad/>} languages={[{title:"Badmitton",icon:<GiShuttlecock/>},{title:"Swimming",icon:<FaPersonSwimming/>},{title:"Workout",icon:<FaDumbbell/>},{title:"Browsing Web",icon:<FaEdge/>},{title:"Programming",icon:<FaCode/>}]} last/>
    </div>

  );
}