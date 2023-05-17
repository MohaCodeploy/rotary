export interface GameReport {}

//playerReport
export class PlayerReport implements GameReport {
  players: Player[];
  constructor() {
    this.players = [];
  }
}

export interface Player {
  playerId: string;
}

//laneReport
export class LaneReport implements GameReport {
  lanes: Ingredients[];

  constructor() {
    this.lanes = [];
  }
}
export class Ingredients {
  private ingredients: string[];
  constructor() {
    this.ingredients = [
      "Basilico",
      "Broccolo",
      "Carota",
      "Cioccolato",
      "Cipolla",
      "Formaggio",
      "Fungo",
      "Gnocchi",
      "Lattina",
      "Mozzarella",
      "Pane",
      "Patatine",
      "Pomodoro",
      "Uova",
      "Yoghurt",
      "Zucchina",
    ];
  }
  setRandomIngredient = (): string => {
    const randomIndex = Math.floor(Math.random() * this.ingredients.length);
    return this.ingredients[randomIndex];
  };
}

export class randomIngredient {
  randomIngredient: string;

  constructor() {
    const ingredients = new Ingredients();
    this.randomIngredient = ingredients.setRandomIngredient();
  }
}
//ShoppingCart
export class ShoppingCart implements GameReport {
  private slots: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  private correctIngredients: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];

  constructor() {
    this.slots = ["", "", "", "", "", "", "", ""];
    this.correctIngredients = [
      "Basilico",
      "Carota",
      "Formaggio",
      "Gnocchi",
      "Mozzarella",
      "Pomodoro",
      "Uova",
      "Zucchina",
    ];
  }

  setNewGame = (newBucket: ShoppingCartReport): ShoppingCartReport => {
    const sortedArray = this.correctIngredients.sort(() => Math.random() - 0.5);
    newBucket.slots = sortedArray.map((ingredient, index) => {
      const newIngredients = new SlotReport();
      newIngredients.expectedIngredient = sortedArray[index];
      newIngredients.status = SlotStatus.Empty;
      newIngredients.assegnedIngredient = "";
      return newIngredients;
    });
    return newBucket;
  };

  placeIngredient(ingredient: string, slotId: number): void {
    this.slots[slotId] = ingredient;
  }

  isCompleted(): boolean {
    return this.slots.every(
      (element, index) => element === this.correctIngredients[index]
    );
  }

  printReport(cart: ShoppingCartReport): ShoppingCartReport {
    cart.slots = this.slots.map((ingredientId, index) => {
      const slotReport = new SlotReport();
      slotReport.expectedIngredient = this.correctIngredients[index];
      slotReport.assegnedIngredient = ingredientId;

      if (ingredientId === "") {
        slotReport.status = SlotStatus.Empty;
      } else if (ingredientId === this.correctIngredients[index]) {
        slotReport.status = SlotStatus.Correct;
      } else {
        slotReport.status = SlotStatus.Wrong;
      }

      return slotReport;
    });

    return cart;
  }
}
//ShoppinCart Report
export class ShoppingCartReport implements GameReport {
  slots: SlotReport[] = [];
}
export class SlotReport {
  expectedIngredient: string = "";
  assegnedIngredient: string = "";
  status: SlotStatus = SlotStatus.Empty;
}

export enum SlotStatus {
  Empty,
  Correct,
  Wrong,
}
