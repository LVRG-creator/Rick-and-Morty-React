// Assignment 1 AboutPage (literally just text lol)
// export default function AboutPage() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is the Rick & Morty app. More stuff coming soon...</p>
//     </div>
//   );
// }

// Assignment 2 AboutPage (we tried to fetch but kinda winged it)
// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// export default function AboutPage() {
//   const [characterData, setCharacterData] = useState();
//   useEffect(fetchData, []);
//   async function fetchData() {
//     let url = "https://rickandmortyapi.com/api/character/[1,2]";
//     const response = await Axios.get(url);
//     setCharacterData(response.data);
//   }
//   return (
//     <div>
//       <h1>About Page</h1>
//       {characterData && characterData.map((c) => (
//         <div>
//           <img src={c.image} />
//           <p>{c.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// Assignment 4 AboutPage
// now we:
// - describe the show
// - fetch Rick + Morty properly
// - show them in a clean layout
// - use useEffect + axios the right way
// - keep the junior‑dev vibe

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function AboutPage() {
  // storing the two characters (Rick + Morty)
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // fetching Rick (1) and Morty (2)
    async function fetchData() {
      try {
        // correct endpoint for multiple IDs → /1,2 (NOT [1,2])
        const url = "https://rickandmortyapi.com/api/character/1,2";
        const response = await axios.get(url);

        // API returns an array when you request multiple IDs
        setCharacters(response.data);
      } catch (err) {
        console.log("bro something broke fetching rick & morty:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>About Rick & Morty</h1>

      <p style={{ maxWidth: "700px", marginTop: "1rem" }}>
        Rick & Morty is an animated sci‑fi comedy about a chaotic genius scientist
        (Rick Sanchez) and his anxious grandson (Morty Smith). They travel across
        dimensions, destroy timelines, meet bizarre aliens, and somehow still make
        it home in time for dinner. This app lets you explore characters from the
        show — starting with the two icons themselves.
      </p>

      <h2 className="mt-4">Meet the Main Duo</h2>

      <div className="row mt-3">
        {characters.map((char) => (
          <div key={char.id} className="col-md-4 mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={char.image} />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {char.status} <br />
                  <strong>Species:</strong> {char.species} <br />
                  <strong>Origin:</strong> {char.origin?.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}