import React, { useEffect } from "react";
import { useState } from "react";
import { onlineCourses } from "./data";

const App = () => {
  const [courses, setCourses] = useState(onlineCourses);
  const [selectedCourse, setSelectedCourse] = useState([]);

  let newArr = [...selectedCourse];
  const selectCourse = (num) => {
    const newCourse = courses.find((item, index) => index === num);

    if (!selectedCourse.some((courses) => courses.title === newCourse.title)) {
      newArr.push(newCourse);
      setSelectedCourse(newArr);
    }
  };

  let sum1 = 0;
  const price = (sum) => {
    let arr = [];
    selectedCourse.map((item, index) => {
      sum = item.price;
      arr.push(sum);
    });
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
    }
  };
  price();

  const deletItem = (index) => {
    const update = [...selectedCourse];
    update.splice(index, 1);
    setSelectedCourse(update);
  };

  return (
    <>
      <div className="p-2 flex gap-10 flex-col bg-[#041C32]">
        <h1 className="text-center text-white text-4xl">STARTUM ONLINE COURSES</h1>
        <div className="grid grid-cols-[1fr,3fr] gap-4 max-md:grid-cols-1 ">
          <div className="bg-gray-700 text-white flex gap-5 flex-col p-4">
            <h4 className="text-2xl text-green-500 uppercase"> total  {sum1}$</h4>
            {selectedCourse
              ? selectedCourse.map((item, index) => (
                  <div key={index} className="flex justify-between shadow-inner shadow-white rounded-md pl-2 bg-slate-800 items-center ">
                    <h4>{item.title}</h4>
                    <p>{item.price}$</p>
                    <button onClick={() => deletItem(index)} className=" uppercase rounded-md bg-red-500 py-2 px-5">
                      delet
                    </button>
                  </div>
                ))
              : ""}
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {courses.map((item, index) => (
              <div key={index} className="flex cursor-pointer shadow-md shadow-white flex-col gap-4 p-4 rounded-lg bg-slate-800 text-white items-center relative min-h-[30vh]">
                <h4 className="text-3xl">{<item.img />}</h4>
                <h3 className="text-3xl">
                  <b>Course:</b> {item.title}
                </h3>
                <p className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md">{item.level}</p>
                <p className="absolute top-2 right-2 bg-blue-700 text-white p-2 rounded-md">{item.length}</p>
                <p>
                  <b>Price:</b> $ {item.price}
                </p>
                <button onClick={() => selectCourse(index, item)} className="p-2 rounded-md bg-green-700 text-white cursor-pointer w-full">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
