import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  easyHoverAtom,
  hardHoverAtom,
  medHoverAtom,
} from "../atoms/difficultyHover";

function InfoSection() {
  const setEasyHover = useSetRecoilState(easyHoverAtom);
  const setMedHover = useSetRecoilState(medHoverAtom);
  const setHardHover = useSetRecoilState(hardHoverAtom);
  return (
    <div className="flex flex-col gap-2.5 rounded-xl justify-center items-center bg-[#262626] lg:w-96 sm:w-full h-[550px] lg:ml-14 sm:ml-0">
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
            <div
              className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md"
              onMouseEnter={() => setEasyHover(true)}
              onMouseLeave={() => setEasyHover(false)}
            >
              <p className="text-[#4CE9EC]">Easy</p>
              <p>8/8</p>
            </div>
            <div
              className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md"
              onMouseEnter={() => setMedHover(true)}
              onMouseLeave={() => setMedHover(false)}
            >
              <p className="text-[#F7B529]	">Med.</p>
              <p>11/11</p>
            </div>
            <div
              className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md"
              onMouseEnter={() => setHardHover(true)}
              onMouseLeave={() => setHardHover(false)}
            >
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
  colors = ["#4CE9EC", "#F7B529", "#F3493F", "#439539"],
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  
  const segment1 = ((circumference * 28.57) / 100); // First segment
  const segment2 = (circumference * 39.28) / 100; // Second segment
  const segment3 = (circumference * 7.14) / 100; // Third segment
  const segment4 = (circumference * 74.99) / 100;

  const [hover, setHover] = useState(false);
  const easyHover = useRecoilValue(easyHoverAtom);
  const medHover = useRecoilValue(medHoverAtom);
  const hardHover = useRecoilValue(hardHoverAtom);
  const gap = 10;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width={size} height={size} className="-rotate-225">
        {!easyHover && !medHover && !hardHover ? (
          <>
            {hover ? (
              <>
                {/* First Segment */}
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                    stroke: "transparent",
                  }}
                  animate={{
                    strokeDasharray: `${segment1} ${circumference - segment1-gap}`,
                    stroke: colors[0],
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeDashoffset={0}
            
                />
                {/* Second Segment */}
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                    stroke: "transparent",
                  }}
                  animate={{
                    strokeDasharray: `${segment2} ${circumference - segment2 - gap}`,
                    stroke: colors[1],
                  }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeDashoffset={-(segment1+gap)}
                />
                {/* Third Segment */}
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                    stroke: "transparent",
                  }}
                  animate={{
                    strokeDasharray: `${segment3} ${circumference - segment3 - gap}`,
                    stroke: colors[2],
                  }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeDashoffset={-(segment1 + segment2 + 2*gap)}
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
                  transition={{ duration: 0.5, delay: 0.2 }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={colors[3]}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
              </>
            )}
          </>
        ) : (
          <>
            {easyHover ? (
              <>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#565858"
                  strokeDasharray={`${circumference + 20}`}
                  strokeDashoffset={`${segment1}`}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                  }}
                  animate={{
                    strokeDasharray: `${segment1} ${circumference - segment1}`,
                    strokeDashoffset: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={colors[0]}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
              </>
            ) : null}
            {medHover ? (
              <>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#565858"
                  strokeDasharray={`${circumference + 20}`}
                  strokeDashoffset={`${segment1}`}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                  }}
                  animate={{
                    strokeDasharray: `${segment2} ${circumference - segment2}`,
                    strokeDashoffset: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={colors[1]}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
              </>
            ) : null}
            {hardHover ? (
              <>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#565858"
                  strokeDasharray={`${circumference + 20}`}
                  strokeDashoffset={`${segment1}`}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.circle
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                  }}
                  animate={{
                    strokeDasharray: `${segment3} ${circumference - segment3}`,
                    strokeDashoffset: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={colors[2]}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                />
              </>
            ) : null}
          </>
        )}
      </svg>

      <div className="flex items-center top-1/3 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex justify-center items-end"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {hover ? (
            <>
              <h1 className="text-4xl font-bold">73</h1>
              <p>.93%</p>
            </>
          ) : null}

          {easyHover ? (
            <>
              <h1 className="text-4xl font-bold">76</h1>
              <p>.88%</p>
            </>
          ) : medHover ? (
            <>
              <h1 className="text-4xl font-bold">76</h1>
              <p>.95%</p>
            </>
          ) : hardHover ? (
            <>
              <h1 className="text-4xl font-bold">51</h1>
              <p>.06%</p>
            </>
          ) : null}

          {!hover && !easyHover && !medHover && !hardHover ? (
            <>
              <h1 className="text-4xl font-bold">21</h1>
              <p>/21</p>
            </>
          ) : null}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-row items-center justify-center absolute top-20 left-10 gap-1"
      >
        {easyHover || medHover || hardHover ? (
          <>
            <p className="ml-6">Beats</p>
          </>
        ) : (
          <>
            {hover ? (
              <p>Acceptance</p>
            ) : (
              <>
                <FcCheckmark />
                <p>Solved</p>
              </>
            )}
          </>
        )}
      </motion.div>
      <div className="flex items-center absolute bottom-4 left-9 w-auto text-[#787878]">
        <p>0 Attempting</p>
      </div>
    </div>
  );
};

export default InfoSection;
