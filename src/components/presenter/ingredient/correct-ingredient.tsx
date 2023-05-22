export const CorrectIngredient: React.FC<{ ingredientName: string }> = (ps) => {
  return (
    <div className="h-full w-full relative flex justify-center items-center ">
      <img src={process.env.PUBLIC_URL + `/sprite/Slot_corretto.png`} />
      <img
        src={process.env.PUBLIC_URL + `/icons/${ps.ingredientName}.png`}
        className="absolute z-50"
      />
    </div>
  );
};
