import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../libs/firebase";
import handleError from "../utils/error";

const logOut = () => logout();

const sendSignIn = (email) => {
  const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true,
  };
  return Promise.resolve(
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
  );
};

const signIn = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Entrez votre email pour confirmation");
    }

    await signInWithEmailLink(auth, email, window.location.href)
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

const useGetUser = () => {
  const [user] = useAuthState(auth);
  return user;
};

export { sendSignIn, logOut, signIn, useGetUser as getUser};
