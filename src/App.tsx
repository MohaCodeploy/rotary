import { BoardLayout } from "./layout/board-layout";
import { PlayerWidget } from "./components/widgets/player";
import { LaneWidget } from "./components/widgets/lane";
import { IngredientList } from "./components/presenter/ingredients-list";
import { BucketBottom } from "./components/widgets/bucket-bottom";
import { LanesLayout } from "./layout/lanes-layout";
import { useState } from "react";
import { ShoppingCart, ShoppingCartReport } from "./api/concept";
export enum Direction {
  WestTop,
  NordRight,
  NordLeft,
  EastTop,
  WestBottom,
  SouthRight,
  SouthLeft,
  EastBottom,
}

export interface Api {
  readTimeLeft(id: string): number;
}

class API implements Api {
  readTimeLeft(id: string): number {
    return 0;
  }
}

export const App: React.FC = (ps) => {
  const newGame = new ShoppingCart();

  const cart = newGame.setNewGame(new ShoppingCartReport());

  return (
    <BoardLayout
      players={[
        <PlayerWidget />,
        <PlayerWidget />,
        <PlayerWidget />,
        <PlayerWidget />,
      ]}
      lanes={
        <LanesLayout
          laneDirections={{
            [Direction.WestTop]: (
              <LaneWidget
                {...{ direction: Direction.WestTop, newGame, cart }}
              />
            ),
            [Direction.NordRight]: (
              <LaneWidget
                {...{ direction: Direction.NordRight, newGame, cart }}
              />
            ),
            [Direction.NordLeft]: (
              <LaneWidget
                {...{ direction: Direction.NordLeft, newGame, cart }}
              />
            ),
            [Direction.SouthRight]: (
              <LaneWidget
                {...{ direction: Direction.SouthRight, newGame, cart }}
              />
            ),
            [Direction.SouthLeft]: (
              <LaneWidget
                {...{ direction: Direction.SouthLeft, newGame, cart }}
              />
            ),
            [Direction.EastTop]: (
              <LaneWidget
                {...{ direction: Direction.EastTop, newGame, cart }}
              />
            ),
            [Direction.EastBottom]: (
              <LaneWidget
                {...{ direction: Direction.EastBottom, newGame, cart }}
              />
            ),
            [Direction.WestBottom]: (
              <LaneWidget
                {...{ direction: Direction.WestBottom, newGame, cart }}
              />
            ),
          }}
        />
      }
      bucketContainer={<BucketBottom data={cart} />}
      ingredientsList={<IngredientList />}
    />
  );
};
