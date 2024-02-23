import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
