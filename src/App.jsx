import { RecoilRoot } from "recoil";
import "./App.css";
import InfoSection from "./Component/InfoSection";
import QuestionsPart from "./Component/Questions";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <RecoilRoot>
      <div className=" flex flex-row h-screen max-w-full bg-[#1a1a1a]">
        <div className=" h-full w-fit">
          <Sidebar />
        </div>
        <div className=" h-full w-11/12 flex flex-row mx-6">
          <div className=" flex h-full w-1/4 mt-20 top-10 sticky">
            <InfoSection />
          </div>
          <div className="flex w-3/4 mt-20 ml-44 justify-start">
            <QuestionsPart />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
