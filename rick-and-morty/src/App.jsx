// Assignment 1 App (the baby version lol)
// import { Outlet } from "react-router-dom";
// export default function App() {
//   return (
//     <div>
//     {/* just an Outlet sitting here */}
//       <Outlet />
//     </div>
//   );
// }

// Assignment 2 App (we got a navbar)
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
// export default function App() {
//   return (
//     <>
//       <Header />  {/* we have navigation now */}
//       <div className="container mt-4">
//         <Outlet />
//       </div>
//     </>
//   );
// }

// Assignment 4 App
// now App is the “global brain” that stores favorites
// and shares them with all child pages using Outlet context

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  // storing fav characters here bc global-ish state
  const [favorites, setFavorites] = useState([]);

  // this function handles adding/removing favorites
  // also enforces the “max 4 favorites” rule 
  function toggleFavorite(character) {
    setFavorites((prev) => {
      const alreadyFav = prev.find((c) => c.id === character.id);

      if (alreadyFav) {
        // character already in favs → yeet it out
        return prev.filter((c) => c.id !== character.id);
      }

      if (prev.length >= 4) {
        // MAX FOUR
        return prev;
      }

      // ok cool add it
      return [...prev, character];
    });
  }

  return (
  // had a fragment before but got rid of to just do this wrapper for 
    <div className="min-h-screen bg-[linear-gradient(to_bottom_right,#97ce4c,#4aa8f0,#f0e14a)]">

      <Header />

      {/* had to remove the container because Bootstrap was overriding the gradient*/}
      <div className="py-6 px-6">
        <Outlet context={{ favorites, toggleFavorite }} />
      </div>

    </div>

  );
}