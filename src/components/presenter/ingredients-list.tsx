import { ShoppingCartReport } from "../../api/concept";

export const IngredientList: React.FC<ShoppingCartReport> = (ps) => {
  return (
    <div className="absolute bottom-0 right-60">
      <ul>
        {ps.slots.map((ingr, index) => (
          <li key={index} className="font-[Rotary]">
            {ingr.expectedIngredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
