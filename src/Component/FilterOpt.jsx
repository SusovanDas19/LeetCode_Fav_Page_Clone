import { motion } from "framer-motion";
import { IoMdRefresh } from "react-icons/io";

function FilterOpt() {
  return (
    <motion.div
      className="bg-[#333333] h-72 w-72 rounded-md border border-[#484848] "
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
            <Checkbox label="Todo" />
            <Checkbox label="Solved" />
            <Checkbox label="Attempted" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-2 mt-4 text-sm font-medium">
          <p className="text-slate-50">Difficulty</p>
          <div className="flex flex-row gap-3">
            <Checkbox label="Easy" lableColor="text-[#5dc2c4]" />
            <Checkbox label="Medium" lableColor="text-[#e6b03f]" />
            <Checkbox label="Hard" lableColor="text-[#e24a41]" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-2 mt-4 w-full text-slate-50 text-sm font-medium">
          <div className="flex flex-row gap-3">
            <Checkbox label="Show tags" />
          </div>
          <div>
            <button className="bg-[#3b3b3b] gap-2 flex flex-row items-center text-base justify-center p-2 w-11/12 rounded-md">
              <IoMdRefresh className="text-lg" /> Reset
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Checkbox({ label, lableColor }) {
  return (
    <div className="checkbox-wrapper flex items-center gap-0.5">
      <input id="c1-13" type="checkbox" />
      <label for="c1-13" className={`${lableColor} font-medium text-sm`}>
        {label}
      </label>
    </div>
  );
}

export default FilterOpt;
