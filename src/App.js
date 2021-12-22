// import logo from './logo.svg';
import "./App.css";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./libs/firebase";
import Login from "./components/login";
import Loading from "./components/loading";
import Pie from "./Pie";
import handleError from "./utils/error";

function App() {
  const [user, loading] = useAuthState(auth);

  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Entrez votre email pour confirmation");
    }

    signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        window.localStorage.removeItem("emailForSignIn");
        window.location.search = "";
      })
      .catch(handleError);
  }

  if (loading) {
    return (
      <div
        className="App"
        style={{ maxWidth: "375px", margin: "0 auto", padding: "0 10px" }}
      >
        <header style={{ margin: "20px 0" }}>My QS</header>
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="App"
      style={{ maxWidth: "375px", margin: "0 auto", padding: "0 10px" }}
    >
      <header style={{ margin: "20px 0" }}>My QS</header>
      {!user ? <Login /> : <Pie />}
    </div>
  );
}

export default App;
