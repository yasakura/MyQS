import React, { useState } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SUCCESS_MESSAGE_LENGTH_DURATION = 3000;

const SnackbarStack = ({ snackPack, setSnackPack }) => {
  const [isSnackbarShowed, setSnackbarShowed] = useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarShowed(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setSnackbarShowed(true);
    } else if (snackPack.length && messageInfo && isSnackbarShowed) {
      setSnackbarShowed(false);
    }
  }, [snackPack, setSnackPack, messageInfo, isSnackbarShowed]);

  return (
    <Snackbar
      TransitionProps={{ onExited: handleExited }}
      autoHideDuration={SUCCESS_MESSAGE_LENGTH_DURATION}
      key={messageInfo?.key ?? undefined}
      onClose={handleClose}
      open={isSnackbarShowed}
    >
      <Alert severity="success">Repas enregistré</Alert>
    </Snackbar>
  );
};

SnackbarStack.propTypes = {
  snackPack: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.number,
      key: PropTypes.string,
    })
  ).isRequired,
  setSnackPack: PropTypes.func.isRequired,
};

export default SnackbarStack;
