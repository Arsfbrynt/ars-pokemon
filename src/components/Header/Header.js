import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
          <Link to="/">
          <h2>Ars Pokemon Katalog</h2>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
