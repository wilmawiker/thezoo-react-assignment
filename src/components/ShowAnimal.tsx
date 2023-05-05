import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import { useAlternativeImg } from "../helpers/functions";

function ShowAnimal() {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("Animals") || "{}")
  );

  const params = useParams();
  let animal: IAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  )!;

  let classCard = "";

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (animal.isFed === true) {
      setDisabled(true);
    }
  }, []);

  if (animal.isFed === false) {
    classCard = "animal-card";
  } else {
    classCard = "animal-card--fed";
  }

  const feedAnimal = (animal: IAnimal) => {
    console.log(animal);
    animal.isFed = true;
    animal.lastFed = new Date().toLocaleString();
    setAnimals([...animals, animal]);
    localStorage.setItem("Animals", JSON.stringify(animals));
    setDisabled(true);
    console.log(animal);
  };

  return (
    <div className="animals">
      <div key={animal.id} className={classCard}>
        <h3>{animal.name}</h3>
        <div className="img-facts">
          <img
            src={animal.imageUrl}
            className="animal-image"
            onError={useAlternativeImg}
          />
          <div className="facts">
            <p>Född: {animal.yearOfBirth}</p>
            <p>
              Mediciner {animal.name} äter: {animal.medicine}
            </p>
            <p>Senast matad: {animal.lastFed}</p>
          </div>
        </div>
        <h3>{animal.latinName}</h3>
        <p>{animal.longDescription}</p>
        <button
          className="feed-btn"
          onClick={() => {
            feedAnimal(animal);
          }}
          disabled={disabled}
        >
          Mata {animal.name}
        </button>
      </div>
    </div>
  );
}

export default ShowAnimal;