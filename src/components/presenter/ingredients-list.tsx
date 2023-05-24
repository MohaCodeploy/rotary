import clsx from "clsx";
import { ShoppingCartReport, IngredientName } from "../../api/concept";

export const IngredientList: React.FC<ShoppingCartReport> = (ps) => {
  const ingredient = new IngredientName();

  return (
    <div className="absolute bottom-5 right-[450px]">
      <ul>
        {ps.slots.map((ingr, index) => (
          <li
            key={index}
            className={clsx("font-[Rotary] text-2xl font-extrabold pb-1", {
              "line-through decoration-4  text-green-800":
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
