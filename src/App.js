// import logo from './logo.svg';
import './App.css';
import { PieChart } from 'react-minimal-pie-chart';

function App() {
    // const chart = PieChart(population, {
    //     name: d => d.name,
    //     value: d => d.value,
    //     width,
    //     height: 500
    // })
  const handleSubmit = async (event) => {
      event.preventDefault()
      const date = event.target.date.value;
      const diet = event.target.diet.value;
      const savedDiet = JSON.parse(localStorage.getItem("diet")) || [];
      const dietEntry = {date, diet};
      let dietEntryToSave = [...savedDiet, dietEntry]

      localStorage.setItem("diet", JSON.stringify(dietEntryToSave))
  }

  const getData = () => {
      const savedDiet = JSON.parse(localStorage.getItem("diet")) || [];
      const veganDiet = savedDiet.filter((diet) => diet.diet === "vegan")
      const vegetarianDiet = savedDiet.filter((diet) => diet.diet === "vegetarian")
      const omnivoreDiet = savedDiet.filter((diet) => diet.diet === "omnivore")

      return [
          { title: 'vegan', value: veganDiet.length, color: '#E38627' },
          { title: 'végétarien', value: vegetarianDiet.length, color: '#C13C37' },
          { title: 'omnivore', value: omnivoreDiet.length, color: '#6A2135' },
      ]
  }
  
  return (
    <div className="App">
      <header style={{marginBottom: "20px"}}>My QS</header>
        <div style={{width: "70%", height: "300px", margin: "0 auto 30px"}}>
            <PieChart
                data={getData()}
                label={({ dataEntry }) => (
                    dataEntry.value > 0 ? `${dataEntry.title} : ${dataEntry.value}` : null
                )}
                labelStyle={{fontSize: "7px"}}
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
    </div>
  );
}

export default App;
