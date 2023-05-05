import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ShowAnimal from "../components/ShowAnimal";

export const AnimalDetails = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    setAnimals(JSON.parse(localStorage.getItem("Animals") || "{}"));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <ShowAnimal></ShowAnimal>
    </>
  );
};
