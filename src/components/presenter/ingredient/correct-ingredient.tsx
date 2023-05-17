import { Ingredient } from "../../../api/concept";

export const CorrectIngredient: React.FC<Ingredient> = (ps) => {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + `/sprite/Slot_corretto.png`} />
    </div>
  );
};
