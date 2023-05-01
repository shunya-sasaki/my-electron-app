import React from "react";
import { Navi } from "./components/Navi";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { RecoilRoot } from "recoil";
import mermaid from "mermaid";

function App() {
  return (
    <RecoilRoot>
      <header className="App-haeder"></header>
      <div className="h-screen">
        <div className="h-[5%]">
          <Navi />
        </div>
        <div className="flex h-[92.5%]">
          <Sidebar />
          <Main />
        </div>
        <div className="h-[2.5%]">
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
