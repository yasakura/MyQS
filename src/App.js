// import logo from './logo.svg';
import './App.css';
import { PieChart } from 'react-minimal-pie-chart';

function App() {
  const handleSubmit = async (event) => {
      event.preventDefault()
      const date = event.target.date.value;
      const diet = event.target.diet.value;
      const savedDiet = getSavedDiet();
      const dietEntry = {date, diet};
      const dateFilter = (diet) => diet.date === date
      const currentDateInSavedDiet = savedDiet.filter(dateFilter)
      const currentDateIndexInSavedDiet = savedDiet.findIndex(dateFilter)
      const isCurrentDateInSavedDiet = currentDateInSavedDiet.length > 0;
      let dietEntryToSave = [...savedDiet]

      if(isCurrentDateInSavedDiet){
          dietEntryToSave.splice(currentDateIndexInSavedDiet, 1)
      }

      dietEntryToSave = [...dietEntryToSave, dietEntry]

      localStorage.setItem("diet", JSON.stringify(dietEntryToSave))
  }

  const getData = () => {
      const savedDiet = getSavedDiet();
      const veganDiet = savedDiet.filter((diet) => diet.diet === "vegan")
      const vegetarianDiet = savedDiet.filter((diet) => diet.diet === "vegetarian")
      const omnivoreDiet = savedDiet.filter((diet) => diet.diet === "omnivore")

      return [
          { title: 'vegan', value: veganDiet.length, color: '#75DBCD' },
          { title: 'végétarien', value: vegetarianDiet.length, color: '#FAA381' },
          { title: 'omnivore', value: omnivoreDiet.length, color: '#DCDBA8' },
      ]
  }

  const getSavedDiet = () => JSON.parse(localStorage.getItem("diet")) || [];

  const getDatesFromSavedDiet = () => getSavedDiet().reduce(
      (previousValue, currentValue) => {
          previousValue.push(currentValue.date)
          return previousValue
      }, []
  )

    const getNearestDate = () => {
        const today = new Date();
        const dates = getDatesFromSavedDiet()
        const sortedByDiff = [...dates].sort((a,b) => {
            return Math.abs(new Date(a) - today) - Math.abs(new Date(b) - today);
        })
        return sortedByDiff[0];
    }
  
  return (
    <div className="App">
      <header style={{margin: "20px 0"}}>My QS</header>
        <div style={{width: "70%", height: "300px", margin: "0 auto 30px"}}>
            <PieChart
                data={getData()}
                label={({ dataEntry }) => (
                    dataEntry.value > 0 ? `${dataEntry.title} : ${Math.round(dataEntry.percentage)}%` : null
                )}
                labelStyle={{fontSize: "6px"}}
            />
        </div>

      <form onSubmit={handleSubmit}>
          <label>
              Date{" "}
              <input type="date" name="date" id="date"/>
          </label><br/><br/>
        <label>
          Végétarien

          <input type="radio" name="diet" value="vegetarian"/>
        </label><br/><br/>
          <label>
              Végan
            <input type="radio" name="diet" value="vegan"/>
          </label><br/><br/>
          <label>
              Omnivore
          <input type="radio" name="diet" value="omnivore"/>
          </label><br/><br/>
          <button type="submit">Enregistrer</button>
      </form>

        <div>
            <p>Nombre de jours : {getSavedDiet().length}</p>
            <p>Date la plus proche renseignée : {new Date(getNearestDate()).toLocaleDateString("fr")}</p>
        </div>
    </div>
  );
}

export default App;
