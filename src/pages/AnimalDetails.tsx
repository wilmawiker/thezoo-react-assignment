import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import Navbar from "../components/Navbar";
import ShowAnimal from "../components/ShowAnimal";
import Footer from "../components/Footer";

export const AnimalDetails = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    setAnimals(JSON.parse(localStorage.getItem("Animals") || "{}"));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <ShowAnimal></ShowAnimal>
      <Footer></Footer>
    </>
  );
};
