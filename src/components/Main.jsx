import React from "react";
import { FaRegStar } from "react-icons/fa";

const Main = ({ deletItem, courses, selectCourse, selectedCourse, sum1 }) => {
  return (
    <div className="w-[100%] mx-auto">
      <div className="grid rounded-md max-sm:w-full grid-cols-[1fr,3fr] gap-1 max-md:grid-cols-1 ">
        <div className="bg-[#013a52] border-gray-300 border-[1px] max-sm:overflow-auto text-white max-sm:h-[30vh] max-sm:w-full rounded-md flex gap-5 flex-col p-4">
          <h4 className="text-xl py-1 text-center text-green-500 uppercase max-sm:sticky rounded-full bg-[#0B192C] max-sm:-top-5 "> total {sum1}$</h4>
          {selectedCourse
            ? selectedCourse.map((item, index) => (
                <div key={index} className="flex w-full   justify-between   shadow-white rounded-full pl-2 bg-[#0B192C] items-center ">
                  <h4>{item.title}</h4>
                  <p>{item.price}$</p>
                  <button onClick={() => deletItem(index)} className=" uppercase rounded-full bg-red-900 py-2 w-24 ">
                    delet
                  </button>
                </div>
              ))
            : ""}
        </div>
        <div className="grid grid-cols-2  gap-1 max-md:grid-cols-1">
          {courses.map((item, index) => (
            <div key={index} className="flex cursor-pointer bg-[#013a52] text-white  flex-col max-sm:gap-2 gap-4 p-4 rounded-lg border-slate-300 border-[1px] items-center relative min-h-[30vh] max-sm:h-[20vh]">
              <h4 className="text-3xl">{<item.img />}</h4>
              <h3 className="text-3xl max-sm:text-xl">{item.title}</h3>
              <p className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md">{item.level}</p>
              <p className="absolute top-2 right-2 bg-blue-700 text-white p-2 rounded-md">{item.length}</p>
              <div className="flex gap-2">
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>

                {item.ico ? <span className="text-orange-400">{<item.ico />}</span> : <span className="text-orange-400">{<item.icon />}</span>}
              </div>
              <p>$ {item.price}</p>
              <button
                style={{
                  backgroundColor: selectedCourse.some((course) => course.title === item.title) ? "red" : "green",
                }}
                onClick={() => selectCourse(index, item)}
                className="p-2 rounded-md bg-green-700 text-white cursor-pointer w-[80%]  "
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
