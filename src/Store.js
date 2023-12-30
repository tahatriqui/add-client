import { legacy_createStore } from "redux";

const Reducer = (state = { ajoute: [] }, action) => {
  switch (action.type) {
    case "ajouter":
      return {
        ...state,
        ajoute: [...state.ajoute, action.payload],
      };
    default:
      return state;
  }
};

const store = legacy_createStore(Reducer);

export default store;
