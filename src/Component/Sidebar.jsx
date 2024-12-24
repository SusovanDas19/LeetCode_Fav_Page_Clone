import { useRecoilState} from "recoil";
import { sidebarAtom } from "../atoms/sidebarAtom";
import { PiSidebarFill } from "react-icons/pi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { motion } from "framer-motion";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarAtom);
  return (
    <div className={`h-full w-full ${showSidebar ? 'fixed z-50' : 'relative'} sm:relative`}>
      {showSidebar ? (
        <>
          <motion.div
            className=" flex h-full flex-col z-50 w-56 sm:w-64 border-r justify-center border-[#484747] bg-[#333333] relative"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }} 
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex h-9  absolute top-0 left-0 right-0 items-center mx-6 mt-3  justify-between">
              <h1 className="text-base text-slate-50 font-semibold">
                My Lists
              </h1>

              <div
                className="cursor-pointer flex items-center justify-center  "
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                <PiSidebarFill
                  className="text-slate-50 text-xl"
                  strokeWidth="10"
                />
              </div>
            </div>
            <div className="absolute top-10 left-0 right-0 mx-6 mt-3">
              <p className="text-sm text-slate-50 font-semibold">
                Created by me
              </p>
            </div>
            <div className="absolute  hover:bg-[#434343] h-12 top-20 left-0 right-0 mx-4 mt-3 flex items-center justify-between rounded-md">
              <div className="bg-white h-7 w-7 flex justify-center items-center rounded ml-2">
                <MdOutlineStarPurple500 className="fill-[#f2b04f] text-lg" />
              </div>
              <p className="text-sm text-slate-50 font-semibold mr-16">
                Favorite
              </p>
              <CiLock className="text-slate-50 text-lg mr-2" strokeWidth="1" />
            </div>
          </motion.div>
        </>
      ) : (
        <div className="bg-[#1a1a1a] mt-2 ml-3 h-7 w-8 flex items-center justify-center border-x border-y border-[#373737] rounded cursor-pointer">
          <PiSidebarFill
            className="text-slate-50 text-xl "
            strokeWidth="10"
            onClick={() => {
              setShowSidebar(true);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
