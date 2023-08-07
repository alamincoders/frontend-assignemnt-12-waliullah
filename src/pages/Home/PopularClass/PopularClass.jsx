import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://academy-camp.vercel.app/approvedClass")
      .then((res) => setClasses(res.data));
  }, []);
  return (
    <div className=' py-5 mx-auto'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold uppercase text-center pt-5 my-8 border-b-4 border-slate-300 mx-auto pb-3 w-[440px]'>Our Popular Classes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {classes.slice(0, 6).map((item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item._id}
            className="card card-compact mx-auto w-full dark:bg-gray-500 shadow-xl"
          >
            <figure className='px-5 pt-5'>
              <img className="w-screen rounded-xl h-80" src={item.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {item?.className}</h2>
              <h2 className="card-title">
                Instructor: {item?.InstructorName}
              </h2>
              <h2 className="card-title">Seats: {item?.seats}</h2>
              <h2 className="card-title">Enrolled: {item?.enrolled}</h2>
              <div className='flex justify-between items-center'>
                <h2 className="card-title">Price: $ {item?.price}</h2>
                <Link className='text-right p-3 border-2 hover:bg-slate-500 hover:text-white rounded-full' to={'/classes'} ><FaArrowRight></FaArrowRight></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;