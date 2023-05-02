import { ReactEventHandler, ReactNode } from "react";
import Navbar from "../components/Navbar";
import { IAnimal } from "../models/Animal";
import { getAllAnimals } from "../services/getAnimals";

export const Animals = () => {
  getAllAnimals();

  let animals: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "{}");

  let animalsToShow = animals.map((animal, i) => (
    <div key={i} className="fed-animal-card">
      <h3>{animal.name}</h3>
      <img src={animal.imageUrl} className="animal-image" />
      <p>{animal.shortDescription}</p>
      <button className="feed-btn">Mata {animal.name}</button>
    </div>
  ));

  return (
    <>
      <Navbar></Navbar>
      <div className="animals">{animalsToShow}</div>
    </>
  );
};
