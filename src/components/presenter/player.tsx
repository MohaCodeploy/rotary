import { PlayerReport } from "../../api/concept";

export const Player: React.FC<PlayerReport> = (ps) => {
  return <div>{ps.name}</div>;
};
