import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export async function getAllAnimals() {
  let response = await axios.get<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );
  localStorage.setItem("Animals", JSON.stringify(response.data));
  return response.data;
}
