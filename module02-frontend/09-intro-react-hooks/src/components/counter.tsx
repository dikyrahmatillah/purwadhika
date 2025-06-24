"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="card">
      <button
        className="p-2 rounded-sm bg-lime-400"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <p>{counter}</p>
      <button
        className="p-2 rounded-sm bg-fuchsia-400"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
}
