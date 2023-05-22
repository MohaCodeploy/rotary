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
import { GameInfoBox } from "./components/widgets/game-info";

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
          gameInfo={[
            <GameInfoBox data={gameRef.current.printGameInfo(0)} degree={90} />,
            <GameInfoBox data={gameRef.current.printGameInfo(1)} degree={0} />,
            <GameInfoBox
              data={gameRef.current.printGameInfo(2)}
              degree={180}
            />,
            <GameInfoBox
              data={gameRef.current.printGameInfo(3)}
              degree={270}
            />,
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
