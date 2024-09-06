import React from "react";

const About = () => {
  return (
    <div className="col-span-12 xl:col-span-5 items-center">
      <div className=" flex flex-col m-20 gap-10 ">
        <h1 className="font-bold text-gray-500 text-[36px]">About Me</h1>
        <p className="pt-2 text-gray-500 text-[22px]">
          I have honed my skills in Java programming, which has become my forte.
          I thoroughly enjoy working with Java because of its versatility,
          scalability, and its ability to power a wide range of applications,
          from enterprise systems to mobile apps and everything in between.
        </p>
        <p className="pt-2 text-gray-500 text-[22px]">
          In addition to my technical expertise, I have a keen eye for design
          and aesthetics. I believe that a well-designed software application
          not only functions flawlessly but also delights users with its visual
          appeal and intuitive interface. I enjoy incorporating my design skills
          into my development work, ensuring that the end product not only meets
          the functional requirements but also looks and feels great.
        </p>
      </div>
    </div>
  );
};

export default About;
