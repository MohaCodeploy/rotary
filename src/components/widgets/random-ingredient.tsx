import { IngredientIcon } from "../presenter/Ingredient-Icon";
import { ShoppingCartReport, Ingredient } from "../../api/concept";

export interface IRandomIngredient {
  directionId: number;
  ingredient: Ingredient;
  updateCart: (ingredient: Ingredient, slotId: number) => void;
}

export const RandomIngredient: React.FC<IRandomIngredient> = (ps) => {
  const direction = ps.directionId;
  let initialValue;
  switch (direction) {
    case 1:
    case 2:
      initialValue = { x: 0, y: -400 };
      break;
    case 5:
    case 6:
      initialValue = { x: 0, y: 400 };
      break;
    case 3:
    case 7:
      initialValue = { x: 400, y: 0 };
      break;
    case 4:
    case 0:
      initialValue = { x: -400, y: 0 };
      break;
    default:
      return null;
  }
  return (
    <IngredientIcon
      directionId={ps.directionId}
      initialValue={initialValue}
      updateCart={ps.updateCart}
      ingredient={ps.ingredient}
    />
  );
};
