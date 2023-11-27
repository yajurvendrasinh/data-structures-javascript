import { useState } from "react";
import "./App.css";
import Explorer from "./assets/explorer";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import Directory from "./pages/Directory/Directory";
import Exchange from "./pages/Exchange/Exchange";
import GuessColor from "./pages/GuessColor/GuessColor";

function App() {
  return (
    <div className="App">
      {/* <Directory explorerData={Explorer} /> */}
      {/* <Autocomplete /> */}
      {/* <Exchange /> */}
      <GuessColor />
    </div>
  );
}

export default App;
