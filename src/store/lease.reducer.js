import { updateObject } from "../utils";
import { leaseConstants } from "../constants";


const initialState = {
  current_lease: undefined,
  lease_signed: false
};

export const leaseReducer = (currentState = initialState, action) => {
  let update = {};

  switch (action.type) {


    default: break;
  }

  return updateObject(currentState, update);
};
