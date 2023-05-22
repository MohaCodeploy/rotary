import { RoundReport } from "../../api/concept";

export const Round: React.FC<RoundReport> = (ps) => {
  return (
    <div className="h-[170px] w-[200px] flex justify-center items-center font-[Rotary]  text-3xl">
      {ps.round}
    </div>
  );
};
