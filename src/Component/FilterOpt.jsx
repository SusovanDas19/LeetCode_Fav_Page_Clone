import { motion } from "framer-motion";
import { IoMdRefresh } from "react-icons/io";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterOpt, filterTags } from "../atoms/filterTag";
import { useEffect, useRef } from "react";

function FilterOpt() {
  const setShowFilterOpt = useSetRecoilState(filterOpt);
  const filterOptRef = useRef(null);
  const setFilterTag = useSetRecoilState(filterTags)

  useEffect(() => {
    const handelClickOutside = (event) => {
      if (
        filterOptRef.current &&
        !filterOptRef.current.contains(event.target)
      ) {
        setShowFilterOpt(false);
      }
    };

    document.addEventListener("mousedown", handelClickOutside);

    return ()=>{
      document.removeEventListener("mousedown", handelClickOutside);
    }
  }, [setShowFilterOpt]);

  function handelReset(){
    setFilterTag([]);
  }
  return (
    <motion.div
      className="bg-[#333333] h-72 w-72 rounded-md border border-[#484848]"
      ref={filterOptRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-col gap-3 mt-1 mx-2">
        <div className="flex flex-col gap-4 mx-2 mt-4 text-slate-50 text-sm font-medium">
          <p>Status</p>
          <div className="flex flex-row gap-3">
            <Checkbox label="Todo" key="Todo" />
            <Checkbox label="Solved" key="Solved" />
            <Checkbox label="Attempted" key="Attempted" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-2 mt-4 text-sm font-medium">
          <p className="text-slate-50">Difficulty</p>
          <div className="flex flex-row gap-3">
            <Checkbox key="Easy" label="Easy" lableColor="text-[#4CE9EC]" />
            <Checkbox key="Medium" label="Medium" lableColor="text-[#F7B529]" />
            <Checkbox key="Hard" label="Hard" lableColor="text-[#F3493F]" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-2 mt-4 w-full text-slate-50 text-sm font-medium">
          <div className="flex flex-row gap-3">
            <Checkbox key="Show tags" label="Show tags" />
          </div>
          <div>
            <button onClick={handelReset} className="bg-[#3b3b3b] gap-2 flex flex-row items-center text-base justify-center p-2 w-11/12 rounded-md">
              <IoMdRefresh className="text-lg" /> Reset
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Checkbox({ label, lableColor }) {
 
  const [filterTag,setFilterTag] = useRecoilState(filterTags)

  function handelChecked(event) {
    if (event.target.checked && label !== "Show tags") {
      setFilterTag((prev) => [...prev, label]);
    } else {
      setFilterTag((prev) => prev.filter((tag) => tag !== label));
    }
  }
  return (
    <div className="checkbox-wrapper flex items-center gap-0.5">
      <input id="c1-13" type="checkbox" onClick={handelChecked} checked={filterTag.includes(label)}/>
      <label htmlFor="c1-13" className={`${lableColor} font-medium text-sm`}>
        {label}
      </label>
    </div>
  );
}

export default FilterOpt;
