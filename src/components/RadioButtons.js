import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import * as PropTypes from "prop-types";
import uniqueKey from "../utils/uniqueKey";

const RadioButtons = ({ data, cssClassName }) => (
  <div className="mb40">
    <RadioGroup
      row
      aria-label="position"
      name={data?.[0]?.name}
      defaultValue={data?.[0]?.value}
      className="radioGroup"
    >
      {data.map((meal) => (
        <FormControlLabel
          value={meal?.value}
          key={uniqueKey()}
          control={<Radio size="small" />}
          label={meal?.label}
          labelPlacement="top"
          className={cssClassName}
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
  cssClassName: PropTypes.string.isRequired,
};

export default RadioButtons;
