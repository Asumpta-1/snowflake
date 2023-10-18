import React from "react";

function Square({ value, onHandleClick }) {
  return (
    <div>
      <button className="btn" onClick={onHandleClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
