import composeUserDiet from "./diets";

describe("Diets", () => {
  it("should add a new entry to diets", () => {
    const date = "2022-02-14";
    const diet = "vegan";
    const meal = "snack";
    const userDiet = { date, diet, meal };
    const diets = [
      {
        date: "2022-02-14",
        diet: "vegetarian",
        meal: "breakfast",
      },
      {
        date: "2022-02-14",
        diet: "vegan",
        meal: "lunch",
      },
    ];
    const expectedDiets = [
      {
        date: "2022-02-14",
        diet: "vegetarian",
        meal: "breakfast",
      },
      {
        date: "2022-02-14",
        diet: "vegan",
        meal: "lunch",
      },
      {
        date: "2022-02-14",
        diet: "vegan",
        meal: "snack",
      },
    ];
    expect(composeUserDiet(userDiet, diets)).toEqual(expectedDiets);
  });

  it("should replace an entry to diets", () => {
    const date = "2022-02-14";
    const diet = "vegetarian";
    const meal = "lunch";
    const userDiet = { date, diet, meal };
    const diets = [
      {
        date: "2022-02-14",
        diet: "vegetarian",
        meal: "breakfast",
      },
      {
        date: "2022-02-14",
        diet: "vegan",
        meal: "lunch",
      },
    ];
    const expectedDiets = [
      {
        date: "2022-02-14",
        diet: "vegetarian",
        meal: "breakfast",
      },
      {
        date: "2022-02-14",
        diet: "vegetarian",
        meal: "lunch",
      },
    ];
    expect(composeUserDiet(userDiet, diets)).toEqual(expectedDiets);
  });
});
