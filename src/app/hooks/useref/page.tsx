"use client";
import { useEffect, useRef } from "react";

export default function Page() {
  const clock = useRef(null);
  const explanation = useRef(null);
  const text = "Esto es para ver como funciona useRef";

  useEffect(() => {
    const writting = () =>
      text.split("").forEach((letter, index) => {
        setTimeout(() => {
          explanation.current.textContent += letter;
        }, index * 100);
      });

    const clockFunction = setInterval(() => {
      clock.current.textContent = new Date().toLocaleTimeString();
    }, 1000);

    return () => {
      writting();
      clearInterval(clockFunction);
    };
  });

  return (
    <>
      <h1 className="text-xl font-bold cursor-pointer">UseRef</h1>
      <p
        className="text-xl font-bold cursor-pointer
        text-blue-600 hover:text-blue-800"
        ref={clock}
      ></p>
      <p ref={explanation}></p>
    </>
  );
}
