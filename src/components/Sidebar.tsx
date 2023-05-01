import { useRecoilState } from "recoil";
import { modeState } from "../atoms/modeState";

export const Sidebar = () => {
  const [mode, setMode] = useRecoilState<string>(modeState);

  const modes = ["Data", "Process", "Help"];

  return (
    <div className="border-r h-full  w-32">
        <ul className="space-y-4 text-lg font-bold">
          {modes.map((mode) => (
            <li key={mode + "_list"}>
              <button
                className="px-2 w-full text-left rounded-lg duration-300 hover:bg-slate-500 hover:text-white"
                onClick={() => {
                  setMode(mode);
                }}
              >
                {mode}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};
