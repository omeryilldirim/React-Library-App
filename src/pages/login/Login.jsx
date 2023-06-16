import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import users from "../../helper/users"

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let user of users) {
      if (user.username === username && user.password === password) {
        setCurrentUser(username);
        sessionStorage.setItem("user", username);
        navigate(-1);
        return;
      }
    }
    alert("Invalid username or password");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <StyledButton type="submit">Sign In</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
