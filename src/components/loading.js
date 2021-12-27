import "../css/loader.css";
import React from "react";
import Box from "@mui/material/Box";

const Loading = () => (
  <div
    className="App"
    style={{ maxWidth: "375px", margin: "0 auto", padding: "0 10px" }}
  >
    <header style={{ margin: "20px 0" }}>
      {process.env.REACT_APP_WEBSITE_NAME}
    </header>
    <div
      style={{
        height: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
