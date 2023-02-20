import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Education from "./pages/Education";
import References from "./pages/References";
import Employment from "./pages/Employment";
import { FormContext } from "./context/FormContext";

function App() {
  const [ form, setForm ] = useState<object>({});

  return (
    <div className="App">
      <FormContext.Provider value={{form, setForm}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/references" element={<References />}></Route>
          <Route path="/employment" element={<Employment />}></Route>
        </Routes>
      </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
