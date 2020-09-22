import { types } from "../types/types";

export const cadastrar = (ID, nome, sobrenome, cargo, nacimento, salario) => {
  return {
    type: types.cadastrar,
    payload: {
      ID,
      nome,
      sobrenome,
      cargo,
      nacimento,
      salario
    }
  };
};

export const atualizar = (index) => {
  return {
    type: types.atualizar,
    payload: {
      index
    }
  };
};

export const apagar = (ID) => {
  return {
    type: types.apagar,
    payload: {
      ID
    }
  };
};
