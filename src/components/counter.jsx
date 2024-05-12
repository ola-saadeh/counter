import React from "react";

function Counter({ counter, onIncrement, onDecrement, onDelete }) {
  const getClasses = () => {
    const { value } = counter;
    return `badge span-o2 m-2 bg-${value === 0 ? "blue" : "o2"}`;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className="row  hola">
      <div className="col d-flex justify-content-center">
        <span
          className={getClasses()}
        >
          {formatCount()}
        </span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onIncrement(counter)}
        >
          <i class="fa-solid fa-square-plus"></i>
        </button>
        <button
          className=" btn bg-awq m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          <i class="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter.id)}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Counter;
