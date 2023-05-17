export const CorrectIngredient: React.FC<{ ingredient: string }> = (ps) => {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + `/sprite/Slot_corretto.png`} />
    </div>
  );
};
