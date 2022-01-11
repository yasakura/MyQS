import React, { useState } from "react";
import Button from "@mui/material/Button";
import handleError from "../utils/error";
import { sendSignIn } from "../services/auth";
import EmailInput from "./EmailInput";

const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEmailOnError, setEmailOnError] = useState(false);

  const login = (email) => {
    setIsButtonDisabled(true);

    sendSignIn(email)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Tu vas recevoir un mail pour te connecter 💌");
        setIsButtonDisabled(false);
      })
      .catch((error) => {
        handleError(error);
        setIsButtonDisabled(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event?.target?.elements?.email?.value;

    if (!isEmailOnError) login(email);
  };

  return (
    <div
      style={{
        height: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <EmailInput
          isEmailOnError={isEmailOnError}
          setEmailOnError={setEmailOnError}
        />

        <Button type="submit" variant="contained" disabled={isButtonDisabled}>
          {!isButtonDisabled
            ? "Recevoir le lien de connexion"
            : "Patiente un peu 🚀"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
