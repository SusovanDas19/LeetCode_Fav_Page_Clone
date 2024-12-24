import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterOpt } from "../atoms/filterTag";
import { MdCancel } from "react-icons/md";
import FilterOpt from "./FilterOpt";
import QuesDetails from "./QuesDetails";

function QuestionsPart() {
  const [showFilterOpt, setShowFilterOpt] = useRecoilState(filterOpt);

  return (
    <div className="w-full relative">
      <div className="flex flex-row gap-3">
        <div className="w-20 h-8 rounded-full border-x border-y bg-transparent hover:bg-[#1e1d1d] border-[#383737]">
          <button
            className={`w-full h-full flex flex-row gap-2 font-medium justify-center text-[#7b7a7a] items-center`}
            onClick={() => {
              setShowFilterOpt((curr) => !curr);
            }}
          >
            <FaFilter /> Filter
          </button>
        </div>
        <div>
          <FilterTag label="Todo" lableColor="text-red-800" />
        </div>
        <div className="absolute top-12">
          {showFilterOpt ? <FilterOpt /> : null}
        </div>
      </div>

      <div className="flex flex-col mt-5">
          <QuesDetails qName="11. Container With Most Water" color="bg-[#282828]" hoverColor="hover:bg-[#464646]" qDifficulty="Med." qDiffColor="text-[#e6b03f]"/>
          <QuesDetails qName="27. Remove element" color="bg-transparent" hoverColor="hover:bg-[#3a3a3a]" qDifficulty="Easy" qDiffColor="text-[#5dc2c4]"/>
          <QuesDetails qName="42. Trapping rain water" color="bg-[#282828]" hoverColor="hover:bg-[#464646]" qDifficulty="Hard" qDiffColor="text-[#e24a41]"/>
      </div>
    </div>
  );
}





function FilterTag({ label}) {
  return (
    <div className="w-20 h-8 rounded-full  border-x border-y bg-transparent  border-[#383737]">
      <button
        className={`w-full h-full flex flex-row gap-1 font-medium items-center justify-center text-slate-50 text-sm `}
      >
        {label}
        <div>
          <MdCancel className="text-base font-medium fill-[#7b7a7a] hover:fill-white" />
        </div>
      </button>
    </div>
  );
}























export default QuestionsPart;
