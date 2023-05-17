import { Direction } from "../../App";
import { SpawnIngredient } from "../presenter/spawn-ingredient";
import { useEffect, useState } from "react";
import {
  ShoppingCart,
  ShoppingCartReport,
  SlotReport,
  randomIngredient,
} from "../../api/concept";

export interface ILane {
  direction: Direction;
  cart: ShoppingCartReport;
}

const x = randomIngredient;
console.log(new randomIngredient());

export const LaneWidget: React.FC<ILane> = (ps) => {
  const direction = ps.direction;

  const [ingredientIsVisibile, setVisible] = useState<boolean[]>(
    new Array(8).fill(true)
  );

  useEffect(() => {
    const x = ingredientIsVisibile.every((element) => element === true)
      ? null
      : setVisible(ingredientIsVisibile.map((x) => (x = true)));
  }, [ingredientIsVisibile]);

  const destroy = (index: number) => {
    setVisible((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  const drop = (ingr: string) => {};

  if (ingredientIsVisibile[direction]) {
    let initialValue;
    switch (direction) {
      case Direction.NordRight:
      case Direction.NordLeft:
        initialValue = { x: 0, y: -400 };
        break;
      case Direction.EastTop:
      case Direction.EastBottom:
        initialValue = { x: 400, y: 0 };
        break;
      case Direction.WestTop:
      case Direction.WestBottom:
        initialValue = { x: -400, y: 0 };
        break;
      case Direction.SouthLeft:
      case Direction.SouthRight:
        initialValue = { x: 0, y: 400 };
        break;
      default:
        return null;
    }
    return (
      <SpawnIngredient
        initialValue={initialValue}
        directionId={direction}
        tapped={destroy}
        dropped={drop}
      />
    );
  }
  return null;
};
