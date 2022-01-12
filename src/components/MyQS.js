import React from "react";
import Button from "@mui/material/Button";
import DietForm from "./DietForm";
import Chart from "./Chart";
import { logOut, retrieveUser } from "../services/auth";
import { retrieveDiets } from "../services/diets";

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

  const nearestDate = getNearestDate()
    ? new Date(getNearestDate()).toLocaleDateString("fr")
    : "Aucune 🤷‍";

  return (
    <>
      <Chart
        diets={diets}
        data={getData()}
        label={({ dataEntry }) =>
          dataEntry.value > 0
            ? `${dataEntry.title} : ${Math.round(dataEntry.percentage)}%`
            : null
        }
      />

      <DietForm />

      <div>
        <p>Nombre de jours : {getDietNumber()}</p>
        <p>Date la plus proche renseignée : {nearestDate}</p>
      </div>

      <hr />
      {user && (
        <div>
          <p>Utilisateur: {user.email}</p>
          <Button
            onClick={logOut}
            className="logOut"
            type="submit"
            variant="outlined"
          >
            Se déconnecter
          </Button>
        </div>
      )}

      <hr />
    </>
  );
};

MyQS.propTypes = {};

export default MyQS;
