import * as ActionTypes from "../ActionTypes";

const initVal = {
  data: null,
};

export const apiReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.READ_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.POST_DATA:
      return {
        ...state,
        data: state.data.concat(action.paylaod),
      };
      case ActionTypes.DELET_DATA:
        return {
          ...state,
          data: state.data.filter(b => b.id !== action.payload)
        };
    default:
      return state;
  }
};
