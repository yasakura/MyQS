import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "@mui/material/Button";
import { auth } from "../libs/firebase";
import handleError from "../utils/error";
import Loading from "./loading";
import {sendSignIn} from "../services/auth";

const Login = () => {
  const [loading] = useAuthState(auth);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const login = (email) => {
    setIsButtonDisabled(true);

    sendSignIn(email)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Tu vas recevoir un mail pour te connecter 💌");
        setIsButtonDisabled(false);
      })
      .catch(handleError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event?.target?.elements?.email?.value;
    login(email);
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
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Renseigne ton email
            <input
              type="email"
              name="email"
              id="email"
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
          <br />
          <br />
          <Button type="submit" variant="contained" disabled={isButtonDisabled}>
            {!isButtonDisabled
              ? "Recevoir le lien de connexion"
              : "Patiente un peu 🚀"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Login;
