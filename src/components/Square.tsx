import React from "react";
import './square.scss'


interface squareProps {
  value:null|number;
  onClick:()=>void;
}
const Square= ({ value, onClick }:squareProps) => {
  return (
    <div
      onClick={onClick}
      className="square"
    >
      <h2>{value}</h2>
    </div>
  );
};

export default Square;
