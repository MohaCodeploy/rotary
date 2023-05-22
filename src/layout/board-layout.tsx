type Elm = React.ReactElement;

export const BoardLayout: React.FC<{
  gameInfo: [Elm, Elm, Elm, Elm];
  lanes: Elm;
  bucketContainer: Elm;
  ingredientsList: Elm;
}> = (ps) => (
  <div className="bg-custom-background bg-cover bg-center">
    <div className="h-screen w-screen">
      <div className="flex justify-between  w-full h-full">
        <div className="flex flex-col h-full w-[215px]">
          <div className="basis-1/2 ">{ps.gameInfo["0"]}</div>
          <div className="basis-1/2 ">{ps.gameInfo["1"]}</div>
        </div>

        <div className="flex justify-center items-center h-full w-full relative pr-3 pt-3">
          <div className="absolute">{ps.bucketContainer}</div>
          <div className="z-50">{ps.lanes}</div>
        </div>

        <div className="flex flex-col w-[215px] h-full">
          <div className="basis-1/2 ">{ps.gameInfo["2"]}</div>
          <div className="basis-1/2">{ps.gameInfo["3"]}</div>
        </div>

        <div>{ps.ingredientsList}</div>
      </div>
    </div>
  </div>
);
