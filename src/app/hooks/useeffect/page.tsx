"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const incrementer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(incrementer);
    };
  }, []);

  return (
    <>
      <h2 className="text-base">{counter}</h2>
      <h1 className="text-xl font-bold">UseEffect</h1>
    </>
  );
}
