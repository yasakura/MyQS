import React, { useState } from "react";
import Button from "@mui/material/Button";
import handleError from "../utils/error";
import { sendSignIn } from "../services/auth";
import EmailInput from "./EmailInput";
import Alert from "./Alert";

const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEmailOnError, setEmailOnError] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);

  const login = (email) => {
    setIsButtonDisabled(true);

    sendSignIn(email)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setAlertOpen(true);
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
    <div className="formContainer">
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

      <Alert
        isAlertOpen={isAlertOpen}
        message="Tu vas recevoir un mail pour te connecter 💌"
        setAlertOpen={setAlertOpen}
      />
    </div>
  );
};

export default Login;
