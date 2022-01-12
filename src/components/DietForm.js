import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FormControl, TextField } from "@mui/material";
import SnackbarStack from "./SnackbarStack";
import { retrieveDiets, sendDiets } from "../services/diets";
import { retrieveUser } from "../services/auth";
import uniqueKey from "../utils/uniqueKey";
import RadioButtons from "./RadioButtons";
import mealsData from "../data/meals.json";
import dietsData from "../data/diets.json";

const DietForm = () => {
  const [snackPack, setSnackPack] = useState([]);
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

  const handleSuccessMessage = () => {
    setSnackPack((prev) => [...prev, { key: uniqueKey() }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const diet = event.target.diet.value;
    const meal = event.target.meal.value;

    sendDiets(user, composeUserDiet(date, diet, meal)).then(
      handleSuccessMessage
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className="w100">
          <div className="dateContainer mb40">
            <TextField
              id="date"
              label="Date du repas"
              type="date"
              className="dateField"
              InputLabelProps={{ shrink: true }}
              required
            />
          </div>

          <RadioButtons cssClassName="mealLabel" data={mealsData} />
          <RadioButtons cssClassName="label" data={dietsData} />
        </FormControl>

        <Button type="submit" variant="contained">
          Enregistrer
        </Button>
      </form>

      <SnackbarStack snackPack={snackPack} setSnackPack={setSnackPack} />
    </>
  );
};

export default DietForm;
