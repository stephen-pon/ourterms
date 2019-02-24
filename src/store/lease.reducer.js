import { updateObject } from "../utils";
import { leaseConstants } from "../constants";


const initialState = {
  current_lease: undefined,
  lease_signed: false,
  leases: {
    '123main': {
      address1: '123 Main St.',
      address2: 'San Francisco, CA 94103',
      name: 'Mike Johnson',
      id: '123main',
      term: 'Month to Month'
    },
    '254beale': {
      address1: '254 Beale St.',
      address2: 'San Francisco, CA 94103',
      name: 'Patrick Stewart',
      id: '254beale',
      term: 'Month to Month'
    },
    '405howard': {
      address1: '405 Howard St.',
      address2: 'San Francisco, CA 94103',
      name: 'Mr. Orrick',
      id: '405howard',
      term: '12 Month'
    },
    '365year': {
      address1: '365 Year St.',
      address2: 'San Francisco, CA 94103',
      name: 'None',
      id: '365year',
      term: 'None'
    },
    '1232mouser': {
      address1: '1232 Mouser St.',
      address2: 'San Francisco, CA 94103',
      name: 'None',
      id: '1232mouser',
      term: 'None'
    },
    '333beale': {
      address1: '333 Beale St.',
      address2: 'San Francisco, CA 94103',
      name: 'John Stewart',
      id: '333beale',
      term: 'Month to Month'
    },
    '443arizona': {
      address1: '443 Arizona St.',
      address2: 'San Francisco, CA 94103',
      name: 'Shirley Temple',
      id: '443arizona',
      term: 'Month to Month'
    }
  },

  landlord: 'Stephen Pon',
  address: '1800 Flowers St.',
  city: '',
  state: '',
  zip: '',
  term_start: '',
  term_end: '',
  rent: '',
  deposit: '',
  method: '',
  payment_method: '',
  payment_address: '',

  pet_clause: false,
  smoking_clause: false,
  waterbed_clause: false
};

export const leaseReducer = (currentState = initialState, action) => {
  let update = {};

  switch (action.type) {
    case leaseConstants.EDIT_LANDLORD:
      update = {
        ...currentState,
        landlord: action.val
      }
      break;

    case leaseConstants.EDIT_ADDRESS:
      update = {
        ...currentState,
        address: action.val
      }
      break;

    case leaseConstants.EDIT_CITY:
      update = {
        ...currentState,
        city: action.val
      }
      break;


    case leaseConstants.EDIT_STATE:
      update = {
        ...currentState,
        state: action.val
      }
      break;


    case leaseConstants.EDIT_ZIP:
      update = {
        ...currentState,
        zip: action.val
      }
      break;

    case leaseConstants.EDIT_TERM_START:
      update = {
        ...currentState,
        term_start: action.val
      }
      break;

    case leaseConstants.EDIT_TERM_END:
      update = {
        ...currentState,
        term_end: action.val
      }
      break;

    case leaseConstants.EDIT_RENT:
      update = {
        ...currentState,
        rent: action.val
      }
      break;


    case leaseConstants.EDIT_DEPOSIT:
      update = {
        ...currentState,
        deposit: action.val
      }
      break;

    case leaseConstants.EDIT_METHOD:
      update = {
        ...currentState,
        method: action.val
      }
      break;

    case leaseConstants.EDIT_PAYMENT_METHOD:
      update = {
        ...currentState,
        payment_method: action.val
      }
      break;

    case leaseConstants.EDIT_PAYMENT_ADDRESS:
      update = {
        ...currentState,
        payment_address: action.val
      }
      break;

    case leaseConstants.SET_CURRENT_LEASE:
      update = {
        ...currentState,
        current_lease: action.id
      }
      break;
    case leaseConstants.SAVE_LEASE:
      const id = currentState.address.replace(/\s/g, '').slice(0, -3);

      update = {
        ...currentState,
        leases: {
          ...currentState.leases,
          id: {
            address1: currentState.address,
            address2: currentState.city + ', ' + currentState.state + ' ' + currentState.zip,
            name: 'None',
            id: id,
            term: 'None'
          }
        }
      }
      break;
    case leaseConstants.SIGN_LEASE:
      update = {
        ...currentState,
        leases: {
          ...currentState.leases,
          [action.id]: {
            ...currentState.leases[action.id],
            signed: true
          }
        }
      }
      break;

    case leaseConstants.ADD_PETS:
      update = {
        ...currentState,
        pet_clause: true
      }
      break;

    case leaseConstants.ADD_SMOKING:
      update = {
        ...currentState,
        smoking_clause: true
      }
      break;

    case leaseConstants.ADD_WATERBED:
      update = {
        ...currentState,
        waterbed_clause: true
      }
      break;

    default: break;
  }

  return updateObject(currentState, update);
};
