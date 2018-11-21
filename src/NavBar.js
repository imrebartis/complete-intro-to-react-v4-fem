import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";

const Container = styled("header")`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBar = () => (
  <Container>
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      {/* eslint-disable-next-line */}
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </Container>
);

export default NavBar;
