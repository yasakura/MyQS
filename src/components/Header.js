import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <Box>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" className="appBarText">
          {process.env.REACT_APP_WEBSITE_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
