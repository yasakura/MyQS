import "../css/loader.css";
import React from "react";
import Box from "@mui/material/Box";

const Loading = () => (
  <div className="App">
    <header>{process.env.REACT_APP_WEBSITE_NAME}</header>
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
