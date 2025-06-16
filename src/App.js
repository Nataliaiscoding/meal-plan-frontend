import { useEffect, useState } from 'react';
import './App.css';
import MyMeals from './MyMeals';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setmealId] = useState("");


  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setmealId(_id)
  }

  return (
    <div>
      <h1>Meal Plan</h1>
      <input 
      type="text"
      placeholder="Add a Meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button
      disabled={!title}
      onClick=
      {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeal(title, setTitle, setMeal)}>
      {editing ? "Edit" : "Add"}


      </button>

      {/* <MyMeals text={'We got here!'}/>  */}
      
      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id}
      //name потому что в backend я изначально прописывала name, поэтому
      //чтоб отобразились предыдущие ьлюда здесь пишу name, но на следующие уже поменяла на title  
      updatingInInput={() => updatingInInput(meal._id, meal.title)} 
      deleteMeal={() => deleteMeal(meal._id, setMeal)} />
    )}
   
     
    </div>
  );
}

export default App;
