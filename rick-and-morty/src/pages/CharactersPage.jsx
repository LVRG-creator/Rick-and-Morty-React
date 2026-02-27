// Assignment 2 CharactersPage (“I just learned axios”)
// const [characters, setCharacters] = useState([]);
// useEffect(() => {
//   axios.get("https://rickandmortyapi.com/api/character")
//     .then(res => setCharacters(res.data.results));
// }, []);
// return characters.map(c => <div>{c.name}</div>);

// Assignment 3 CharactersPage (we discovered useNavigate + useParams)
// <Button onClick={() => navigate(`/character/${char.id}`)}>
//   View Details
// </Button>

import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();

  // Assignment 4: grabbing favs + toggle from App.jsx
  const { favorites, toggleFavorite } = useOutletContext();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!searchName.trim()) return;

    try {
      const url = `https://rickandmortyapi.com/api/character/?name=${searchName}`;
      const response = await axios.get(url);

      const filtered = response.data.results.filter((char) =>
        char.name.toLowerCase().includes(searchName.toLowerCase())
      );

      setCharacters(filtered);
} catch (error) {
  console.log("bro API said nope:", error);
  setCharacters([]);
}
  }

  function isFavorite(char) {
    return favorites.some((f) => f.id === char.id);
  }

  return (
    <>
      <h1 className="mb-4">Search Characters</h1>

      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Type a character name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </InputGroup>
      </form>

      <div>
        {favorites.length > 0 && (
          <Button
            variant="info"
            className="mb-4"
            onClick={() => navigate("/favorites")}
          >
            View Favorites ({favorites.length})
          </Button>
        )}

      </div>
      
      <div>
        {characters.length === 0 && searchName.trim() !== "" && (
          <p className="text-black-500 font-black text-center mb-20">
            No characters found BRUV. Try something different you silly goose.
          </p>
        )}
      </div>
      <div className="row">
        {characters.map((char) => (
          <div key={char.id} className="col-md-3 mb-4 transition-transform duration-300 hover:scale-110">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={char.image} />

              <Card.Body>
                <Card.Title>{char.name}</Card.Title>

                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => navigate(`/character/${char.id}`)}
                >
                  View Details
                </Button>

                <Button
                  variant={isFavorite(char) ? "danger" : "outline-warning"}
                  onClick={() => toggleFavorite(char)}
                >
                  {isFavorite(char) ? "Remove Fav" : "Add Fav"}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}