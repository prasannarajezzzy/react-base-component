import logo from "./logo.svg";
import Button from "./commonComponents/Button";
import Input from "./commonComponents/Input";
import NavBar from "./commonComponents/NavBar";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import React, { useState, ChangeEvent } from "react";
import "./App.css";
import "./theme.css";

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Explicitly define the type
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
        <NavBar />
        <LoginPage />
        {/* <Signup /> */}
    </div>
  );
}

export default App;
