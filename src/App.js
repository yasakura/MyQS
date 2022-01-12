// import logo from './logo.svg';
import "./css/App.css";
import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./components/Login";
import MyQS from "./components/MyQS";
import Header from "./components/Header";
import { retrieveUser, signIn } from "./services/auth";
import GlobalLoader from "./hoc/GlobalLoader";
import Footer from "./components/Footer";

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
        <div className="App">{user ? <MyQS /> : <Login />}</div>
        {user && <Footer />}
      </ThemeProvider>
    </GlobalLoader>
  );
}

export default App;
