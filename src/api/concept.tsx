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
  directionId: Direction;
  ingredients: Ingredient[];
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
  expectedIngredient: Ingredient;
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
  Yoghurt,
  Patatine,
  Pane,
  Lattina,
  Fungo,
  Broccolo,
  Cioccolato,
  Cipolla,
}

export class ShoppingCartGame {
  private slots: SlotReport[];
  private allIngredients: Ingredient[];
  private correctIngredients: Ingredient[];
  private lanes: LaneReport[];

  constructor() {
    this.allIngredients = [
      Ingredient.Basilico,
      Ingredient.Carota,
      Ingredient.Formaggio,
      Ingredient.Gnocchi,
      Ingredient.Mozzarella,
      Ingredient.Pomodoro,
      Ingredient.Uova,
      Ingredient.Zucchina,
      Ingredient.Yoghurt,
      Ingredient.Patatine,
      Ingredient.Pane,
      Ingredient.Lattina,
      Ingredient.Fungo,
      Ingredient.Broccolo,
      Ingredient.Cioccolato,
      Ingredient.Cipolla,
    ];
    this.lanes = [
      { directionId: Direction.WestTop, ingredients: [] },
      { directionId: Direction.NordRight, ingredients: [] },
      { directionId: Direction.NordLeft, ingredients: [] },
      { directionId: Direction.EastTop, ingredients: [] },
      { directionId: Direction.WestBottom, ingredients: [] },
      { directionId: Direction.SouthRight, ingredients: [] },
      { directionId: Direction.SouthLeft, ingredients: [] },
      { directionId: Direction.EastBottom, ingredients: [] },
    ];
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
        expectedIngredient: Ingredient.Basilico,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Carota,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Formaggio,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Gnocchi,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Mozzarella,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Pomodoro,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Uova,
        assignedIngredient: null,
        status: SlotStatus.Empty,
      },
      {
        expectedIngredient: Ingredient.Zucchina,
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

  getIngredientName = (ingredient: Ingredient): string => {
    return Ingredient[ingredient];
  };

  getRandomIngredient = (): Ingredient => {
    const randomIndex = Math.floor(Math.random() * this.allIngredients.length);
    const randomIngredient = this.allIngredients[randomIndex];
    return randomIngredient;
  };

  isCompleted(): boolean {
    return this.slots.every(
      (element) => element.assignedIngredient === element.expectedIngredient
    );
  }
  printLane = (dir: Direction) => {
    return this.lanes[dir].ingredients.slice();
  };

  printGameReport = () => {
    return {
      slots: this.slots,
    };
  };
  throwIngredient = (dir: Direction, ingr: Ingredient) => {
    const lane = this.lanes[dir];
    lane.ingredients.push(ingr);
  };
}

export class IngredientName {
  getIngredientName = (ingredient: Ingredient): string => {
    return Ingredient[ingredient];
  };
}
