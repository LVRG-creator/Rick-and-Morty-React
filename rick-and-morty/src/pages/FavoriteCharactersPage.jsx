import { useOutletContext } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function FavoriteCharactersPage() {
  // grabbing favorites from App.jsx
  const { favorites } = useOutletContext();

  return (
    <>
      <h1>Your Favorite Characters</h1>

      {/* if they have 0 favorites, tell them to go pick some */}
      {favorites.length === 0 && (
        <p>You haven't picked any favorites yet. Go choose some!</p>
      )}

      <div className="row mt-4">
        {favorites.map((char) => (
          <div key={char.id} className="col-md-3 mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={char.image} />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {char.status} <br />
                  <strong>Species:</strong> {char.species}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* fun little message when they hit 4 favorites */}
      {favorites.length === 4 && (
        <p className="mt-3">
          You’ve selected your full squad of 4! Nice work.
        </p>
      )}
    </>
  );
}