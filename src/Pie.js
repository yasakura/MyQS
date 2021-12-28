import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { ref, set } from "firebase/database";
import Button from "@mui/material/Button";
import { database } from "./libs/firebase";
import { logOut, getUser } from "./services/auth";
import retrieveDiets from "./services/retriveDiets";

const Pie = () => {
  const user = getUser();
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

  const writeUserData = (data) => {
    set(ref(database, `users/${user?.id}`), data);
  };

  const handleSubmit = async (event) => {
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
    writeUserData(dietEntryToSave);
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
          <PieChart
            data={getData()}
            label={({ dataEntry }) =>
              dataEntry.value > 0
                ? `${dataEntry.title} : ${Math.round(dataEntry.percentage)}%`
                : null
            }
            labelStyle={{ fontSize: "6px" }}
          />
        )}
      </div>

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

Pie.propTypes = {};

export default Pie;
