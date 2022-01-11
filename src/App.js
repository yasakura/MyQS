// import logo from './logo.svg';
import "./css/App.css";
import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./components/Login";
import MyQS from "./components/MyQS";
import Header from "./components/Header";
import { retrieveUser, signIn } from "./services/auth";
import GlobalLoader from "./hoc/GlobalLoader";

function App() {
  const { user } = retrieveUser();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#007ea7",
      },
    },
  });

  useEffect(() => signIn());

  return (
    <GlobalLoader>
      <ThemeProvider theme={theme}>
        <Header />
        <div
          className="App"
          style={{
            margin: "0 auto",
            marginTop: "70px",
            maxWidth: "375px",
            padding: "0 10px",
          }}
        >
          {user ? <MyQS /> : <Login />}
        </div>
      </ThemeProvider>
    </GlobalLoader>
  );
}

export default App;
