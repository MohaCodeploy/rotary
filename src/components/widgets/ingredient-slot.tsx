import { CorrectIngredient } from "../presenter/ingredient/correct-ingredient";
import { EmptyIngredient } from "../presenter/ingredient/empty-ingredient";
import { WrongIngredient } from "../presenter/ingredient/wrong-ingredient";
import { SlotReport, SlotStatus, IngredientName } from "../../api/concept";

export const IngredientSlot: React.FC<SlotReport> = (ps) => {
  const ingredient = new IngredientName();
  if (ps.assignedIngredient == null) {
    return (
      <EmptyIngredient
        ingredientName={ingredient.getIngredientName(ps.expectedIngredient)}
      />
    );
  } else if (ps.assignedIngredient === ps.expectedIngredient) {
    return (
      <CorrectIngredient
        ingredientName={ingredient.getIngredientName(ps.assignedIngredient)}
      />
    );
  } else {
    return (
      <WrongIngredient
        ingredientName={ingredient.getIngredientName(ps.assignedIngredient)}
      />
    );
  }
};
