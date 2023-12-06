"use client";
import { useCallback, useState } from "react";
import Multiplier from "./Multiplier";

export default function Page() {
  const [count, setCount] = useState(0);

  const handleMultiplier = useCallback(() => {
    setCount((currentValue) => currentValue * 3);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <div className="my-3">
        <button
          className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me!
        </button>
        <Multiplier handleClick={handleMultiplier} />
      </div>
      <h1 className="text-xl font-bold cursor-pointer">UseCallback</h1>
    </>
  );
}
