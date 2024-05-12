import React, { useState } from "react";
import Headder from "./components/Headder";
import Counters from "./components/counters";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };

  const handleDec = (counter)=>{
    const newcounters= counters.map((c)=>{
      if(c.id == counter.id){
        return {...c, value : c.value -1};
      }
      return c;
    });
    setCounters(newcounters);
  };

  const handleReset = () => {
    const updatedCounters = counters.map((c) => {
      return { ...c, value: 0 };
    });
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId) => {
    const updatedCounters = counters.filter((c) => c.id !== counterId);
    setCounters(updatedCounters);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="maincon">
      <main className="container">
        <div className="box">
          <Headder tCounters={counters.filter((c) => c.value > 0).length} />
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDec}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
