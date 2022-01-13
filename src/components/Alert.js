import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const Alert = ({ isAlertOpen, message, setAlertOpen }) => (
  <Dialog open={isAlertOpen}>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setAlertOpen(false)}>J&apos;ai compris 😁</Button>
    </DialogActions>
  </Dialog>
);

Alert.propTypes = {
  isAlertOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  setAlertOpen: PropTypes.func.isRequired,
};

export default Alert;
