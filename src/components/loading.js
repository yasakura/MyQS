import "../css/loader.css";
import React from "react";
import Box from "@mui/material/Box";

const Loading = () => (
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
);

export default Loading;
