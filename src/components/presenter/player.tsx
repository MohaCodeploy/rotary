import { PlayerReport } from "../../api/concept";

export const Player: React.FC<PlayerReport> = (ps) => {
  return (
    <div className="h-[230px] font-[Rotary] pt-10  text-3xl text-white flex items-center justify-center">
      {ps.name}
    </div>
  );
};
