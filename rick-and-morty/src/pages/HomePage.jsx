// homepage component
export default function HomePage() {
  return (
    // quick styling directly on the div
    <div style={{ padding: "2rem", textAlign: "center" }}>
      
      {/* big loud text to grab attention */}
      <h1 className="text-5xl text-red500">Wubba Lubba Dub Dub!</h1>

      {/* tiny hype message for the show */}
      <p>Watch Rick and Morty — portal gun not included.</p>
    </div>
  );
}