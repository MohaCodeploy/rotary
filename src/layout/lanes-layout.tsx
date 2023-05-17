import { Direction } from "../App";

type Elm = React.ReactElement;

export const LanesLayout: React.FC<{
  laneDirections: Record<Direction, Elm>;
}> = (ps) => {
  return (
    <div className="grid grid-cols-4 items-center justify-items-center">
      <div>{ps.laneDirections["0"]}</div>
      <div>{ps.laneDirections["1"]}</div>
      <div>{ps.laneDirections["2"]}</div>
      <div>{ps.laneDirections["3"]}</div>
      <div>{ps.laneDirections["4"]}</div>
      <div>{ps.laneDirections["5"]}</div>
      <div>{ps.laneDirections["6"]}</div>
      <div>{ps.laneDirections["7"]}</div>
    </div>
  );
};
