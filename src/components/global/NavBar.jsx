import { useEffect, useRef, useState } from "react";

import LinkTop from "../global/LinkTop";
import logo from "../../assets/img/logo_128.png";
import { HiFire } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ scrollPos, global }) => {
  const [lang, setLang] = useState("");

  function translate() {
    //     var langs = { pt: "Português", en: "English" };
    //     let langCode = navigator.language;

    setLang(navigator.language);

    // console.log(data.pt);
    // console.log(document.getElementById("teste"));
    //   .then((data) => setLang(data));

    // console.log(document.querySelectorAll(".tkey"));
  }

  const [ariaExpanded, setAriaExpanded] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("load", translate);
    return () => {
      window.removeEventListener("load", translate);
    };
  });

  // const location = useLocation();
  // const lastHash = useRef("footer");

  // useEffect(() => {
  //   // lastHash = "#footer";
  //   console.log(location.hash);
  //   console.log(lastHash);
  //   if (location.hash.length > 0) {
  //     lastHash.current = location.hash.slice(1);
  //   }
  //   // if (location.hash) {
  //   //   lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
  //   // }

  function goFooter() {
    setTimeout(() => {
      document
        .getElementById("footer")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      // lastHash.current = "";
    }, 100);
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width >= 1024 && ariaExpanded) {
        setAriaExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleExpanded() {
    setAriaExpanded(!ariaExpanded);
  }

  const links = (
    <div>
      <ul
        className={`flex flex-col gap-2
            font-medium border-2  rounded-lg bg-gray-50 info-links  lg:bg-white lg:border-0 laptop:py-0 py-4 laptop:flex-row laptop:gap-10 mx-24 laptop:translate-x-[-66px] instagram-headline`}
      >
        {/* <LinkTop>Work</LinkTop> */}
        {/* <LinkTop link={lastHash} > */}
        {/* <p>{lang == "pt-BR" ? "Contato" : "Contact"}</p> */}
        {/* </LinkTop> */}
        <LinkTop link="#footer"> Contact </LinkTop>
        <LinkTop link="https://gleidisonmt.hackerresume.io/6d4ecedf-6e8c-4156-936a-ad82f0225d16">
          Resume
        </LinkTop>
        <LinkTop link="/blog">Blog</LinkTop>
        {/* <LinkTop>Book</LinkTop> */}
      </ul>
    </div>
  );

  return (
    <nav
      className={`nav-bar ${
        scrollPos > 10 ? "fixed shadow-sm bg-white" : ""
      }  h-50 sm:h-22 fixed top-0 start-0  z-20   right-4`}
    >
      <div className="flex items-center mx-20 p-2 z-20 h-auto  md:justify-between tablet:justify-between  justify-center md:flex-row flex-col">
        <a href="/" className="flex items-center space-x-3 ">
          <img className="h-8" src={logo} alt="logo" />
          <span className="text-xl text-gray-500 whitespace-nowrap instagram-headline">
            Gleidson Neves da Silveira
          </span>
        </a>

        <div className="flex md:order-2 gap-4">
          <button
            className="text-white text-md bg-accent focus:outline-none hover:bg-white hover:text-accent hover:ring-accent hover:ring-2 
          active:ring-2 active:ring-white border-0 active:bg-accent active:text-white rounded-2xl font-bold px-2 py-2 text-center flex flex-wrap gap-1 items-center justify-center "
          >
            Hire Me!
            <HiFire className="text-2xl flex-grow" />
          </button>
          <button
            type="button"
            data-collapse-toggle="navbar-sticky"
            className="p-2 w-10 h-10 text-gray-500 rounded-lg  laptop:hidden"
            onClick={handleExpanded}
            aria-controls="navbar-sticky"
            aria-expanded={ariaExpanded}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {width > 1024 && links}
      </div>
      {ariaExpanded && width <= 1024 && links}
    </nav>
  );
};

export default NavBar;
