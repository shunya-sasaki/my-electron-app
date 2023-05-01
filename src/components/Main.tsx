import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { modeState } from "../atoms/modeState";
import axios from "axios";

import { DataPage } from "./Pages/DataPage";
import { ProcessPage } from "./Pages/ProcessPage";
import { HelpPage } from "./Pages/HelpPage";

export const Main = () => {
  const mode = useRecoilValue(modeState);
  const [message, setMessage] = useState<string>("");

  const callHello = () => {
    axios.get("http://localhost:8000/hello/").then((responce) => {
      const data = responce.data;
      console.log(data);
      setMessage(data);
    });
  };

  const callCwd = () => {
    axios.get("http://localhost:8000/cwd/").then((responce) => {
      const data = responce.data;
      console.log(data);
    });
  };

  useEffect(() => {
    callHello();
    callCwd();
  }, []);

  if (mode === "Data") {
    return <DataPage />;
  } else if (mode === "Process") {
    return <ProcessPage />;
  } else {
    return <HelpPage />;
  }
};
