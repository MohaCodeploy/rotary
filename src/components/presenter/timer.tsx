import { TimeReport } from "../../api/concept";

export const Timer: React.FC<TimeReport> = (ps) => {
  return (
    <div className="h-[170px] w-[200px] flex items-center justify-center pl-4 font-[Rotary]  text-3xl">
      {ps.time}
    </div>
  );
};
