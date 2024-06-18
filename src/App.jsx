import React from "react";

import HeroSection from "./components/HeroSection";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DoubleSection from "./components/DoubleSection";
import Section from "./components/Section";
import SocialButton from "./components/SocialButton";
import Divider from "./components/Divider";
import img from "./assets/img/man.jpg";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import ProgrammingBar from "./components/ProgrammingBar";
import CertificateView from "./components/CertificateView";
import { DiCss3Full, DiJava, DiJavascript } from "react-icons/di";
import { CertifcateWay } from "./components/CertificateWay";
import { MdLocationPin, MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  return (
    <div
      className="body flex flex-row flex-wrap w-full h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <NavBar scrollPos={scrollPosition} />
      <HeroSection customClass="banner">
        <DoubleSection customClass="hero-section">
          <Section customClass="pt-10 ">
            <div className="title flex flex-col p-20 gap-10 ">
              <h1 className="font-bold text-gray-500 text-[36px]">
                HEY! I'm Gleidson, A Front End Developer
              </h1>
              <p className="pt-10 text-gray-500 ">
                If you're looking for a software developer who is passionate
                about Java and has a knack for creating visually appealing and
                user-friendly applications, I would be thrilled to collaborate
                with you.
              </p>
              <p>
                Let's bring your ideas to life and create software that not only
                performs flawlessly but also leaves a lasting impression on
                users.
              </p>
              <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
                <ul className="flex flex-center justify-center xl:gap-6 gap-2">
                  <SocialButton
                    link="https://www.facebook.com/gleidson.nevesdasilveira"
                    social={<SlSocialFacebook />}
                  />
                  <SocialButton
                    link="https://twitter.com/gleidisonmt"
                    social={<BsTwitterX />}
                  />
                  <SocialButton
                    link="https://github.com/gleidsonmt"
                    social={<SlSocialGithub />}
                  />
                  <SocialButton
                    link="https://www.linkedin.com/in/gleidson-neves-da-silveira-50353a1b2/"
                    social={<SlSocialLinkedin />}
                  />
                  <SocialButton
                    link="https://www.youtube.com/@gleidsonneves5895/about"
                    social={<SlSocialYoutube />}
                  />
                </ul>
                <button className="bg-accent px-4 py-2 rounded-xl text-white max-w-40">
                  Contact Me
                </button>
              </div>
            </div>
          </Section>
          <Divider orientation="hori" customClass=" xl:hidden " />
          <Divider orientation="vertical" customClass="max-xl:hidden  " />
          <Section customClass="">
            <img
              z-index="0"
              className="w-full max-h-[500px]  object-contain p-10 max-md:max-h-[800px] xl:max-h-[700px] rounded-full shado-box "
              src={img}
              alt="nerd IA photo"
            />
          </Section>
        </DoubleSection>
        <Divider orientation="hori" customClass="h-full" />
      </HeroSection>

      <HeroSection>
        <DoubleSection customClass="h-full">
          <Section>
            <div className="title flex flex-col p-20 gap-10 ">
              <h1 className="font-bold text-gray-500 text-[36px]">About Me</h1>
              <p className="pt-10 text-gray-500 ">
                I have honed my skills in Java programming, which has become my
                forte. I thoroughly enjoy working with Java because of its
                versatility, scalability, and its ability to power a wide range
                of applications, from enterprise systems to mobile apps and
                everything in between.
              </p>
              <p className="pt-10 text-gray-500 ">
                In addition to my technical expertise, I have a keen eye for
                design and aesthetics. I believe that a well-designed software
                application not only functions flawlessly but also delights
                users with its visual appeal and intuitive interface. I enjoy
                incorporating my design skills into my development work,
                ensuring that the end product not only meets the functional
                requirements but also looks and feels great.
              </p>
            </div>
          </Section>
          <Divider orientation="vertical" customClass="max-xl:hidden" />
          <Divider orientation="hori" customClass="xl:hidden" />
          <Section customClass="h-full  flex-col">
            <div className="flex w-full  flex-col px-20">
              <ProgrammingBar language="Java +20" percent={96} />
              <ProgrammingBar language="Javascript (Ecma +6)" percent={72} />
              <ProgrammingBar language="React (Latest)" percent={65} />
            </div>
          </Section>
        </DoubleSection>
        <Divider orientation="hori"></Divider>
      </HeroSection>
      <div className="w-full my-20 flex justify-center items-center flex-wrap  ">
        <h2 className="flex w-full justify-center items-center gap-2 text-gray-500 font-semibold text-4xl flex-col my-10 lg:my-5 lg:gap-0">
          Certificates
        </h2>
        <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-stretch">
          <CertificateView language="Java" icon={<DiJava />}>
            <div className="flex flex-col justify-center text-sm text-gray-500 gap-4">
              <h1 className="text-gray-500 font-bold">Java Basic</h1>
              <CertifcateWay
                link="https://github.com/gleidsonmt/courses/blob/main/certificado_java_basic.pdf"
                text="Hacker Rank"
                type="Online Course"
              />
              <CertifcateWay
                link="https://github.com/gleidsonmt/courses/blob/main/certificado_skill_up_java.pdf"
                text="SkillUp Rank"
                type="Online Course"
              />
            </div>
          </CertificateView>
          <Divider orientation="vertical"></Divider>
          <CertificateView language="JavaScript" icon={<DiJavascript />}>
            <div className="flex flex-col justify-center text-sm text-gray-500 gap-4">
              <h1 className="text-gray-500 font-bold">Javascript Basic</h1>
              <CertifcateWay
                link="https://github.com/gleidsonmt/courses/blob/main/certificado_javascript_basic.pdf"
                text="freeCodeCamp"
                type="Oline Course"
              />
            </div>
          </CertificateView>
          <Divider orientation="vertical"></Divider>
          <CertificateView language="Css" icon={<DiCss3Full />}>
            <div className="flex flex-col justify-center text-sm text-gray-500 gap-4">
              <h1 className="text-gray-500 font-bold">Responsive Web Design</h1>
              <CertifcateWay
                link="https://github.com/gleidsonmt/courses/blob/main/certificado_responsive_web_design.png"
                text="freeCodeCamp"
                type="Online Course"
              />
            </div>
          </CertificateView>
          <Divider orientation="hori" customClass="hidden"></Divider>
        </div>
      </div>
      <footer className="bg-gray-50 w-full flex flex-col justify-around items-center p-10 gap-10 text-gray-500 md:flex-row">
        <h1 className="text-2xl font-bold">Contact</h1>
        <div className=" flex flex-col items-start gap-4 max-w-60 w-full">
          <div className="flex flex-col items-start">
            <h5 className="font-bold">Phone</h5>
            <a
              href="https://contate.me/gleidsonmt"
              className="flex flex-row items-center gap-2"
            >
              <FaWhatsapp />
              Whatsapp
            </a>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="font-bold">Email</h5>
            <a
              href="mailto:gleidsonmt@outlook.com"
              className="flex flex-row items-center gap-2"
            >
              <MdMailOutline />
              gleidsonmt@outlook.com
            </a>
            <a
              href="mailto:gleidisonmt@gmail.com"
              className="flex flex-row items-center gap-2"
            >
              <MdMailOutline />
              gleidisonmt@gmail.com
            </a>
          </div>
        </div>
        <div className=" max-w-60 w-full flex-col flex items-start">
          <h5 className="font-bold">Location</h5>
          <div className="flex flex-col ">
            <h5 className="flex flex-row items-center gap-2">
              <MdLocationPin />
              Brazil
            </h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
