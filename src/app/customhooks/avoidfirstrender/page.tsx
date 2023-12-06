"use client";
import { Button, Title } from "@/app/components";
import { useEffect, useRef, useState } from "react";
import useAvoidFirstRender from "./hooks/useAvoidFirstRender";

export default function Page() {
  const [count, setCount] = useState(0);
  console.log("Page");
  useAvoidFirstRender({
    callBack: () => {
      console.log("Avoid render this on first render");
    },
  });
  //   const titleColor = useRef(null);

  return (
    <>
      <h1 className="text-2xl font-bold">UseUpdateEffect</h1>
      <p onClick={() => console.log("re-render")}>
        Este hook evita que se ejecute el efecto en la primera renderización.
      </p>
      <p className="my-5">Count: {count}</p>
      <Button
        color="pink"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Click me
      </Button>
    </>
  );
}
