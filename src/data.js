import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaReacteurope } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export const onlineCourses = [
    { title: 'JS', length: '3 months', level: 'Intermediate', price: 20, img: FaJs, icon: FaStar , ico: FaStarHalfAlt },
    { title: 'React JS', length: '4 months', level: 'Intermediate', price: 35, img: FaReact, icon: FaStar, },
    { title: 'Vue JS', length: '4 months', level: 'Beginner', price: 30, img: FaVuejs, icon: FaStar,  ico: FaStarHalfAlt },
    { title: 'Angular', length: '3 months', level: 'Advanced', price: 33, img: FaAngular, icon: FaStar,  ico: FaStarHalfAlt },
    { title: 'Node JS', length: '2 months', level: 'Intermediate', price: 25, img: FaNodeJs, icon: FaStar, ico: FaStarHalfAlt },
    { title: 'Telegram Bot', length: '1.5 months', level: 'Beginner', price: 15, img: FaTelegramPlane, icon: FaStar,  ico: FaStarHalfAlt },
    { title: 'React Native', length: '4 months', level: 'Advanced', price: 40, img: FaReacteurope, icon: FaStar,  ico: FaStarHalfAlt },
    { title: 'Python', length: '3 months', level: 'Intermediate', price: 27, img: FaPython, icon: FaStar, ico: FaStarHalfAlt },
    { title: 'TypeScript', length: '1 month', level: 'Beginner', price: 15, img: SiTypescript, icon: FaStar,  }
]