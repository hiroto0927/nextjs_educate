type TPropsPokemon = {
  name: string;
  url: string;
};

export type TPropsPokemonsList = {
  count: number;
  next: string;
  previous: string;
  results: TPropsPokemon[];
};

type TPropsPokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type TPropsAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type TPropsPokemonImage = {
  other: {
    home: {
      front_default: string;
    };
  };
};

export type TPropsPokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: TPropsPokemonType[];
  abilities: TPropsAbility[];
  sprites: TPropsPokemonImage;
};
