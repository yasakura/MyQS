// import logo from './logo.svg';
import "./css/App.css";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./libs/firebase";
import Login from "./components/login";
import Pie from "./Pie";
import { signIn } from "./services/auth";
import GlobalLoader from "./hoc/GlobalLoader";

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => signIn());

  return (
    <GlobalLoader>
      <div
        className="App"
        style={{ maxWidth: "375px", margin: "0 auto", padding: "0 10px" }}
      >
        <header style={{ margin: "20px 0" }}>
          {process.env.REACT_APP_WEBSITE_NAME}
        </header>
        {user ? <Pie /> : <Login />}
      </div>
    </GlobalLoader>
  );
}

export default App;
