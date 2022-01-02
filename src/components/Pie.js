import React from "react";
import PropTypes from "prop-types";
import { PieChart } from "react-minimal-pie-chart";

const Pie = ({ diets, data, label }) => (
  <div style={{ width: "70%", height: "300px", margin: "0 auto 30px" }}>
    {diets.length === 0 ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <p>Remplis le formulaire 😉</p>
      </div>
    ) : (
      <PieChart data={data} label={label} labelStyle={{ fontSize: "6px" }} />
    )}
  </div>
);

Pie.propTypes = {
  diets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      diet: PropTypes.string,
      meal: PropTypes.string,
    })
  ).isRequired,
  label: PropTypes.func.isRequired,
};

export default Pie;
