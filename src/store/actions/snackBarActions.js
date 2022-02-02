export const displaySuccessSnackBar = (duration=6000, message="") => async dispatch => {
  dispatch({ 
    type: 'DISPLAY_ALERT',
    payload: { open: true, type: 'success', duration, message, },
  });
};

export const closeSuccessSnackBar = () => async dispatch => {
  dispatch({ 
    type: 'DISPLAY_ALERT',
    payload: { open: false, type: 'success', duration: 6000, message: '', },
  });
};
