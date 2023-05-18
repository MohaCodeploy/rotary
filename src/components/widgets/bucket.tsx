import { ShoppingCartReport } from "../../api/concept";
import { IngredientSlot } from "./ingredient-slot";

export const Bucket: React.FC<ShoppingCartReport> = (ps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-4 ">
        {ps.slots.map((slt, index) => (
          <IngredientSlot key={index} {...slt} />
        ))}
      </div>
    </div>
  );
};
