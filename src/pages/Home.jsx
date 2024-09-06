import React from "react";
import HeroSection from "../components/HeroSection";
import DoubleSection from "../components/DoubleSection";
import Section from "../components/Section";

import img from "../assets/img/man.jpg";
import ProgrammingBar from "../components/ProgrammingBar";
import { CertifcateWay } from "../components/CertificateWay";
import CertificateView from "../components/CertificateView";
import Introduction from "../components/Introduction";
import Wallpaper from "../components/Wallpaper";
import Divider from "../components/Divider";
import {
  DiCss3Full,
  DiJava,
  DiJavascript,
  DiJavascript1,
} from "react-icons/di";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      {/* mt-20 */}
      <Section customClass="grid w-full m-0 grid-cols-12 mt-24 hero-section place-items-center sm:justify-center :mt-14">
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
      </Section>
      <Divider orientation="hori" customClass="col-span-12 " />

      <Section customClass="grid grid-cols-12 place-items-center">
        <About />
        <Divider orientation="hori" customClass="col-span-12 xl:hidden " />

        <Divider
          orientation="vertical"
          customClass="col-span-12 opacity-0 xl:opacity-100 xl:h-full xl:col-span-2"
        />
        <Skills />
        <Divider orientation="hori" customClass="col-span-12 " />
      </Section>

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