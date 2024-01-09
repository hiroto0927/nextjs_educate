/* eslint-disable @next/next/no-img-element */
import useGetPokemon from "@/hooks/get-pokemon-detail";

type TPropsPokemonCard = {
  url: string;
};

export default function PokemonCard(props: TPropsPokemonCard) {
  const { pokemon, isLoading } = useGetPokemon(props.url);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="text-center m-auto bg-slate-300 w-[200px] rounded-md p-5 shadow-xl">
      <div>
        <div className="m-auto w-[100px] h-[100px]">
          <img src={pokemon?.sprites.other.home.front_default} alt="" />
        </div>
        <h3 className="text-2xl">{pokemon?.name}</h3>
        <div>
          <div>タイプ</div>
          {pokemon?.types.map((poke, i) => (
            <div key={i}>{poke.type.name}</div>
          ))}
        </div>
        <div>
          <p>重さ:{pokemon?.weight}</p>
          <p>高さ:{pokemon?.height}</p>
          <p className="whitespace-nowrap">
            アビリティ:{pokemon?.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
}
