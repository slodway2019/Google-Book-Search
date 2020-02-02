import React from "react";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./nomatch.css";

const NoMatch = () => (
  <Container>
    <Jumbotron>
      <h1>404 Page Not Found</h1>
    </Jumbotron>
  </Container>
);

export default NoMatch;