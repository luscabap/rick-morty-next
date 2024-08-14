import { TCharacter } from "@/types/TCharacter";
import { TInfo } from "@/types/TInfo";
import Link from "next/link";

type CharacterAPIResponse = {
  info: TInfo;
  results: TCharacter[];
};

 const getPersonsList = async (): Promise<CharacterAPIResponse> => {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  const data = res.json();

  return data;
 }

export const Persons = async () => {
  const characteres = await getPersonsList();

  return (
    <div className="flex flex-wrap gap-5">
      {
        characteres.results.map(item => (
          <div key={item.id} className="bg-zinc-600 rounded-md flex flex-col items-center justify-center">
            <h4 className="text-green-500 text-center">{item.name}</h4>
            <img src={item.image} alt={item.name} />
            <Link href={`personagem/${item.id.toString()}`}>
              Detalhes d{item.gender === "Female" ? "a" : "o"} {item.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}