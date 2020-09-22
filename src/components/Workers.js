import React from "react";
import { useDispatch } from "react-redux";

import { connect } from "react-redux";

import { Container, Table, Button } from "react-bootstrap";
import { apagar } from "../actions/userActions";

const Workers = ({ funcionarios }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(apagar(e.target.name));
  };

  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Cargo</th>
            <th>Data de Nacimento</th>
            <th>Salario R$</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(
            ({ ID, nome, sobrenome, cargo, nacimento, salario }, index) => (
              <tr key={index}>
                <td>{nome}</td>
                <td>{sobrenome}</td>
                <td>{cargo}</td>
                <td>{nacimento}</td>
                <td>{salario}</td>
                <td>
                  <Button variant="danger" onClick={handleClick} name={ID}>
                    X
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default connect((state) => ({ funcionarios: state.funcionarios }))(
  Workers
);
