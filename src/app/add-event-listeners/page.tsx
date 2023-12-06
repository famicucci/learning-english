"use client";
import { useEffect } from "react";

export default function Home() {
  const handleResize = () => {
    console.log("resize");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // show alert before reload page
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "Estas queriendo refrescar la página?";
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Esta es es para practicar el manejo de event listeners</p>
        <button id="show">Cerrar</button>
      </main>
      <dialog>
        <h1>Estas seguro de querer salir?</h1>
        <button>Si</button>
        <button>No</button>
      </dialog>
    </>
  );
}
