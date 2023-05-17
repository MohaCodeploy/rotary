import { ShoppingCartReport, SlotStatus } from "../../api/concept";
import { IngredientSlot } from "./ingredient-slot";

interface BucketBottom {
  data: ShoppingCartReport;
}
export const BucketBottom: React.FC<BucketBottom> = (ps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-4 ">
        {ps.data.slots.map((slt, index) => (
          <IngredientSlot key={index} {...slt} />
        ))}
      </div>
    </div>
  );
};
