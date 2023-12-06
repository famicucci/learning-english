"use client";
import { useCallback, useReducer } from "react";

const initialState = { backgroundColor: "bg-orange-500" };

const reducer = (state, action) => {
  switch (action) {
    case "orange":
      return { backgroundColor: "bg-orange-500" };
    case "pink":
      return { backgroundColor: "bg-pink-500" };
    default:
      return { backgroundColor: "initial" };
  }
};

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 className={`${state.backgroundColor} text-4xl`}>Hello Reducer!!</h1>
      <div className="mt-3">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch("orange");
          }}
        >
          Orange
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-3"
          onClick={() => {
            dispatch("pink");
          }}
        >
          Pink
        </button>
      </div>
    </>
  );
}
