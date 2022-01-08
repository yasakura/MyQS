import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {process.env.REACT_APP_WEBSITE_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
