import { CorrectIngredient } from "../presenter/ingredient/correct-ingredient";
import { EmptyIngredient } from "../presenter/ingredient/empty-ingredient";
import { WrongIngredient } from "../presenter/ingredient/wrong-ingredient";
import { SlotReport, SlotStatus } from "../../api/concept";

export const IngredientSlot: React.FC<SlotReport> = (ps) => {
  switch (ps.status) {
    case SlotStatus.Empty:
    default:
      return <EmptyIngredient ingredient={ps.expectedIngredient} />;
    case SlotStatus.Correct:
      return <CorrectIngredient ingredient={ps.assegnedIngredient} />;
    case SlotStatus.Wrong:
      return <WrongIngredient ingredient={ps.assegnedIngredient} />;
  }
};