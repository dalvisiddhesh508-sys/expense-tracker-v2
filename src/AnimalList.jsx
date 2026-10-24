import { useState } from "react";
import Title from "./components/common/title/Title";

function AnimalList() {
  const [animalList, setAnimalList] = useState([]);

  const [animalName, setAnimalName] = useState("dog");

  function animalNameChangeHandler(e) {
    setAnimalName(e.target.value);
  }

  function addAnimal(){
    animalList.push(animalName);
    console.log(animalList);
    setAnimalList([...animalList]);
    setAnimalName("");
  }
  return (
    <div>
      <input
        type="text"
        name=""
        id="animalName"
        value={animalName}
        onChange={animalNameChangeHandler}
      />{" "}
      
      <button onClick={addAnimal}>add</button>

      <Title label={animalName}></Title>
        {animalList.map((animal,index) => {
          return <Title key={`animal-${index}`} label={animal}></Title>;
        })}
    </div>
  );
}
export default AnimalList;
