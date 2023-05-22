import clsx from "clsx";
import { ShoppingCartReport, IngredientName } from "../../api/concept";

export const IngredientList: React.FC<ShoppingCartReport> = (ps) => {
  const ingredient = new IngredientName();

  return (
    <div className="absolute bottom-0 right-60">
      <ul>
        {ps.slots.map((ingr, index) => (
          <li
            key={index}
            className={clsx("font-[Rotary]", {
              "line-through":
                ingr.expectedIngredient === ingr.assignedIngredient,
            })}
          >
            {ingredient.getIngredientName(ingr.expectedIngredient)}
          </li>
        ))}
      </ul>
    </div>
  );
};
