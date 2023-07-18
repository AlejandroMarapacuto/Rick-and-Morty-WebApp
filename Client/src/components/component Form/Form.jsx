import React from "react";
import { useState } from "react";
import { validation } from "./validations";
import { DivForm } from "./styledComponents";
import { Perror } from "./styledComponents";
import { Buttonlogin } from "./styledComponents";
import { Inputsform } from "./styledComponents";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });

    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <DivForm>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <Inputsform
          name="email"
          value={userData.email}
          onChange={handleChange}
        ></Inputsform>
        <Perror>{errors.email}</Perror>
        <label>Password: </label>
        <Inputsform
          name="password"
          value={userData.value}
          onChange={handleChange}
        ></Inputsform>
        <Perror>{errors.password}</Perror>
        <Buttonlogin>Log in</Buttonlogin>
      </form>
    </DivForm>
  );
};

export default Form;
