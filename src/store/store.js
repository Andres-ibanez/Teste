import { createStore, combineReducers } from "redux";
import { formReducer } from "../reducers/funcionariosReducer";

const reducers = combineReducers({
  funcionarios: formReducer
});

const persistedState = localStorage.getItem("funcionariosState")
  ? JSON.parse(localStorage.getItem("funcionariosState"))
  : {};

export const store = createStore(
  reducers,
  persistedState
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("funcionariosState", JSON.stringify(store.getState()));
  console.log(store.getState());
});
