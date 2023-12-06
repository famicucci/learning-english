"use client";
import { useEffect, useState, useTransition } from "react";

export default function Page() {
  const [input, setInput] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemos, setFilteredPokemos] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  const handleChanghe = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      setFilteredPokemos(
        pokemons.filter((pokemon) => {
          return pokemon.name.includes(input);
        })
      );
    });
  };

  return (
    <>
      <input type="text" onChange={handleChanghe} value={input} />
      {isPending ? <p>Loading...</p> : null}
      {filteredPokemos.map((pokemon) => {
        return <p key={pokemon.name}>{pokemon.name}</p>;
      })}
    </>
  );
}
