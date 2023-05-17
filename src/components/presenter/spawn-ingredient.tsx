import { motion } from "framer-motion";
import { Direction } from "../../App";
import { useState } from "react";

interface spawnIngredient {
  initialValue: { x: number; y: number };
  directionId: Direction;
  tapped: (x: number) => void;
  dropped: (ingredient: string) => void;
}

export const SpawnIngredient: React.FC<spawnIngredient> = (ps) => {
  const [isCompleted, setIsCompletd] = useState(false);
  return (
    <motion.div
      initial={ps.initialValue}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 8 }}
      onAnimationComplete={() => {
        console.log("Animazione completata");
        ps.dropped("basilico");
        setIsCompletd(true);
      }}
      onClick={() => {
        !isCompleted && ps.tapped(ps.directionId);
      }}
      className="h-[128px] w-[110px] flex justify-center items-center"
    >
      <img
        src={process.env.PUBLIC_URL + `/icons/basilico.png`}
        className="z-50"
      />
    </motion.div>
  );
};
