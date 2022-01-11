import React, { useState } from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const EmailInput = ({ isEmailOnError, setEmailOnError }) => {
  const [helperText, setHelperText] = useState(" ");

  const setSuccessEmail = () => {
    setEmailOnError(false);
    setHelperText(" ");
  };

  const handleBlur = (event) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const email = event.target.value;
    const isEmptyEmail = email.length === 0;
    const isValidEmail = validEmailRegex.test(email);

    switch (true) {
      case isEmptyEmail:
        setEmailOnError(true);
        setHelperText("Tu n'as pas rempli ton email");
        break;
      case !isValidEmail:
        setEmailOnError(true);
        setHelperText("Le format de l'email n'est pas bon");
        break;
      default:
        setSuccessEmail();
    }
  };

  const handleChange = (event) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (isEmailOnError) {
      if (validEmailRegex.test(event.target.value)) {
        setSuccessEmail();
      }
    }
  };
  return (
    <FormControl>
      <TextField
        id="email"
        type="email"
        label="email"
        placeholder="Entrez votre email"
        sx={{
          width: 263,
          marginBottom: "10px",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
          "& .MuiInputLabel-root": { color: "black" },
        }}
        required
        onBlur={handleBlur}
        onChange={handleChange}
        error={isEmailOnError}
        helperText={helperText}
      />
    </FormControl>
  );
};

EmailInput.propTypes = {
  isEmailOnError: PropTypes.bool.isRequired,
  setEmailOnError: PropTypes.func.isRequired,
};

export default EmailInput;
