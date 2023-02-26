import { useRecoilValue } from "recoil";
import { atomMode } from "../atoms/atomMode";

export const Main = () => {
  const mode = useRecoilValue(atomMode);
  console.log(mode);
  return <>{mode === "Data" && mode}</>;
};
