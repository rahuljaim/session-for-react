import * as ActionType from "../constants/ActionType";

let initialState = {
  data: [],
  error: "",
};

export const uReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA: {
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    }
    case ActionType.U_ERROR: {
      console.log("reducer", action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
