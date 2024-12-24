import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";

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
              <p className="text-[#5dc2c4]">Easy</p>
              <p>8/8</p>
            </div>
            <div className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md">
              <p className="text-[#e6b03f]	">Med.</p>
              <p>11/11</p>
            </div>
            <div className="flex text-slate-200 bg-[#333333] w-24 h-14 items-center justify-center flex-col p-4 rounded-md">
              <p className="text-[#e24a41]	">Hard</p>
              <p>2/2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CircularProgressBar = ({
  percentage = 75,
  size = 170,
  strokeWidth = 6,
  color = "#429539",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      <svg width={size} height={size} className="-rotate-225">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="flex items-center top-1/3 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-end">
          <h1 className="text-4xl font-bold">21</h1>
          <p>/21</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center absolute top-20 left-10 gap-1">
        <FcCheckmark />
        <p>Solved</p>
      </div>
      <div className="flex items-center absolute bottom-4 left-10 w-auto text-[#787878]">
        <p>0 Attempting</p>
      </div>
    </div>
  );
};

export default InfoSection;
