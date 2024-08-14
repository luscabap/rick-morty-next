import { TCharacter } from "@/types/TCharacter"
import { TInfo } from "@/types/TInfo";

type CharacterAPIResponse = {
  info: TInfo;
  results: TCharacter[];
};

const getPersonsList = async (): Promise<CharacterAPIResponse> => {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  const data = res.json();

  return data;
}

const GetUniquePerson = async (id: string): Promise<TCharacter> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const data = await res.json();

  return data;
}

export async function generateStaticParams(){
  const data = await getPersonsList();

  return data.results.map(item => ({
    id: item.id.toString()
  }))
}

const Personagem = async ({ params }: {params: any}) => {
  const id = params.id;
  const personagem = await GetUniquePerson(id);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={personagem.image} alt="" />
      <h1>{personagem.name}</h1>
      <ul>
        <li>{personagem.created}</li>
        <li>{personagem.location.name}</li>
        <li>{personagem.species}</li>
        <li>{personagem.origin.name}</li>
        <li>{personagem.type}</li>
      </ul>
      <p>{personagem.gender}</p>

    </div>
  )
}

export default Personagem;