import React, { useEffect } from "react";
import { useState } from "react";
import { onlineCourses } from "./data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => {
  const [courses, setCourses] = useState(onlineCourses);
  const [selectedCourse, setSelectedCourse] = useState([]);
  let newArr = [...selectedCourse];

  const telegram = window.Telegram.WebApp;

  useEffect(() => {});

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

  const selectCourse = (num) => {
    const newCourse = courses.find((item, index) => index === num);
    if (!selectedCourse.some((courses) => courses.title === newCourse.title)) {
      newArr.push(newCourse);
      setSelectedCourse(newArr);
    }
    console.log(courses);
  };
  price();

  const deletItem = (index) => {
    const update = [...selectedCourse];
    update.splice(index, 1);
    setSelectedCourse(update);
  };

  const buyItem = () => {
    telegram.MainButton.text = "Buy Course";
    telegram.MainButton.show();
  };

  return (
    <>
      <div className="p-2 flex gap-2 flex-col">
        <Navbar />
        <Header />
        <Main deletItem={deletItem} selectCourse={selectCourse} buyItem={buyItem} courses={courses} selectedCourse={selectedCourse} sum1={sum1} />
      </div>
    </>
  );
};

export default App;
