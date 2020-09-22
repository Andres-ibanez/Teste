import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { cadastrar } from "../actions/userActions";
import PropTypes from "prop-types";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";

export const FormScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    ID: Math.round(Math.random() * 1000),
    nome: "",
    sobrenome: "",
    cargo: "",
    nacimento: "",
    salario: ""
  });

  const { ID, nome, sobrenome, cargo, nacimento, salario } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cadastrar(ID, nome, sobrenome, cargo, nacimento, salario));
    reset();
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1>Cadastrar</h1>
        <hr />

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              placeholder="Nome"
              autoComplete="off"
              value={nome}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Sobrenome:</Form.Label>
            <Form.Control
              type="text"
              name="sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              autoComplete="off"
              value={sobrenome}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Cargo:</Form.Label>
            <Form.Control
              type="text"
              name="cargo"
              className="form-control"
              placeholder="Cargo"
              autoComplete="off"
              value={cargo}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Data de Nacimento:</Form.Label>
            <Form.Control
              name="nacimento"
              placeholder="dd/mm/yyyy"
              className="form-control"
              value={nacimento}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Salario:</Form.Label>
            <Form.Control
              type="text"
              name="salario"
              className="form-control"
              placeholder="Salario"
              autoComplete="off"
              value={salario}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Cargo</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

FormScreen.PropTypes = {
  ID: PropTypes.number,
  nome: PropTypes.string,
  sobrenome: PropTypes.string,
  cargo: PropTypes.string,
  nacimento: PropTypes.string,
  salario: PropTypes.string
};
