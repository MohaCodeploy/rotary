import { Direction } from "../App";

type Elm = React.ReactElement;

export const BoardLayout: React.FC<{
  players: [Elm, Elm, Elm, Elm];
  lanes: Elm;
  bucketContainer: Elm;
  ingredientsList: Elm;
}> = (ps) => (
  <div className="h-screen w-screen">
    <div className="flex justify-between  w-full h-full">
      <div className="flex flex-col justify-between">
        <div>{ps.players["0"]}</div>
        <div>{ps.players["1"]}</div>
      </div>

      <div className="flex justify-center items-center h-full w-full relative">
        <div className="absolute">{ps.bucketContainer}</div>
        <div className="z-50">{ps.lanes}</div>
      </div>

      <div className="flex flex-col justify-between">
        <div>{ps.players["2"]}</div>
        <div>{ps.players["3"]}</div>
      </div>

      <div>{ps.ingredientsList}</div>
    </div>
  </div>
);
