import { useState } from "react";
import "./App.css";
import Explorer from "./assets/explorer";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import PlaceSpheres from "./components/PlaceSphere/PlaceSpheres";
import Directory from "./pages/Directory/Directory";
import Exchange from "./pages/Exchange/Exchange";
import GuessColor from "./pages/GuessColor/GuessColor";
import Todo from "./pages/Todo/Todo";
import FolderDirectory from "./components/FolderDirectory/FolderDirectory";

function App() {
  return (
    <div className="App">
      {/* <Directory explorerData={Explorer} /> */}
      {/* <Autocomplete /> */}
      {/* <Exchange /> */}
      {/* <GuessColor /> */}
      {/* <PlaceSpheres /> */}
      {/* <Todo /> */}
      <FolderDirectory />
    </div>
  );
}

export default App;
