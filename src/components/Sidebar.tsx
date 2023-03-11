import { useRecoilState } from "recoil";
import { modeState } from "../atoms/modeState";

export const Sidebar = () => {
  return (
    <div className="border-r h-screen  w-32 bg-white top-0 bottom-0">
      <div className="h-full px-2 py-4 overflow-y-scroll">
        <ul className="space-y-4 text-lg font-bold">
          <li>
            <div className="px-2 rounded-lg duration-300 hover:bg-indigo-500 hover:text-white">
              Data
            </div>
          </li>
          <li>
            <div className="px-2 rounded-lg duration-300 hover:bg-indigo-500 hover:text-white">
              Process
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
