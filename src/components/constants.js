import { FaFlask, FaLaravel, FaCalculator, FaMicroscope, FaLaptopCode, FaBuilding, FaChartBar, FaLanguage, FaAtom, FaArchway} from 'react-icons/fa';
import { BiMath } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";
import { MdEngineering, MdOutlineComputer} from "react-icons/md";

export const subjects = [
  {
    code: "COMP101",
    name: "Introduction to Computer Science",
    credits: 3,
    lecturer: "Prof. Petrov",
    department: "Computer Science",
    icon: <FaLaptopCode />,
    color: "#0071C5"
  },
  {
    code: "MATH201",
    name: "Advanced Calculus",
    credits: 4,
    lecturer: "Dr. Ivanov",
    department: "Mathematics",
    icon: <BiMath />,
    color: "#A7C957"
  },
  {
    code: "ELEC301",
    name: "Electronic Circuits",
    credits: 4,
    lecturer: "Prof. Kovalenko",
    department: "Electrical Engineering",
    icon: <FaAtom />,
    color: "#00A0B0"
  },
  {
    code: "MECH201",
    name: "Mechanics of Materials",
    credits: 4,
    lecturer: "Dr. Shevchenko",
    department: "Mechanical Engineering",
    icon: <FaMicroscope />,
    color: "#F98404"
  },
  {
    code: "ARCH101",
    name: "Architectural Design",
    credits: 3,
    lecturer: "Prof. Ivanova",
    department: "Architecture",
    icon: <FaArchway />,
    color: "#5E412F"
  },
  {
    code: "CHEM201",
    name: "Organic Chemistry",
    credits: 4,
    lecturer: "Dr. Kozlov",
    department: "Chemistry",
    icon: <FaFlask />,
    color: "#F8961E"
  },
  {
    code: "PHYS101",
    name: "Physics I",
    credits: 4,
    lecturer: "Prof. Morozov",
    department: "Physics",
    icon: <FaMicroscope />,
    color: "#4CB944"
  },
  {
    code: "CE101",
    name: "Civil Engineering Fundamentals",
    credits: 3,
    lecturer: "Dr. Chernov",
    department: "Civil Engineering",
    icon: <MdEngineering />,
    color: "#8C6954"
  },
  {
    code: "ENG301",
    name: "Advanced English for Engineers",
    credits: 3,
    lecturer: "Prof. Voloshyna",
    department: "English Studies",
    icon: <FaLanguage />,
    color: "#6D4E41"
  },
  {
    code: "MECH101",
    name: "Introduction to Mechanical Engineering",
    credits: 3,
    lecturer: "Dr. Popov",
    department: "Mechanical Engineering",
    icon: <FaLaravel />,
    color: "#D13F32"
  },
  {
    code: "CHEME201",
    name: "Chemical Engineering Principles",
    credits: 4,
    lecturer: "Dr. Petrova",
    department: "Chemical Engineering",
    icon: <SlChemistry />,
    color: "#4D3E3E"
  },
  {
    code: "BUS101",
    name: "Introduction to Business",
    credits: 3,
    lecturer: "Prof. Ivanenko",
    department: "Business Administration",
    icon: <FaChartBar />,
    color: "#8C6954"
  },
  {
    code: "ARCH201",
    name: "Architectural History",
    credits: 3,
    lecturer: "Dr. Kovalenko",
    department: "Architecture",
    icon: <FaBuilding />,
    color: "#5E412F"
    },
    {
    code: "MATH101",
    name: "Mathematics for Engineering",
    credits: 4,
    lecturer: "Prof. Shevchenko",
    department: "Mathematics",
    icon: <FaCalculator />,
    color: "#A7C957"
    },
    {
    code: "CS301",
    name: "Data Structures and Algorithms",
    credits: 3,
    lecturer: "Dr. Petrov",
    department: "Computer Science",
    icon: <MdOutlineComputer />,
    color: "#0071C5"
    }
  ]