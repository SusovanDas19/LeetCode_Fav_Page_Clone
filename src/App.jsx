import { RecoilRoot } from "recoil";
import "./App.css";
import InfoSection from "./Component/InfoSection";
import QuestionsPart from "./Component/Questions";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <RecoilRoot>
      <div className="flex flex-row max-h-max max-w-full bg-[#1a1a1a]">
        <div className="min-h-screen lg:w-fit sm:w-full sm:z-50">
          <Sidebar />
        </div>
        <div className="h-full w-11/12 flex flex-col sm:flex-col lg:flex-row mx-6">
          <div className="flex h-full w-full items-center justify-center lg:w-1/4 sm:w-full mt-20 top-10 lg:sticky sm:static">
            <InfoSection />
          </div>
          <div className="flex w-full lg:w-3/4 sm:w-full mt-20 lg:ml-44 sm:ml-0 justify-start">
            <QuestionsPart />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
