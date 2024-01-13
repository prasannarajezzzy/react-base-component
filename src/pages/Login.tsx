// LoginPage.tsx
import React, { useState, ChangeEvent } from "react";
import Input from "../commonComponents/Input";
import Button from "../commonComponents/Button";
import NavBar from "../commonComponents/NavBar";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Login</h2>
        <form>
          <Input
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button type="submit" text="Login" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
