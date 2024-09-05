import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import Section from "../components/Section";

import img from "../assets/img/man.jpg";
import ProgrammingBar from "../components/ProgrammingBar";
import { CertifcateWay } from "../components/CertificateWay";
import CertificateView from "../components/CertificateView";
import Introduction from "../assets/fonts/Introduction";
import Wallpaper from "../components/Wallpaper";
import Divider from "../components/Divider";
import {
  DiCss3Full,
  DiJava,
  DiJavascript,
  DiJavascript1,
} from "react-icons/di";

const Home = () => {
  return (
    <>
      {/* mt-20 */}
      <div className="grid w-full m-0 grid-cols-12 mt-24 hero-section place-items-center sm:justify-center :mt-14">
        <Introduction />
        <Divider
          orientation="vertical"
          customClass="xl:col-span-2 h-full lg:order-2"
        />

        <Divider
          orientation="hori"
          customClass="col-span-12 sm:col-span-12 xl:hidden order-1  "
        />
        <Wallpaper />
      </div>
      {/* <Divider orientation="hori" customClass="col-span-12 " />  */}
      {/* 
      <div className="grid grid-cols-12">
        <Section customClass="col-span-12 lg:col-span-5 items-center">
          <div className="title flex flex-col p-20 gap-10 ">
            <h1 className="font-bold text-gray-500 text-[36px]">About Me</h1>
            <p className="pt-10 text-gray-500 text-[22px]">
              I have honed my skills in Java programming, which has become my
              forte. I thoroughly enjoy working with Java because of its
              versatility, scalability, and its ability to power a wide range of
              applications, from enterprise systems to mobile apps and
              everything in between.
            </p>
            <p className="pt-10 text-gray-500 text-[22px]">
              In addition to my technical expertise, I have a keen eye for
              design and aesthetics. I believe that a well-designed software
              application not only functions flawlessly but also delights users
              with its visual appeal and intuitive interface. I enjoy
              incorporating my design skills into my development work, ensuring
              that the end product not only meets the functional requirements
              but also looks and feels great.
            </p>
          </div>
        </Section>
        <Divider orientation="hori" customClass="col-span-12 lg:hidden " />
        <Divider orientation="vertical" customClass="col-span-12 h-full" />
        <Section customClass=" w-full col-span-12 lg:col-span-5 ">
          <div className="flex w-full flex-col items-center">
            <ProgrammingBar language="Java +20" percent={96} />
            <ProgrammingBar language="Javascript (Ecma +6)" percent={72} />
            <ProgrammingBar language="React (Latest)" percent={65} />
          </div>
        </Section>
        <Divider orientation="hori" customClass="col-span-12 " />
      </div> */}

      {/* <div className="w-full my-20 flex justify-center items-center flex-wrap  ">
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
          <CertificateView language="JavaScript" icon={<DiJavascript1 />}>
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
      </div>  */}
    </>
  );
};

export default Home;
