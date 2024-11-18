import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import { motion } from "framer-motion";

function InfoSection() {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl justify-center items-center bg-[#262626] w-96 h-[550px] ml-14">
      <div className="flex items-start gap-2.5 self-start flex-col mx-6">
        <div className="bg-white h-20 w-20 flex justify-center items-center rounded">
          <MdOutlineStarPurple500 className="fill-[#f2b04f] text-6xl" />
        </div>
        <h1 className="text-slate-50 font-medium text-3xl">Favorite</h1>
      </div>
      <div className="flex flex-row items-center self-start mx-6 space-x-1 whitespace-nowrap text-slate-50">
        <a
          href="https://leetcode.com/u/SusovanDas26/"
          target="_blank"
          className="hover:text-blue-600"
        >
          Susovan Das
        </a>
        <p>. 21 questions.</p>
        <CiLock />
        <p> Private</p>
        <IoIosArrowDown />
      </div>
      <div className="flex self-start mx-6 my-4 flex-row text-slate-950 font-semibold items-center gap-3">
        <div className="flex items-center gap-2 bg-white rounded-3xl px-4 py-2">
          <FaPlay /> Practice
        </div>
        <div className="h-10 w-10 text-xl  flex items-center justify-center rounded-full bg-[#383838]">
          <VscRepoForked className="fill-white" />
        </div>
      </div>
      <hr className="w-5/6 border-t-2 border-[#333333]	" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-slate-200 font-medium">Progress</p>{" "}
          <IoMdRefresh className="text-[#8e8c8c] text-lg" />
        </div>
        <div className="flex flex-row w-full self-start gap-3">
          <div className="flex items-center justify-center bg-[#333333] h-48 rounded-md basic-[70%] w-52 self-start">
            <div className="text-slate-100 absolute">
              <CircularProgressBar />
            </div>
          </div>
          <div className="flex basic-[30%] self-start flex-col gap-3">
            <div className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md">
              <p className="text-[#4CE9EC]">Easy</p>
              <p>8/8</p>
            </div>
            <div className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md">
              <p className="text-[#F7B529]	">Med.</p>
              <p>11/11</p>
            </div>
            <div className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md">
              <p className="text-[#F3493F]	">Hard</p>
              <p>2/2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CircularProgressBar = ({
  size = 170,
  strokeWidth = 6,
  colors = ["#4CE9EC", "#F7B529", "#F3493F", "#439539"], // Different colors for the segments
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Define the lengths for each segment
  const segment1 = (circumference * 28.57) / 100; // First segment
  const segment2 = (circumference * 39.28) / 100; // Second segment
  const segment3 = (circumference * 7.14) / 100; // Third segment
  const segment4 = (circumference * 74.99) / 100;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width={size} height={size} className="-rotate-225">
        {hover ? (
          <>
            {/* First Segment */}
            <motion.circle
              initial={{
                strokeDasharray: `0 ${circumference}`,
                stroke: "transparent",
              }}
              animate={{
                strokeDasharray: `${segment1} ${circumference - segment1}`,
                stroke: colors[0],
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDashoffset= {0}
            />
            {/* Second Segment */}
            <motion.circle
              initial={{
                strokeDasharray: `0 ${circumference}`,
                stroke: "transparent",
              }}
              animate={{
                strokeDasharray: `${segment2} ${circumference - segment2}`,
                stroke: colors[1],
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDashoffset= {-segment1}
            />
            {/* Third Segment */}
            <motion.circle
              initial={{
                strokeDasharray: `0 ${circumference}`,
                stroke: "transparent",
              }}
              animate={{
                strokeDasharray: `${segment3} ${circumference - segment3}`,
               
                stroke: colors[2],
              }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDashoffset={-(segment1 + segment2)}
            />
            <circle
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="transparent"
              strokeWidth={strokeWidth}
              fill="none"
            />
          </>
        ) : (
          <>
            <motion.circle
              initial={{
                strokeDasharray: `0 ${circumference}`,
              }}
              animate={{
                strokeDasharray: `${segment4} ${circumference - segment4}`,
                strokeDashoffset: 0,
              }}
              transition={{ duration: 0.8 }}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke= {colors[3]}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>

      <div className="flex items-center top-1/3 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-end">
          {hover ? (
            <>
              <h1 className="text-4xl font-bold">73</h1>
              <p>.93%</p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold">21</h1>
              <p>/21</p>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center absolute top-20 left-10 gap-1">
        {hover ? (
          <p>Acceptance</p>
        ) : (
          <>
            <FcCheckmark />
            <p>Solved</p>
          </>
        )}
      </div>
      <div className="flex items-center absolute bottom-4 left-10 w-auto text-[#787878]">
        <p>0 Attempting</p>
      </div>
    </div>
  );
};

export default InfoSection;
