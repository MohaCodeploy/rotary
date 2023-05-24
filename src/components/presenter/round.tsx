import { RoundReport } from "../../api/concept";

export const Round: React.FC<RoundReport> = (ps) => {
  return (
    <div className="h-[155px]  w-[200px] flex justify-center items-center font-[Rotary] px-20 text-3xl">
      <p className="">{ps.round}</p>
    </div>
  );
};
