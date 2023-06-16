
import React, {useState} from "react";
import {
  FormContainer,
  Header,
  RegisterContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Register.style";
import { useNavigate } from "react-router-dom";
import users from "../../helper/users"

const Register = ({setCurrentUser}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push({username: username, password: password});
    setCurrentUser(username);
    sessionStorage.setItem("user", username);
    navigate("/");
  };
  return (
    <RegisterContainer>
    <FormContainer>
      <Header>Register</Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <StyledInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>
    </FormContainer>
  </RegisterContainer>
  )
}

export default Register