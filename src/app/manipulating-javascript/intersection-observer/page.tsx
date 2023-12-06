"use client";
import { useEffect, useRef } from "react";
import Section from "./Section";

export default function Page() {
  const titleSectionImg = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const classes = [
        "transition",
        "transform",
        "scale-y-150",
        "duration-1000",
        "delay-400",
        "ease-in-out",
      ];
      if (entries[0].isIntersecting) {
        console.log("Ya es visible");
        document.title = "Ya es visible";
        titleSectionImg.current.classList.add(...classes);
      } else {
        titleSectionImg.current.classList.remove(...classes);
        console.log("Aun no es visible");
        document.title = "Aun no es visible";
      }
    });

    observer.observe(titleSectionImg.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col justify-between" style={{ height: "5000px" }}>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <Section />
      <section>
        <h1 ref={titleSectionImg} className="text-2xl font-bold">
          Section with Image
        </h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Intersection Observer</h1>
        <h2>Manipulando el DOM con Javascript</h2>
        <p>
          El Intersection Observer API provee una manera de observar cambios en
          un elemento que está siendo observado, o el documento entero. Es
          diseñado para ser más eficiente que los anteriores, y a diferencia de
          ellos, es capaz de notificar cambios en la posición de un elemento.
        </p>
      </section>
    </div>
  );
}
