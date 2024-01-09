import { TPropsPokemonsList } from "@/types/pokemon";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useGetPokemonList(URL?: string) {
  const [pokeListState, setPokeListState] = useState<TPropsPokemonsList>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (URL === undefined) return;

    setLoading(true);

    axios
      .get(URL)
      .then((response: AxiosResponse<TPropsPokemonsList>) => {
        setPokeListState(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [URL]);

  return { pokeListState, isLoading };
}
