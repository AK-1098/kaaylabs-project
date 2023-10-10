import "./App.css";
import React from "react";
import Landingpage from "./source/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
