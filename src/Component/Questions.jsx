import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterOpt, filterTags } from "../atoms/filterTag";
import { MdCancel } from "react-icons/md";
import FilterOpt from "./FilterOpt";
import QuesDetails from "./QuesDetails";

const questions = {
  Easy: [
    "14. Longest Common Prefix",
    "26. Remove Duplicates from Sorted Array",
    "20. Valid Parentheses",
    "83. Remove Duplicates from Sorted List",
    "232. Implement Queue using Stacks",
    "144. Binary Tree Preorder Traversal",
    "125. Valid Palindrome",
    "121. Best Time to Buy and Sell Stock",
  ],

  Medium: [
    "236. Lowest Common Ancestor of a Binary Tree",
    "142. Linked List Cycle II",
    "138. Copy List with Random Pointer",
    "74. Search a 2D Matrix",
    "54. Spiral Matrix",
    "48. Rotate Image",
    "33. Search in Rotated Sorted Array",
    "19. Remove Nth Node From End of List",
    "8. String to Integer (atoi)",
    "6. Zigzag Conversion",
    "2. Add Two Numbers",
  ],

  Hard: ["84. Largest Rectangle in Histogram", "25. Reverse Nodes in k-Group"],
};

function QuestionsPart() {
  const [showFilterOpt, setShowFilterOpt] = useRecoilState(filterOpt);
  const filterTag = useRecoilValue(filterTags);

  const difficultyColorMap = {
    Easy: "text-[#4CE9EC]",
    Medium: "text-[#F7B529]",
    Hard: "text-[#F3493F]",
  };

  const selectedQuestions = (
    filterTag.length === 0
      ? Object.entries(questions)
      : filterTag.map((difficulty) => [difficulty, questions[difficulty]])
  ).flatMap(([difficulty, questionArray]) => {
    return (questionArray || []).map((qName) => ({
      qName,
      qDifficulty: difficulty === "Medium" ? "Med." : difficulty,
      qDiffColor: difficultyColorMap[difficulty],
    }));
  });
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
        <div className="flex flex-row items-center justify-center gap-2">
          {filterTag.map((label, index) => (
            <FilterTag key={index} label={label} />
          ))}
        </div>
        <div className="absolute top-12">
          {showFilterOpt ? <FilterOpt /> : null}
        </div>
      </div>

      {/* Questions  */}
      <div className="flex flex-col mt-5">
        {selectedQuestions.map((question, index) => {
          const isEven = index % 2 === 0;
          const color = isEven ? "bg-[#282828]" : "bg-transparent";
          const hoverColor = isEven
            ? "hover:bg-[#464646]"
            : "hover:bg-[#3a3a3a]";

          return (
            <QuesDetails
              key={index}
              qName={question.qName}
              color={color}
              hoverColor={hoverColor}
              qDifficulty={question.qDifficulty}
              qDiffColor={question.qDiffColor}
            />
          );
        })}
      </div>
    </div>
  );
}

function FilterTag({ label }) {
  const setFilterTag = useSetRecoilState(filterTags);

  const handelTagRemove = () => {
    setFilterTag((prev) => prev.filter((tag) => tag !== label));
  };

  return (
    <div className="w-fit px-3 h-8 rounded-full  border-x border-y bg-transparent  border-[#383737]">
      <button
        className={`w-full h-full flex flex-row gap-1 font-medium items-center justify-center text-slate-50 text-sm `}
      >
        {label}
        <div>
          <MdCancel
            className="text-base font-medium fill-[#7b7a7a] hover:fill-white"
            onClick={handelTagRemove}
          />
        </div>
      </button>
    </div>
  );
}

export default QuestionsPart;
