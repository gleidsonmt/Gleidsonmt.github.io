import HeroSection from "./components/HeroSection";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DoubleSection from "./components/DoubleSection";
import Section from "./components/Section";
import SocialButton from "./components/SocialButton";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

function App() {
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
            {" "}
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
          </Section>{" "}
        </DoubleSection>
      </HeroSection>
    </div>
  );
}

export default App;
