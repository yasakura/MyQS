import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import * as PropTypes from "prop-types";
import uniqueKey from "../utils/uniqueKey";

const RadioButtons = ({ data, sx }) => (
  <div
    style={{
      marginBottom: "40px",
    }}
  >
    <RadioGroup
      row
      aria-label="position"
      name={data?.[0]?.name}
      defaultValue={data?.[0]?.value}
      sx={{
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {data.map((meal) => (
        <FormControlLabel
          value={meal?.value}
          key={uniqueKey()}
          control={<Radio size="small" />}
          label={meal?.label}
          labelPlacement="top"
          sx={sx}
        />
      ))}
    </RadioGroup>
  </div>
);

RadioButtons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  sx: PropTypes.shape({
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.number,
    padding: PropTypes.string,
    width: PropTypes.string,
  }).isRequired,
};

export default RadioButtons;
