export default function composeUserDiet(userDiet, diets) {
  const rawDiets = diets;
  const dietFilter = (item) =>
    userDiet.date === item.date && userDiet.meal === item.meal;
  const currentDietInSavedDiet = rawDiets.filter(dietFilter);
  const currentDietFirstIndexInSavedDiet = rawDiets.findIndex(dietFilter);
  const isCurrentDietInSavedDiet = currentDietInSavedDiet.length > 0;
  if (isCurrentDietInSavedDiet) {
    rawDiets.splice(
      currentDietFirstIndexInSavedDiet,
      currentDietInSavedDiet.length
    );
  }

  return [...rawDiets, userDiet];
}
