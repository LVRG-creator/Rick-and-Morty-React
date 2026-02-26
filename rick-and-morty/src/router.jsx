// Assignment 1 router (literally one page lol)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <HomePage /> }
//     ]
//   }
// ]);

// Assignment 2 router (we added pages + NotFound and felt like pros)
// children: [
//   { index: true, element: <HomePage /> },
//   { path: "about", element: <AboutPage /> },
//   { path: "character", element: <CharactersPage /> },
//   { path: "*", element: <NotFound /> }
// ]

// Assignment 3 router (dynamic route era unlocked)
// { path: "character/:id", element: <CharacterDetailPage /> }

import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "character", element: <CharactersPage /> },
      { path: "character/:id", element: <CharacterDetailPage /> },
      { path: "favorites", element: <FavoriteCharactersPage /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router;