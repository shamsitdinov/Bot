import React from "react";
import { FaRegStar } from "react-icons/fa";

const Main = ({ deletItem, courses, selectCourse, selectedCourse, sum1 }) => {
  return (
    <div>
      <div className="grid bg-[#f6f7f9] py-10 px-10 rounded-md  grid-cols-[1fr,3fr] gap-4 max-md:grid-cols-1 ">
        <div className="bg-white border-gray-300 border-[1px] text-white max-sm:h-[50vh] rounded-md flex gap-5 flex-col p-4">
          <h4 className="text-2xl text-green-500 uppercase"> total {sum1}$</h4>
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
        <div className="grid grid-cols-2  gap-4 max-md:grid-cols-1">
          {courses.map((item, index) => (
            <div key={index} className="flex cursor-pointer bg-white shadow-md shadow-white flex-col gap-4 p-4 rounded-lg border-slate-300 border-[1px] items-center relative min-h-[30vh]">
              <h4 className="text-3xl">{<item.img />}</h4>
              <h3 className="text-3xl">{item.title}</h3>
              <p className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md">{item.level}</p>
              <p className="absolute top-2 right-2 bg-blue-700 text-white p-2 rounded-md">{item.length}</p>
              <div className="flex gap-2">
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>
                <span className="text-orange-400">{<item.icon />}</span>

                {item.ico ? (
                  <span className="text-orange-400">{<item.ico />}</span>
                ) : (
                  <span className="text-orange-400">
                    <FaRegStar />
                  </span>
                )}
              </div>

              <p>$ {item.price}</p>
              <button
                style={{
                  backgroundColor: selectedCourse.some((course) => course.title === item.title) ? "red" : "green",
                }}
                onClick={() => selectCourse(index, item)}
                className="p-2 rounded-md bg-green-700 text-white cursor-pointer w-full"
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
