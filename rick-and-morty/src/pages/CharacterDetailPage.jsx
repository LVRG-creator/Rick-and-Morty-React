import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterDetailPage() {
  const { id } = useParams(); // grabbing the lil id from the URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const response = await axios.get(url);
      setCharacter(response.data);
    }
    fetchCharacter();
  }, [id]);

  if (!character) return <h2>Loading...</h2>;

  return (
    <div className="flex flex-col items-center text-center mt-10">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      {/* <p>Location: {character.location.url}</p>
      <p>Episode: {character.episode}</p> */}
    </div>
  );
}