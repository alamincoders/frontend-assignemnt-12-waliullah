import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://academy-camp.vercel.app/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  return (
    //??jdkjdfd
    <div className="py-5 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-center pt-5 uppercase my-12 border-b-4 border-slate-300 mx-auto pb-3 w-[530px]">
          Our Popular Instructors
        </h2>
      </div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {instructor.slice(0, 6).map((item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item?._id}
            className="card border-2 w-full mx-auto shadow-xl"
          >
            <figure className="px-5 pt-5">
              <img
                src={item?.photo}
                alt="Shoes"
                className="rounded-xl  h-80 w-screen bg-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.email}</p>
              <Link to={'/instructors'} ><button className="btn btn-outline capitalize ">About {item.name}</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
