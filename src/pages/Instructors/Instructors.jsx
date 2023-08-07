import axios from "axios";
import React, { useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";

const Instructors = () => {
  useTitle('Instructors')
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://academy-camp.vercel.app/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  console.log(instructor);
  return (
    <div className=" py-5">
      <h1 className="text-4xl font-semibold text-center pt-5 uppercase my-12 border-b-4 border-slate-300 mx-auto pb-3 w-[550px]">
        Our Dadicated Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {instructor.map((item) => (
          <div key={item?._id} className="card w-96 border-2 border-gray-200 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={item?.photo}
                alt="Shoes"
                className="rounded-xl h-80 w-screen bg-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
