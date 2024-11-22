import { FcCheckmark } from "react-icons/fc";
import { TiStarOutline } from "react-icons/ti";


function QuesDetails({ qName, color, hoverColor, qDifficulty, qDiffColor }) {
  return (
    <div
      className={`flex items-center rounded-md justify-between flex-row ${color} ${hoverColor} lg:w-4/5 sm:w-11/12 lg:h-12 sm:h-16 `}
    >
      <div className="flex flex-row  items-center gap-5 ml-6">
        <FcCheckmark />
        <p className="text-slate-50 truncate max-w-xs sm:max-w-none">{qName}</p>
      </div>

      <div className="flex flex-row gap-4 lg:mr-6 items-center text-base font-normal">
        <p className={`${qDiffColor}`}>{qDifficulty}</p>
        <TiStarOutline className="opacity-0 group-hover:opacity-100 fill-[#a8a8a8] hover:bg-[#545454] rounded-md p-1 text-3xl"/>
      </div>
    </div>
  );
}

export default QuesDetails;
