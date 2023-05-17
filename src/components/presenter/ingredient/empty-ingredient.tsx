export const EmptyIngredient: React.FC<{ ingredient: string }> = (ps) => {
  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + `/sprite/Empty-bg.png`} />
      <img
        src={process.env.PUBLIC_URL + `/empty-icons/${ps.ingredient}.png`}
        className="absolute z-50"
      />
    </div>
  );
};
