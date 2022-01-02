import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const DietForm = ({ onSubmit, style, style1 }) => (
  <form onSubmit={onSubmit}>
    <label>
      Date
      <input type="date" name="date" id="date" required />
    </label>
    <br />
    <br />
    <br />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
      }}
    >
      <label style={style}>
        Matin <br />
        <input type="radio" name="meal" value="breakfast" required />
      </label>
      <br />
      <br />
      <label style={style}>
        Midi <br />
        <input type="radio" name="meal" value="lunch" />
      </label>
      <br />
      <br />
      <label style={style}>
        Goûter <br />
        <input type="radio" name="meal" value="snack" />
      </label>
      <br />
      <br />
      <label style={style}>
        Soir <br />
        <input type="radio" name="meal" value="dinner" />
      </label>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <label style={style1}>
        Végétarien <br />
        <input type="radio" name="diet" value="vegetarian" required />
      </label>
      <br />
      <br />
      <label style={style1}>
        Végan <br />
        <input type="radio" name="diet" value="vegan" />
      </label>
      <br />
      <br />
      <label style={style1}>
        Omnivore <br />
        <input type="radio" name="diet" value="omnivore" />
      </label>
    </div>

    <br />
    <br />
    <Button type="submit" variant="contained">
      Enregistrer
    </Button>
  </form>
);

DietForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.shape({
    border: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
    display: PropTypes.string,
    width: PropTypes.string,
    justifyContent: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
  style1: PropTypes.shape({
    border: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
    display: PropTypes.string,
    width: PropTypes.string,
    justifyContent: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};

export default DietForm;
