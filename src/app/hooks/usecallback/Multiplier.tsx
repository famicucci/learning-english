import { memo, useEffect } from "react";

interface MultiplierProps {
  handleClick: (value: number) => void;
}

function Multiplier({ handleClick }: MultiplierProps) {
  useEffect(() => {
    console.log("Multiplier mounted");
    return () => {
      console.log("Multiplier unmounted");
    };
  }, []);

  return (
    <button
      className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded"
      onClick={handleClick}
    >
      Multiplier!!
    </button>
  );
}

export default memo(Multiplier);
