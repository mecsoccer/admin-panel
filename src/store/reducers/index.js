import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import popupsReducer from './popupsReducer';

export default combineReducers({
  userInfo: usersReducer,
  popups: popupsReducer,
});
