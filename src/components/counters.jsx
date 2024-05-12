import React from "react";
import Counter from "./counter";

function Counters({
  onReset,
  onIncrement,
  onDelete,
  onDecrement,
  counters,
  onRestart,
}) {
  return (
    <div>
      <div className="row hola">
        <div className="col d-flex justify-content-center m-5"> 
          <button
            className="btn bg-blue m-2"
            onClick={onReset}
            disabled={counters.length === 0 ? "disabled" : ""}
          >
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
          <button
            className="btn m-2 bg-o         "
            onClick={onRestart}
            disabled={counters.length !== 0 ? "disabled" : ""}
          >
            <i class="fa-solid fa-recycle"></i>
          </button>
        </div>
      </div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Counters;
