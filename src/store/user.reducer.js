import { updateObject } from "../utils";
import { userConstants } from "../constants";


const initialState = {
  current_user: undefined,
  logged_in: false
};

export const userReducer = (currentState = initialState, action) => {
  let update = {};

  switch (action.type) {

    case userConstants.LOGIN:
      update = {
        ...currentState,
        logged_in: true,
        current_user: 'Stephen'
      };
      break;
    case userConstants.LOGOUT:
      update = {
        ...currentState,
        logged_in: false,
        current_user: undefined
      }
      break;

    default: break;
  }

  return updateObject(currentState, update);
};
