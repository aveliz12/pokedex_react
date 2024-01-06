import { Pokemon } from "../models/Pokemon_model";

export async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );

  const data = await response.json();
  const pokemons = data.results.map((value: any) => ({
    id: value.national_number,
    name: value.name,
    evolution: value.evolution,
    imggif: fixName(value.sprites["animated"]),
    imglarge: value.sprites["large"],
    imgnormal: value.sprites["normal"],
    typeA: value.type[0],
    typeB: value.type[1],
    total: value.total,
    hp: value.hp,
    attack: value.attack,
    defense: value.defense,
    sp_atk: value.sp_atk,
    sp_def: value.sp_def,
    speed: value.speed,
  }));

  const unicPokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return unicPokemons;
}

export function fixName(name: string): string {
  if (name.includes("♂")) {
    return name.replace("♂", "-m");
  } else if (name.includes("♀")) {
    return name.replace("♀", "-f");
  } else {
    return name;
  }
}
