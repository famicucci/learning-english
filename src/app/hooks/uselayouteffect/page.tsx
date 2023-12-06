"use client";
import { useLayoutEffect, useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    if (counter === 0) {
      setCounter(Math.random() * 200);
    }
  }, [counter]);

  return (
    <>
      <h2 className="text-xl mb-4">{counter.toFixed(2)}</h2>
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => {
          setCounter(0);
        }}
      >
        UseLayoutEffect
      </h1>
    </>
  );
}
