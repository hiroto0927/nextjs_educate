import { TPropsPokemonDetails } from "@/types/pokemon";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useGetPokemon(URL?: string) {
  const [pokemon, setPokemon] = useState<TPropsPokemonDetails>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (URL === undefined) return;

    setLoading(true);

    axios
      .get(URL)
      .then((response: AxiosResponse<TPropsPokemonDetails>) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [URL]);

  return { pokemon, isLoading };
}
