import { useState } from "react";
import "./App.css";
import { getAllAnimals } from "./services/getAnimals";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  getAllAnimals();

  return <></>;
}

export default App;
