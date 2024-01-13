// SignUpPage.tsx
import React, { useState, ChangeEvent } from "react";
import Input from "../commonComponents/Input";
import Button from "../commonComponents/Button";
import NavBar from "../commonComponents/NavBar";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log(
      `Signing up with username: ${username}, email: ${email}, and password: ${password}`
    );
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Sign Up</h2>
        <form>
          <Input
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button type="submit" text="Sign Up" onClick={handleSignUp} />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
