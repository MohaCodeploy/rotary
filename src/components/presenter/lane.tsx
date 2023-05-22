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
    const interval = setInterval(() => {
      updateLane();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[128px] w-[110px] flex justify-center items-center relative">
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
