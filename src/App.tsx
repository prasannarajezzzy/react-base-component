import logo from "./logo.svg";
import Button from "./commonComponents/Button";
import Input from "./commonComponents/Input";
import NavBar from "./commonComponents/NavBar";
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
        <Button type="link" link="/" text="Link Button" />
        <Input
          type="text"
          placeholder="Text Input"
          onChange={handleChange}
          value={inputValue}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
