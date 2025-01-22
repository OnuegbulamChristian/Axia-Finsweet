import React from "react";
import { CiClock2 } from "react-icons/ci";
import HeroImage from "../../assets/hero image.jpeg";

const Hero = () => {
  return (
    <div className="h-max md:h-[150vh] bg-red-500 w-full">
      <div className="h-max md:h-[150vh] w-[95%] mx-auto flex justify-center items-start gap-[30px] md:py-[5vh] bg-blue-500">
        <div className="w-full md:w-[50%] h-max md:h-[140vh] flex flex-col justify-center items-start bg-yellow-500 px-[30px] pt-[50px] md:py-[0px] relative">
          <h1 className="text-4xl w-[80%] md:w-[100%] md:text-[90px] leading-[45px] md:leading-[130px] font-medium">
            Get your vehicle service done online at one place
          </h1>
          <button className="w-[170px] h-[50px] bg-[#ff4500] rounded-xl text-xl text-center text-white sm::mt-[40px] sm:mb-[20px] absolute sm:static">
            Book a service
          </button>
          <div className="flex justify-center items-center gap-[6px]">
            <CiClock2 className="text-xl font-bold hidden sm-block" />
            <ul>
              <small className="text-xs md:text-base">We are open</small>
              <p className="w-[35%] sm:w-[100%] text-sm md:text-base">
                Monday to Friday 9:00 AM to 10:00 AM
              </p>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block w-[50%] h-max md:h-[140vh] bg-green-500">
          <div>
            <img src={HeroImage} alt="" />
          </div>

          <div className="">
            <button>
              <h3>
                24 <span>hr</span>
              </h3>
              <p>Quick Services</p>
            </button>
          </div>

          <div className="">
            <button>
              <h3>
                24 <span>hr</span>
              </h3>
              <p>Quick Services</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
