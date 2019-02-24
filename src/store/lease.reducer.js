import { updateObject } from "../utils";
import { leaseConstants } from "../constants";


const initialState = {
  current_lease: undefined,
  lease_signed: false,
  leases: [
    {
      address1: '123 Main St.',
      address2: 'San Francisco, CA 94103',
      name: 'Mike Johnson',
      id: '123main'
    },
    {
      address1: '254 Beale St.',
      address2: 'San Francisco, CA 94103',
      name: 'Patrick Stewart',
      id: '254beale'
    },
    {
      address1: '405 Howard St.',
      address2: 'San Francisco, CA 94103',
      name: 'Mr. Orrick',
      id: '405howard'
    },
    {
      address1: '365 Year St.',
      address2: 'San Francisco, CA 94103',
      name: 'None',
      id: '365year'
    },

    {
      address1: '1232 Mouser St.',
      address2: 'San Francisco, CA 94103',
      name: 'None',
      id: '1232mouser'
    },
    {
      address1: '254 Beale St.',
      address2: 'San Francisco, CA 94103',
      name: 'John Stewart',
      id: '254beale'
    },
    {
      address1: '443 Arizona St.',
      address2: 'San Francisco, CA 94103',
      name: 'Shirley Temple',
      id: '443arizona'
    }
  ]
};

export const leaseReducer = (currentState = initialState, action) => {
  let update = {};

  switch (action.type) {


    default: break;
  }

  return updateObject(currentState, update);
};
