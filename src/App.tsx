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
import { useState, useEffect, useRef } from "react";
import { Bucket } from "./components/widgets/bucket";
import { Lane } from "./components/presenter/lane";

const direction = [
  Direction.WestTop,
  Direction.NordRight,
  Direction.NordLeft,
  Direction.EastTop,
  Direction.WestBottom,
  Direction.SouthRight,
  Direction.SouthLeft,
  Direction.EastBottom,
];

export const App: React.FC<{ game: ShoppingCartGame }> = (ps) => {
  const [cart, setCart] = useState<ShoppingCartReport>({ slots: [] });

  const gameRef = useRef<ShoppingCartGame>();

  useEffect(() => {
    const game = new ShoppingCartGame();
    const initialCart = game.setNewCart();
    gameRef.current = game;
    setCart(initialCart);
  }, []);

  const updateCart = (ingr: Ingredient, slotId: Direction) => {
    if (gameRef.current) {
      gameRef.current.placeIngredient(ingr, slotId);
      const updatedCart = gameRef.current.printGameReport();
      setCart(updatedCart);
    }
  };

  return (
    <>
      {gameRef.current != undefined && (
        <BoardLayout
          players={[
            <Player name={"P1"} />,
            <Player name={"P2"} />,
            <Player name={"P3"} />,
            <Player name={"P4"} />,
          ]}
          lanes={
            <LanesLayout
              lanes={direction.map((dir, i) => (
                <Lane
                  key={i}
                  directionId={dir}
                  updateCart={updateCart}
                  game={gameRef.current ?? new ShoppingCartGame()}
                />
              ))}
            />
          }
          bucketContainer={<Bucket slots={cart.slots} />}
          ingredientsList={<IngredientList slots={cart.slots} />}
        />
      )}
    </>
  );
};
