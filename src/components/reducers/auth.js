import { ActionTypes } from "../../constants/reducerActionTypers";

const authReducer = (state = { authData: null }, action) => {
  switch (action.types) {
    case ActionTypes.AUTH:
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, authData: action.payload };
    case ActionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
