import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="">
        <Nav className="m-auto">
          <NavLink
            to={"/"}
            className="nav-link"
            style={({ isActive }) => ({ color: isActive && "red" })}
          >
            Home
          </NavLink>
          <NavLink to={"/about"} className="nav-link">
            About Me
          </NavLink>
          <NavLink to={"/projects"} className="nav-link">
            My Projects
          </NavLink>
          <NavLink to={"/contact"} className="nav-link">
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
