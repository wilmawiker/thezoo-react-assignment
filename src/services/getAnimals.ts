import axios from "axios";

export async function getAllAnimals() {
  let response = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );

  localStorage.setItem("Animals", JSON.stringify(response.data));
  console.log(response.data);
}
