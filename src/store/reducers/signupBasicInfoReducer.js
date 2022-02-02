const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  heardAboutUs: '',
  daoCode: '',
  businessRegistered: '',
  ageOfBusiness: '',
  serviceAgreed: '',
  password: '',
  confirmPassword: '',
};
const initialValidation = {
  firstName: true,
  lastName: true,
  email: true,
  phoneNumber: true,
  heardAboutUs: true,
  daoCode: true,
  businessRegistered: true,
  ageOfBusiness: true,
  serviceAgreed: false,
  password: true,
  confirmPassword: true,
};
const initialState = {
  userInput: initialValues,
  validation: initialValidation,
  submitBtnStatus: true,
}
function signupReducer(state = {...initialState}, action) {
  switch(action.type) {
    case 'SIGNUP1_VALIDATION':
      return { ...state, validation: action.payload };
    case 'SET_SIGNUP1_VALIDATION_STATUS':
      return { ...state, valid: action.payload };
    case 'FADE_SUBMIT_BTN':
      return { ...state, submitBtnStatus: action.payload };
    case 'SIGNUP1':
      return { ...state, userInput: action.payload };
    default:
      return state;
  }
}
  
export default signupReducer;