import React from "react";
import { Navi } from "./components/Navi";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <header className="App-haeder"></header>
      <Navi />
      <hr></hr>
      <div className="flex h-full">
        <div>
          <Sidebar />
        </div>
        <Main />
      </div>
      <hr></hr>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
