const alternativeImage = "..\\src\\assets\\placeholder.png";

export const useAlternativeImg = (e: any) => {
  e.currentTarget.src = alternativeImage;
};

export const getAnimalsFromLS = () => {
  const animals = JSON.parse(localStorage.getItem("Animals") || "{}");
  return animals;
};
