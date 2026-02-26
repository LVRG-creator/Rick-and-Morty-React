// pulling in the react-bootstrap navbar pieces
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// pulling in Link so React Router can handle navigation
import { Link } from "react-router-dom";

// this is the navbar that sits on top of every page
export default function Header() {
  return (
    <>
        <style>
            {`
            @keyframes portalSwirl {
                0%   { transform: rotate(0deg); }
                40%  { transform: rotate(8deg); }
                70%  { transform: rotate(-8deg); }
                100% { transform: rotate(0deg); }
            }
            `}
        </style>

        {/* // using some sci fi colors and lime green for the navbar */}
        <Navbar expand="lg" className="mb-4 bg-[#97ff4c] shadow-[0_0_20px_#00b300] text-[#0a0a0a] font-semibold hover:shadow-[0_0_10px_#00b300] rounded-md px-2 transition-all">
        <Container>
            {/* brand logo — using Link instead of href */}
            <Navbar.Brand as={Link} to="/">
            Rick & Morty App
            </Navbar.Brand>

            {/* hamburger menu for mobile */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* collapsible nav section */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                {/* using React Router links instead of href */}
                <Nav.Link as={Link} to="/" className="
                  text-black font-semibold px-2 rounded-md transition-all
                  hover:shadow-[0_0_10px_#39ff14,0_0_20px_#0f9d00]
                  hover:animate-[portalSwirl_0.6s_ease-in-out]
                "
                >
                Home
                </Nav.Link>

                <Nav.Link as={Link} to="/about" className="
                  text-black font-semibold px-2 rounded-md transition-all
                  hover:shadow-[0_0_10px_#39ff14,0_0_20px_#0f9d00]
                  hover:animate-[portalSwirl_0.6s_ease-in-out]
                "
                >
                About
                </Nav.Link>

                <Nav.Link as={Link} to="/character" className="
                  text-black font-semibold px-2 rounded-md transition-all
                  hover:shadow-[0_0_10px_#39ff14,0_0_20px_#0f9d00]
                  hover:animate-[portalSwirl_0.6s_ease-in-out]
                "
                >
                Characters
                </Nav.Link>

                {/* now users can get to the favorites page from the navbar */}
                <Nav.Link as={Link} to="/favorites" className="
                  text-black font-semibold px-2 rounded-md transition-all
                  hover:shadow-[0_0_10px_#39ff14,0_0_20px_#0f9d00]
                  hover:animate-[portalSwirl_0.6s_ease-in-out]
                "
                >Favorites</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}