import React from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/firebase";
import handleError from "../utils/error";

const Login = () => {
  const [loading] = useAuthState(auth);

  const login = (email) => {
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Tu vas recevoir un mail pour te connecter 💌");
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
        <div>
          <p>Initialising User...</p>
        </div>
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
          <button type="button">Recevoir le lien de connexion</button>
        </form>
      )}
    </div>
  );
};

export default Login;
