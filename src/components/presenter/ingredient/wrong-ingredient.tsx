export const WrongIngredient: React.FC<{ ingredient: string }> = (ps) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + `/sprite/Slot_sbagliato.png`} />
    </div>
  );
};
