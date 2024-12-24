import { RecoilRoot } from "recoil";
import "./App.css";
import InfoSection from "./Component/InfoSection";
import QuestionsPart from "./Component/Questions";

function App() {
  return (
    <RecoilRoot>
      <div className=" flex flex-row h-screen max-w-full bg-[#1a1a1a] mx-6 gap-5">
      <div className=" flex h-full w-1/3 mt-20">
        <InfoSection />
      </div>
      <div className="flex h-full w-2/3 mt-20">
        <QuestionsPart/>
      </div>
    </div>
    </RecoilRoot>
  );
}

export default App;
