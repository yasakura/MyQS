import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../libs/firebase";
import handleError from "../utils/error";

export const signIn = () => {
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
      .catch((error) => {
        if (error?.code === "auth/invalid-action-code") return;
        handleError(error);
      });
  }
};

export default signIn;
