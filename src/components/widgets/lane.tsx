import { Direction } from "../../App";
import { SpawnIngredient } from "../presenter/spawn-ingredient";
import { useEffect, useState } from "react";
import {
  ShoppingCart,
  ShoppingCartReport,
  SlotReport,
} from "../../api/concept";

export interface ILane {
  direction: Direction;
  cart: ShoppingCartReport;
}

export const LaneWidget: React.FC<ILane> = (ps) => {
  const dataReport = ps.api.printReport(ps.cart).slots;
  const setIngredient = ps.api.setRandomIngredient();
  const direction = ps.direction;

  const [ingredientIsVisibile, setVisible] = useState<boolean[]>(
    new Array(dataReport.length).fill(true)
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
        ingredient={setIngredient}
      />
    );
  }
  return null;
};
