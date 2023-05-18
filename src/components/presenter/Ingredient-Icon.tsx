import { motion } from "framer-motion";
import { Ingredients, ShoppingCartReport, Ingredient } from "../../api/concept";
import { useState } from "react";

export interface IIngredientIcon {
  directionId: number;
  initialValue: { x: number; y: number };
  ingredient: Ingredient;
  updateCart: (ingredient: Ingredient, slotId: number) => void;
}

export const IngredientIcon: React.FC<IIngredientIcon> = (ps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <div>
      {isVisible && (
        <motion.img
          initial={ps.initialValue}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 8 }}
          onAnimationComplete={() => {
            console.log("Animazione completata");
            ps.updateCart(ps.ingredient, ps.directionId);
          }}
          onClick={() => setIsVisible(false)}
          src={process.env.PUBLIC_URL + `/icons/Basilico.png`}
          className="z-50"
        />
      )}
    </div>
  );
};
