import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IAnimal } from "../models/IAnimal";
import { getAllAnimals } from "../services/getAnimals";
import { Link } from "react-router-dom";
import { useAlternativeImg } from "../helpers/useAlternativeImg";
import Footer from "../components/Footer";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  useEffect(() => {
    if (localStorage.getItem("Animals") === null) {
      getAllAnimals().then((res) => {
        setAnimals(res);
      });
    } else {
      setAnimals(JSON.parse(localStorage.getItem("Animals") || "{}"));
    }
  }, []);

  let classForAnimalCard = "";

  let timeNow = new Date().getTime();

  const animalsToShow = animals.map((animal, i) => {
    if (timeNow - Date.parse(animal.lastFed) > 10800000) {
      animal.isFed = false;
      localStorage.setItem("Animals", JSON.stringify(animals));
    }

    if (animal.isFed === false) {
      classForAnimalCard = "animal-card";
    } else {
      classForAnimalCard = "animal-card--fed";
    }

    return (
      <div key={animal.id} className={classForAnimalCard}>
        {timeNow - Date.parse(animal.lastFed) > 14400000 && (
          <p>Jag är hungrig!</p>
        )}
        <h3>{animal.name}</h3>
        <img
          src={animal.imageUrl}
          className="animal-image"
          onError={useAlternativeImg}
          alt={animal.latinName}
        />
        <p>{animal.shortDescription}</p>
        <Link key={i} to={animal.id.toString()}>
          Ta hand om {animal.name}
        </Link>
      </div>
    );
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="animals">{animalsToShow}</div>
      <Footer></Footer>
    </>
  );
};
