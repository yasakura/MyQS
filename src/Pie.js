import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Pie = () => {
    const getSavedDiet = () => JSON.parse(localStorage.getItem("diet")) || [];

    const [diets, setDiets] = useState(getSavedDiet());

    const getData = () => {
        const savedDiet = diets;
        const veganDiet = savedDiet.filter((diet) => diet.diet === "vegan")
        const vegetarianDiet = savedDiet.filter((diet) => diet.diet === "vegetarian")
        const omnivoreDiet = savedDiet.filter((diet) => diet.diet === "omnivore")

        return [
            { title: 'vegan', value: veganDiet.length, color: '#75DBCD' },
            { title: 'végétarien', value: vegetarianDiet.length, color: '#FAA381' },
            { title: 'omnivore', value: omnivoreDiet.length, color: '#DCDBA8' },
        ]
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const date = event.target.date.value;
        const diet = event.target.diet.value;
        const savedDiet = diets;
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
        setDiets(dietEntryToSave);
    }

    const getDatesFromSavedDiet = () => diets.reduce(
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
        <>
            <div style={{width: "70%", height: "300px", margin: "0 auto 30px"}}>
                {diets.length === 0
                    ? <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <p>Remplissez le formulaire ;)</p><
                      /div>
                    :  <PieChart
                        data={getData()}
                        label={({ dataEntry }) => (
                            dataEntry.value > 0 ? `${dataEntry.title} : ${Math.round(dataEntry.percentage)}%` : null
                        )}
                        labelStyle={{fontSize: "6px"}}
                    />
                }
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Date{" "}
                    <input type="date" name="date" id="date"/>
                </label><br/><br/><br/>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <label style={{border: "solid 1px black", height: "100px", borderRadius: "5px", padding: "5px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        Végétarien <br/>

                        <input type="radio" name="diet" value="vegetarian"/>
                    </label><br/><br/>
                    <label style={{border: "solid 1px black", height: "100px", borderRadius: "5px", padding: "5px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        Végan <br/>
                        <input type="radio" name="diet" value="vegan"/>
                    </label><br/><br/>
                    <label style={{border: "solid 1px black", height: "100px", borderRadius: "5px", padding: "5px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        Omnivore <br/>
                        <input type="radio" name="diet" value="omnivore"/>
                    </label>
                </div>

                <br/><br/>
                <button type="submit" style={{padding: "10px 15px"}}>Enregistrer</button>
            </form>

            <div>
                <p>Nombre de jours : {diets.length}</p>
                <p>Date la plus proche renseignée : {new Date(getNearestDate()).toLocaleDateString("fr")}</p>
            </div>
        </>
    );
};

Pie.propTypes = {

};

export default Pie;