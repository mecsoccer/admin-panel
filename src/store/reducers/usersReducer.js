import {
  ENABLE_SUBMIT,
  SAVE_USERS_TO_STORE,
  UPDATE_USER_DETAILS,
  UPDATE_USER_INPUT_VALIDATION,
  CREATE_NEW_USER,
  SAVE_SINGLE_USER_TO_STORE,
  DELETE_USER,
  SIGNAL_CREATING,
  SIGNAL_DELETING,
  SIGNAL_UPDATING,
  SIGNAL_FETCHING,
  SORT_USERS
} from "../actions/types";

const initialFormValues = {
  name: { value: '', validation: true },
  email: { value: '', validation: true },
  username: { value: '', validation: true },
  city: { value: '', validation: true },
};

const initialState = {
  submitEnabled: false,
  validation: initialFormValues,
  user: null,
  users: [],
  sortedUsers: [],
  creating: false,
  fetching: false,
  updating: false,
  deleting: false,
};

function usersReducer(state = {...initialState}, action) {
  switch(action.type) {
    case SIGNAL_CREATING:
      return { ...state, creating: action.payload };
    case SIGNAL_DELETING:
      return { ...state, deleting: action.payload };
    case SIGNAL_UPDATING:
      return { ...state, updating: action.payload };
    case SIGNAL_FETCHING:
      return { ...state, fetching: action.payload };
    case UPDATE_USER_INPUT_VALIDATION:
      return { ...state, validation: action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, user: action.payload, sortedUsers: [] };
    case ENABLE_SUBMIT:
      return { ...state, submitEnabled: action.payload };
    case SAVE_USERS_TO_STORE:
      return { ...state, users: action.payload, sortedUsers: [] };
    case SAVE_SINGLE_USER_TO_STORE:
      return { ...state, user: action.payload };
    case CREATE_NEW_USER:
      return { ...state, users: action.payload, sortedUsers: [] };
    case DELETE_USER:
      return { ...state, users: action.payload, sortedUsers: [] };
    case SORT_USERS:
      return { ...state, sortedUsers: action.payload };
    default:
      return state;
  }
}
  
export default usersReducer;