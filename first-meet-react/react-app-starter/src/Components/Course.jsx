import React from "react";
import Typewriter from "typewriter-effect";
const Course = () => {
  return (
    <div className="md:text-center  font-bold mt-15 text-3xl">
      <h1 className="flex flex-col items-center justify-center md:my-2 md:flex-row ">
        <span className="dark:text-blue-300 md:mr-2 md:dark:text-blue-500">
          {" "}
          Let's start with our popular course{" "}
        </span>
        <Typewriter
          options={{
            strings: ["Javascript", "React", "HTML", "CSS"],
            autoStart: true,
            loop: true,
            delay: 300,
            deleteSpeed: 50,
          }}
        />
      </h1>
    </div>
  );
};

export default Course;
