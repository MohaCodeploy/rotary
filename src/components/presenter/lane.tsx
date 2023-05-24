import { useEffect, useState, useRef } from "react";
import { Direction, Ingredient, ShoppingCartGame } from "../../api/concept";
import { RandomIngredient } from "../widgets/random-ingredient";

interface ILane {
  game: ShoppingCartGame;
  directionId: Direction;
  updateCart: (ingredientId: Ingredient, slotId: number) => void;
}

export const Lane: React.FC<ILane> = (ps) => {
  const { directionId, updateCart, game } = ps;
  const [lane, setLane] = useState<Ingredient[]>(game.printLane(directionId));

  const updateLane = () => {
    if (!game.isCompleted()) {
      game.throwIngredient(directionId, game.getRandomIngredient());
      const updatedLanes = game.printLane(directionId);
      setLane([...updatedLanes]);
    }
  };

  useEffect(() => {
    if (!game.isCompleted()) {
      const getRandomInterval = () => Math.random() * 2 + 6;

      const interval = setInterval(() => {
        updateLane();
        clearInterval(interval);
        const newInterval = getRandomInterval() * 1000;
        setInterval(() => {
          updateLane();
        }, newInterval);
      }, getRandomInterval() * 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="h-[142px] w-[120px] flex justify-center items-center relative">
      {lane?.map((ingr, i) => (
        <div className="absolute" key={i}>
          <RandomIngredient
            ingredientId={ingr}
            ingredientName={game.getIngredientName(ingr)}
            directionId={directionId}
            updateCart={updateCart}
          />
        </div>
      ))}
    </div>
  );
};
