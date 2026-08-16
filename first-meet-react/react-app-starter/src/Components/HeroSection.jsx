import React from "react";
import coding from "../assets/coding.png";
import coding2 from "../assets/coding-2.jpeg";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between mt-5 md:flex-row px-4 md:px-8">
      {/* ฝั่งข้อความ */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center my-6">
        <div className="font-bold text-4xl text-center">
          Welcome to our website
        </div>
        <div className="font-bold text-3xl text-center mt-2">
          Learn all the basic coding
        </div>
        <button className="border-2 rounded-md p-2 mx-auto my-5 hover:scale-110 transition-all w-[80%] max-w-xs">
          Get Start!
        </button>
      </div>

      {/* ฝั่งรูปภาพ Desktop */}
      <img
        src={coding}
        alt="coding-picture"
        className="rounded-xl hidden md:block w-full md:w-1/2 object-cover"
      />

      {/* ฝั่งรูปภาพ Mobile */}
      <img
        src={coding2}
        alt="coding-picture"
        className="w-full rounded-xl md:hidden"
      />
    </div>
  );
};

export default HeroSection;
