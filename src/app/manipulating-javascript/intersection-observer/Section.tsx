import Image from "next/image";

export default function Section() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Intersection Observer</h1>
      <h2>Manipulando el DOM con Javascript</h2>
      <Image
        src={
          "https://images.unsplash.com/photo-1695757826949-d1ad49ab4386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        }
        alt="Intersection Observer"
        width={300}
        height={300}
        className="rounded-lg shadow-lg transform duration-1000 ease delay-400"
      />
      <p>
        El Intersection Observer API provee una manera de observar cambios en un
        elemento que está siendo observado, o el documento entero. Es diseñado
        para ser más eficiente que los anteriores, y a diferencia de ellos, es
        capaz de notificar cambios en la posición de un elemento.
      </p>
    </section>
  );
}
