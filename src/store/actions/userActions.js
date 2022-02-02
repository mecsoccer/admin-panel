export const saveSignup1Validation = validation => async dispatch => {
  dispatch({ type: 'SIGNUP1_VALIDATION', payload: validation });
}

export const setFadeSubmitBtn = status => async dispatch => {
  dispatch({ type: 'FADE_SUBMIT_BTN', payload: status });
}

export const saveSignup1Detail = userInput => async dispatch => {
  dispatch({ type: 'SIGNUP1', payload: userInput });
}

export const submitSignup1 = userDetails => async dispatch => {
  try {
    dispatch({ type: 'SIGNUP1', payload: userDetails });
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
  }
}
