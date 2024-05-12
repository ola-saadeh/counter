import React from "react";

// Stateless Functional Component

const Headder = ({ tCounters }) => {
  return (
    <div className="position-absolute  start-50 translate-middle">
         <i className="fa fa-shopping-cart fa-lg m-3"  />
        <span
          className="  rounded-pill bg-o2 m-2"
        >
          {tCounters}
        </span>
        Items
      
    </div>
  );
};

export default Headder;
