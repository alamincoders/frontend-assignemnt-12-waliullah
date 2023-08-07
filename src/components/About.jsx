import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
  ];

  const sortedSkills = skills.sort();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" my-2 py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold uppercase text-center pt-5 my-8 border-b-4 border-slate-300 mx-auto pb-3 w-[220px]">About me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 p-5">
            <h2 className="font-semibold text-xl mb-2">Name: MD Waliullah</h2>
            <p className="font-semibold ">I am a student of islamic university. I am trying to learn <span className="text-purple-400">PROGRAMMING </span> from my passion. Now i have completed few technoligies and still now learning. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, accusamus doloremque</p>
            <p className="font-semibold pt-2">I am working in a react.js developer, JS developer, website designer and developer</p>
          </div>
          <div className="w-1/2 px-5">
            <h2 className="text-4xl font-semibold uppercase text-center border-b-2 border-slate-300 mb-4 mx-auto w-[280px]">My Skills</h2>
            <div>
              <ProgressBar className="mb-3" borderRadius="0" baseBgColor="#e7e7e4" labelSize="15px" labelColor="#bdbcbc" labelAlignment="left" height="30px" completed={95} customLabel="HTML" />
              <ProgressBar className="mb-3" borderRadius="0" baseBgColor="#e7e7e4" labelSize="15px" labelColor="#bdbcbc" labelAlignment="left" height="30px" completed={80} customLabel="TAILWIND" />
              <ProgressBar className="mb-3" borderRadius="0" baseBgColor="#e7e7e4" labelSize="15px" labelColor="#bdbcbc" labelAlignment="left" height="30px" completed={75} customLabel="JAVASCRIPT" />
              <ProgressBar className="mb-3" borderRadius="0" baseBgColor="#e7e7e4" labelSize="15px" labelColor="#bdbcbc" labelAlignment="left" height="30px" completed={85} customLabel="RRACT" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
