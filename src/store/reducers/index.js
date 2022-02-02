import { combineReducers } from 'redux';
import signupBasicInfoReducer from './signupBasicInfoReducer';
import popupsReducer from './popupsReducer';


export default combineReducers({
  signupBasicInfo: signupBasicInfoReducer,
  popups: popupsReducer,
});
