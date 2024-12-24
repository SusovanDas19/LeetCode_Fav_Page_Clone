import { FcCheckmark } from "react-icons/fc";
import { TiStarOutline } from "react-icons/ti";


function QuesDetails({ qName, color, hoverColor, qDifficulty, qDiffColor, className }) {
  return (
    <div
      className={`flex items-center rounded-md justify-between flex-row ${color} ${hoverColor} ${className} h-16 sm:h-20 lg:h-12`}
    >
      <div className="flex flex-row items-center gap-5 ml-2 sm:ml-6 w-4/5">
        <FcCheckmark />
        <p className="text-slate-50 truncate max-w-full">{qName}</p>
      </div>
      <div className="flex flex-row gap-4 mr-2 sm:mr-6 items-center text-base font-normal w-1/5">
        <p className={`${qDiffColor}`}>{qDifficulty}</p>
        <TiStarOutline className="opacity-0 group-hover:opacity-100 fill-[#a8a8a8] hover:bg-[#545454] rounded-md p-1 text-3xl"/>
      </div>
    </div>
  );
}

export default QuesDetails;
