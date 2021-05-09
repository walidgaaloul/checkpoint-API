import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Navb = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark"  fixed="top">
        <Navbar.Brand href="#home">CHECKPOINT API AND SERVICE WEB</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link><Link to="/" className="nav">
            Home
          </Link></Nav.Link>
          <Nav.Link><Link to="/users" className="nav">
            Users
          </Link></Nav.Link>
        </Nav>
     
      </Navbar>
    </div>
  );
};
export default Navb;