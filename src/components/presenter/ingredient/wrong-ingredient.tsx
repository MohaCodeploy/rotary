import { Ingredient } from "../../../api/concept";

export const WrongIngredient: React.FC<Ingredient> = (ps) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + `/sprite/Slot_sbagliato.png`} />
    </div>
  );
};
