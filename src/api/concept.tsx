import { update } from "react-spring";

export interface GameReport {
  players: [PlayerReport, PlayerReport, PlayerReport, PlayerReport];
  lanes: [
    LaneReport,
    LaneReport,
    LaneReport,
    LaneReport,
    LaneReport,
    LaneReport,
    LaneReport,
    LaneReport
  ];
  cart: ShoppingCartReport;
  round: RoundReport;
  timeLeft: TimeReport;
}

export interface PlayerReport {
  name: string;
}

export interface RoundReport {
  round: number;
}
export interface TimeReport {
  time: number;
}

export interface LaneReport {
  directionId: number;
  ingredient: string;
}

export enum Direction {
  WestTop,
  NordRight,
  NordLeft,
  EastTop,
  WestBottom,
  SouthRight,
  SouthLeft,
  EastBottom,
}
export interface ShoppingCartReport {
  slots: SlotReport[];
}

export interface SlotReport {
  expectedIngredient: Ingredient | null;
  assignedIngredient: Ingredient | null;
  status: SlotStatus;
}

export enum SlotStatus {
  Empty,
  Correct,
  Wrong,
}

export enum Ingredient {
  Basilico,
  Carota,
  Formaggio,
  Gnocchi,
  Mozzarella,
  Pomodoro,
  Uova,
  Zucchina,
}

export class ShoppingCartGame {
  private slots: SlotReport[];
  private correctIngredients: Ingredient[];

  constructor() {
    this.correctIngredients = [
      Ingredient.Basilico,
      Ingredient.Carota,
      Ingredient.Formaggio,
      Ingredient.Gnocchi,
      Ingredient.Mozzarella,
      Ingredient.Pomodoro,
      Ingredient.Uova,
      Ingredient.Zucchina,
    ];
    this.slots = [
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: null,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
    ];
  }

  setNewCart = (): ShoppingCartReport => {
    const sortedIngredients = this.correctIngredients.sort(
      () => Math.random() - 0.5
    );

    this.slots.forEach((slot, index) => {
      slot.expectedIngredient = sortedIngredients[index];
      slot.assignedIngredient = null;
      slot.status = SlotStatus.Empty;
    });

    return {
      slots: this.slots,
    };
  };

  placeIngredient = (
    ingredient: Ingredient,
    slotId: number
  ): ShoppingCartReport => {
    const slot = this.slots[slotId];
    const isCorrect = slot.assignedIngredient === slot.expectedIngredient;
    slot.assignedIngredient = ingredient;
    slot.status = isCorrect ? SlotStatus.Correct : SlotStatus.Wrong;
    return {
      slots: this.slots,
    };
  };

  isCompleted(crt: ShoppingCartReport): boolean {
    return crt.slots.every(
      (element) => element.assignedIngredient === element.expectedIngredient
    );
  }
  throwIngredient(ingredient: Ingredient) {}
  emptyLane(lane: number): void {}
  emptySlot(slot: number, ingredient: Ingredient): void {}

  printGameReport = () => {
    return {
      slots: this.slots,
    };
  };
}

export class Ingredients {
  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      Ingredient.Basilico,
      Ingredient.Carota,
      Ingredient.Formaggio,
      Ingredient.Gnocchi,
      Ingredient.Mozzarella,
      Ingredient.Pomodoro,
      Ingredient.Uova,
      Ingredient.Zucchina,
    ];
  }

  getRandomIngredient = (): Ingredient => {
    const randomIndex = Math.floor(Math.random() * this.ingredients.length);
    return this.ingredients[randomIndex];
  };
}
