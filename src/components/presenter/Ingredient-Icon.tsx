import { motion } from "framer-motion";
import { Ingredient, Direction } from "../../api/concept";
import { useState } from "react";

export interface IIngredientIcon {
  directionId: number;
  ingredientId: Ingredient;
  ingredientName: string;
  initialValue: { x: number; y: number };
  updateCart: (ingredientId: Ingredient, slotId: number) => void;
}

export const IngredientIcon: React.FC<IIngredientIcon> = (ps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <div>
      {isVisible && (
        <motion.img
          initial={ps.initialValue}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: Math.random() * 3 + 7 }}
          onAnimationComplete={() => {
            console.log("Animazione completata");
            ps.updateCart(ps.ingredientId, ps.directionId);
            setIsVisible(false);
          }}
          onClick={() => setIsVisible(false)}
          src={process.env.PUBLIC_URL + `/icons/${ps.ingredientName}.png`}
        />
      )}
    </div>
  );
};
