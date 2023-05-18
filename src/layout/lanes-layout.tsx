import { Direction } from "../api/concept";

type Elm = React.ReactElement;

export const LanesLayout: React.FC<{
  lanes: Elm[];
}> = (ps) => {
  return (
    <div className="grid grid-cols-4 items-center justify-items-center">
      <div>{ps.lanes["0"]}</div>
      <div>{ps.lanes["1"]}</div>
      <div>{ps.lanes["2"]}</div>
      <div>{ps.lanes["3"]}</div>
      <div>{ps.lanes["4"]}</div>
      <div>{ps.lanes["5"]}</div>
      <div>{ps.lanes["6"]}</div>
      <div>{ps.lanes["7"]}</div>
    </div>
  );
};
