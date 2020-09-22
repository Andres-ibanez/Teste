import { types } from "../types/types";

export const formReducer = (state = [], action) => {
  switch (action.type) {
    case types.cadastrar:
      return [
        ...state,
        {
          ID: action.payload.ID,
          nome: action.payload.nome,
          sobrenome: action.payload.sobrenome,
          cargo: action.payload.cargo,
          nacimento: action.payload.nacimento,
          salario: action.payload.salario
        }
      ];

    case types.apagar: {
      const ID = action.payload.ID;
      const resultados = state.filter((funcionario) => funcionario.ID !== +ID);
      return resultados;
    }

    case types.atualizar: {
      const index = action.payload.index;
      return resultados;
    }

    default:
      return state;
  }
};
