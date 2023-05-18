import { BoardLayout } from "./layout/board-layout";
import { LanesLayout } from "./layout/lanes-layout";
import { Player } from "./components/presenter/player";
import {
  Direction,
  Ingredient,
  ShoppingCartGame,
  ShoppingCartReport,
} from "./api/concept";
import { IngredientList } from "./components/presenter/ingredients-list";
import { useState } from "react";
import { Bucket } from "./components/widgets/bucket";
import { Lane } from "./components/presenter/lane";

const laneDirections = [
  Direction.WestTop,
  Direction.NordRight,
  Direction.NordLeft,
  Direction.EastTop,
  Direction.WestBottom,
  Direction.SouthRight,
  Direction.SouthLeft,
  Direction.EastBottom,
];

const game = new ShoppingCartGame();

export const App: React.FC = () => {
  const [cart, setCart] = useState(game.setNewCart());

  const updateCart = (ingredient: Ingredient, slotId: number) => {
    game.placeIngredient(ingredient, slotId);
    setCart(game.printGameReport());
  };

  return (
    <BoardLayout
      players={[
        <Player name={"P1"} />,
        <Player name={"P2"} />,
        <Player name={"P3"} />,
        <Player name={"P4"} />,
      ]}
      lanes={
        <LanesLayout
          lanes={laneDirections.map((direction) => (
            <Lane directionId={direction} updateCart={updateCart} />
          ))}
        />
      }
      bucketContainer={<Bucket slots={cart.slots} />}
      ingredientsList={<IngredientList slots={cart.slots} />}
    />
  );
};
