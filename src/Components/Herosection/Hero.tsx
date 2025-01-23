import React from "react";
import { CiClock2 } from "react-icons/ci";
import HeroImage from "../../assets/Header-Image.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="h-max md:h-[160vh] w-full">
      <div className="h-max md:h-[150vh] w-[95%] mx-auto flex justify-center items-start gap-[30px] md:py-[5vh]">
        <div className="w-full sm:w-[50%] h-max md:h-[150vh] flex flex-col justify-end items-start px-[30px] pt-[50px] md:pt-[0px] relative hero-content-div bg-yellow-500">
          <h1 className="text-4xl w-[80%] sm:w-[100%] md:text-[60px] lg:text-[90px] leading-[45px] md:leading-[90px] lg:leading-[120px] font-medium text-white sm:text-black">
            Get your vehicle service done online at one place
          </h1>
          <button className="w-[170px] h-[50px] bg-[#ff4500] rounded-[10px] text-xl text-center text-white sm:mt-[40px] sm:mb-[20px] absolute sm:static right-0 bottom-[50px]">
            Book a service
          </button>
          <div className="flex justify-center items-center gap-[6px]">
            <CiClock2 className="text-xl font-bold hidden sm:block" />
            <ul className="text-white sm:text-black">
              <small className="text-xs md:text-base">We are open</small>
              <p className="w-[35%] sm:w-[100%] text-sm md:text-base mb-[75px] sm:mb-[0px]">
                Monday to Friday 9:00 AM to 10:00 AM
              </p>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block w-[50%] h-max md:h-[140vh]">
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
