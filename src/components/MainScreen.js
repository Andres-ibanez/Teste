import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Workers from "./Workers";

export const MainScreen = () => {
  return (
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1>Gerenciamento de Funcionarios</h1>
          <hr />
          <Workers />
        </Jumbotron>
      </Container>
    </>
  );
};
