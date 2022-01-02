import React from "react";
import Button from "@mui/material/Button";
import DietForm from "./components/DietForm";
import Pie from "./components/Pie";
import { logOut, retrieveUser } from "./services/auth";
import { retrieveDiets, sendDiets } from "./services/diets";

const MyQS = () => {
  const { user } = retrieveUser();
  const { diets } = retrieveDiets();

  const getDietNumber = () => {
    const dietDates = diets.reduce((previousValue, currentValue) => {
      previousValue.push(currentValue.date);
      return previousValue;
    }, []);

    const dietDatesWithoutDuplicateDates = dietDates.filter(
      (item, index) => dietDates.indexOf(item) === index
    );

    return dietDatesWithoutDuplicateDates.length;
  };

  const getData = () => {
    const savedDiet = diets;
    const veganDiet = savedDiet.filter((diet) => diet.diet === "vegan");
    const vegetarianDiet = savedDiet.filter(
      (diet) => diet.diet === "vegetarian"
    );
    const omnivoreDiet = savedDiet.filter((diet) => diet.diet === "omnivore");

    return [
      { title: "vegan", value: veganDiet.length, color: "#75DBCD" },
      { title: "végétarien", value: vegetarianDiet.length, color: "#FAA381" },
      { title: "omnivore", value: omnivoreDiet.length, color: "#DCDBA8" },
    ];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const diet = event.target.diet.value;
    const meal = event.target.meal.value;
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
    const dietEntryToSave = [...rawDiets, dietEntry];
    sendDiets(user, dietEntryToSave);
  };

  const getDatesFromSavedDiet = () =>
    diets.reduce((previousValue, currentValue) => {
      previousValue.push(currentValue.date);
      return previousValue;
    }, []);

  const getNearestDate = () => {
    const today = new Date();
    const dates = getDatesFromSavedDiet();
    const sortedByDiff = [...dates].sort(
      (a, b) => Math.abs(new Date(a) - today) - Math.abs(new Date(b) - today)
    );

    return sortedByDiff[0];
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

  const nearestDate = getNearestDate()
    ? new Date(getNearestDate()).toLocaleDateString("fr")
    : "Aucune 🤷‍";

  return (
    <>
      <Pie
        diets={diets}
        data={getData()}
        label={({ dataEntry }) =>
          dataEntry.value > 0
            ? `${dataEntry.title} : ${Math.round(dataEntry.percentage)}%`
            : null
        }
      />

      <DietForm
        onSubmit={handleSubmit}
        style={lunchLabelStyle}
        style1={labelStyle}
      />

      <div>
        <p>Nombre de jours : {getDietNumber()}</p>
        <p>Date la plus proche renseignée : {nearestDate}</p>
      </div>

      <hr />
      {user && (
        <div>
          <p>Utilisateur: {user.email}</p>
          <Button onClick={logOut} type="submit" variant="outlined">
            Se déconnecter
          </Button>
        </div>
      )}

      <hr />
      <br />
    </>
  );
};

MyQS.propTypes = {};

export default MyQS;
