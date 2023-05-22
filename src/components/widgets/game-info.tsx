import { GameInfo } from "../../api/concept";
import { Player } from "../presenter/player";
import { Round } from "../presenter/round";
import { Timer } from "../presenter/timer";
import clsx from "clsx";

interface GameInfoBox {
  data: GameInfo;
  degree: number;
}
export const GameInfoBox: React.FC<GameInfoBox> = (ps) => {
  return (
    <div
      className={clsx({
        "rotate-0 flex flex-col justify-between": ps.degree === 0,
        "rotate-90 flex flex-row-reverse": ps.degree === 90,
        "rotate-180 flex flex-col justify-between": ps.degree === 180,
        "-rotate-90 pb-4 flex flex-col justify-between": ps.degree === 270,
      })}
    >
      <Player name={ps.data.playerName} />
      <Round round={ps.data.round} />
      <Timer time={ps.data.time} />
    </div>
  );
};
