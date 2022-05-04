import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((tile, index) =>{
       return <Tile key={index} tile={tile} />
       })}
    </div>
  );
};
