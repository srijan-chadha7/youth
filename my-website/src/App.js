import "./App.css";
import Fifthcom from "./Pages/Fifthcom";
import FirstCom from "./Pages/FirstCom";
import Fourthcom from "./Pages/Fourthcom";
import Header from "./Pages/Header";
import Secondcom from "./Pages/Secondcom";
import Sixthcom from "./Pages/Sixthcom";
import Thirdcom from "./Pages/Thirdcom";
import Topnavbar from "./Pages/Topnavbar";
import Seventh from "./Pages/Seventh";
import { Route, Router, Routes } from "react-router-dom";
import Youth from "./Pages/Youth";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/youth" element={<Youth />} />
      </Routes>
      {/* <Youth/> */}
    </div>
  );
}

export default App;
