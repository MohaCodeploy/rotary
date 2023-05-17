import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

interface Bucket {
  placeIngredient(ingredientId: number, slotId: number): void;
  isCompleted(): boolean;
}

class ShoppingCartReport {
  slots: SlotReport[] = [];
}
class SlotReport {
  expectedIngredient: number = 0;
  assegnedIngredient: number = 0;
  status: SlotStatus = SlotStatus.Empty;
}

enum SlotStatus {
  Empty,
  Correct,
  Wrong,
}

class ShoppingCart implements Bucket {
  private slots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  private correctIngredients: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];

  constructor() {
    this.slots = [0, 0, 0, 0, 0, 0, 0, 0];
    this.correctIngredients = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  placeIngredient(ingredientId: number, slotId: number): void {
    this.slots[slotId] = ingredientId;
  }
  isCompleted(): boolean {
    return this.slots.every(
      (element, index) => element === this.correctIngredients[index]
    );
  }
  printReport(): ShoppingCartReport {
    const report = new ShoppingCartReport();

    report.slots = this.slots.map((ingredientId, index) => {
      const slotReport = new SlotReport();
      slotReport.expectedIngredient = this.correctIngredients[index];
      slotReport.assegnedIngredient = ingredientId;

      if (ingredientId === 0) {
        slotReport.status = SlotStatus.Empty;
      } else if (ingredientId === this.correctIngredients[index]) {
        slotReport.status = SlotStatus.Correct;
      } else {
        slotReport.status = SlotStatus.Wrong;
      }

      return slotReport;
    });

    return report;
  }
}

export const BucketBottom: React.FC<ShoppingCartReport> = (ps) => {
  return <div></div>;
};

const emptyIcons = [
  "Basilico",
  "Carota",
  "Formaggio",
  "Gnocchi",
  "Mozzarella",
  "Pomodoro",
  "Uova",
  "Zucchina",
];
const images = [
  "Basilico",
  "Carota",
  "Formaggio",
  "Gnocchi",
  "Mozzarella",
  "Pomodoro",
  "Uova",
  "Zucchina",
];

export const Cart: React.FC = () => {
  const [isYellow, setYellow] = useState(false);

  const initialPosition = (index: number) => {
    if (index === 0 || index === 4) {
      return { x: -1000 };
    }
    if (index === 1 || index === 2) {
      return { y: -1000 };
    }
    if (index === 3 || index === 7) {
      return { x: 1000 };
    }
    if (index === 5 || index === 6) {
      return { y: 1000 };
    }
  };

  const getRandomImageIndex = () => {
    return Math.floor(Math.random() * images.length);
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex items-center justify-center relative">
        <div className="bg-red-400 grid grid-cols-4 items-center justify-items-center">
          {emptyIcons.map((item, index) => (
            <motion.div
              key={index}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + `/empty-icons/${item}.png`
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="h-full w-full flex items-center justify-center"
            >
              {isYellow === false ? (
                <motion.div
                  className={clsx("h-full w-full", {
                    "bg-blue-400": !isYellow,
                    "bg-yellow-400": isYellow,
                  })}
                  initial={initialPosition(index)}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 8 }}
                  onAnimationComplete={() => {
                    console.log("Animazione completata");
                    setYellow(true);
                  }}
                  onClick={() => {
                    setYellow(true);
                  }}
                >
                  <motion.img
                    src={process.env.PUBLIC_URL + `/icons/${images[index]}.png`}
                    alt={emptyIcons[index]}
                  />
                </motion.div>
              ) : null}
            </motion.div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};
