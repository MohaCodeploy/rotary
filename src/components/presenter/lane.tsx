import { useState, useEffect } from "react";
import {
  Direction,
  ShoppingCartReport,
  Ingredient,
  Ingredients,
} from "../../api/concept";
import { RandomIngredient } from "../widgets/random-ingredient";

interface ILane {
  directionId: Direction;
  updateCart: (ingredient: Ingredient, slotId: number) => void;
}

export const Lane: React.FC<ILane> = (ps) => {
  const newRandomIngredient = new Ingredients().getRandomIngredient();
  const [spawnedIngredients, setSpawnedIngredients] = useState<
    React.ReactElement[]
  >([]);

  const throwIngredient = () => {
    setSpawnedIngredients((prevIngredients) => [
      ...prevIngredients,
      <RandomIngredient
        directionId={ps.directionId}
        updateCart={ps.updateCart}
        ingredient={newRandomIngredient}
      />,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      throwIngredient();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[128px] w-[110px] flex justify-center items-center relative">
      {spawnedIngredients.map((elm, index) => (
        <div key={index} className="absolute">
          {elm}
        </div>
      ))}
    </div>
  );
};
