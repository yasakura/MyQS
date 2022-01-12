import "../css/loader.css";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";

const Loading = () => (
  <div className="App">
    <Header />
    <div className="loadingContainer">
      <div className="loading">
        <Box component="p">Patiente pendant que la magie opère ✨</Box>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

export default Loading;
