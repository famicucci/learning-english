"use client";
import { useMemo, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = () => {
    return Math.random() * 1000;
  };

  const renderedValue = useMemo(() => expensiveCalculation(), []);

  return (
    <>
      <p
        className="cursor-pointer"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Count: {count}
      </p>
      <p>Rendered value: {renderedValue}</p>
      <h1 className="text-xl font-bold cursor-pointer">UseMemo</h1>
    </>
  );
}
