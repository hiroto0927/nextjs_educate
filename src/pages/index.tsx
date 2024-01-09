import Button from "@/components/buttons/button";
import PokemonCard from "@/components/cards/card";
import Header from "@/components/headers/header";
import useGetPokemonList from "@/hooks/get-pokemon-list";
import { useState } from "react";

const POKEMON_INITIAL_API_URL = "https://pokeapi.co/api/v2/pokemon/";

export default function Home() {
  const [URL, setURL] = useState<string | undefined>(POKEMON_INITIAL_API_URL);
  const { pokeListState, isLoading } = useGetPokemonList(URL);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <main className={`h-full w-full bg-slate-200`}>
      <Header />
      <div className="grid grid-cols-3 gap-4 p-5">
        {pokeListState?.results.map((poke, i) => (
          <PokemonCard url={poke.url} key={i} />
        ))}
      </div>
      <div className="flex justify-center gap-16 p-5">
        {pokeListState?.previous && (
          <Button
            onClick={() => {
              setURL(pokeListState?.previous);
              window.scrollTo(0, 0);
            }}
          >
            前へ
          </Button>
        )}
        {pokeListState?.next && (
          <Button
            onClick={() => {
              setURL(pokeListState?.next);
              window.scrollTo(0, 0);
            }}
          >
            次へ
          </Button>
        )}
      </div>
    </main>
  );
}
