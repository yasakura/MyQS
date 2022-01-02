import React from "react";
import Button from "@mui/material/Button";
import { retrieveDiets, sendDiets } from "../services/diets";
import { retrieveUser } from "../services/auth";

const DietForm = () => {
  const { user } = retrieveUser();
  const { diets } = retrieveDiets();

  const composeUserDiet = (date, diet, meal) => {
    const rawDiets = diets;
    const dietEntry = { date, diet, meal };
    const dietFilter = (item) =>
      dietEntry.date === item.date && dietEntry.meal === item.meal;
    const currentDietInSavedDiet = rawDiets.filter(dietFilter);
    const currentDietFirstIndexInSavedDiet = rawDiets.findIndex(dietFilter);
    const isCurrentDietInSavedDiet = currentDietInSavedDiet.length > 0;
    if (isCurrentDietInSavedDiet) {
      rawDiets.splice(
        currentDietFirstIndexInSavedDiet,
        currentDietInSavedDiet.length
      );
    }

    return [...rawDiets, dietEntry];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const diet = event.target.diet.value;
    const meal = event.target.meal.value;

    sendDiets(user, composeUserDiet(date, diet, meal));
  };

  const labelStyle = {
    border: "solid 1px black",
    height: "100px",
    borderRadius: "5px",
    padding: "5px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const lunchLabelStyle = {
    ...labelStyle,
    width: "65px",
    height: "65px",
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label style={lunchLabelStyle}>
          Matin <br />
          <input type="radio" name="meal" value="breakfast" required />
        </label>
        <br />
        <br />
        <label style={lunchLabelStyle}>
          Midi <br />
          <input type="radio" name="meal" value="lunch" />
        </label>
        <br />
        <br />
        <label style={lunchLabelStyle}>
          Goûter <br />
          <input type="radio" name="meal" value="snack" />
        </label>
        <br />
        <br />
        <label style={lunchLabelStyle}>
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
        <label style={labelStyle}>
          Végétarien <br />
          <input type="radio" name="diet" value="vegetarian" required />
        </label>
        <br />
        <br />
        <label style={labelStyle}>
          Végan <br />
          <input type="radio" name="diet" value="vegan" />
        </label>
        <br />
        <br />
        <label style={labelStyle}>
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
};

export default DietForm;
