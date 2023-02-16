import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Education from "./pages/Education";
import References from "./pages/References";
import Employment from "./pages/Employment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/references" element={<References />}></Route>
          <Route path="/employment" element={<Employment />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
