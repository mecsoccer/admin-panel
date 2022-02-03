import { DISPLAY_CONFIRM_ACTION_DIALOG } from "./types";

export const displayConfirmDialog = (messageTitle, messageBody, action) => async dispatch => {
  dispatch({
    type: DISPLAY_CONFIRM_ACTION_DIALOG,
    payload: { open: true, action, messageTitle, messageBody }
  });
};

export const closeConfirmDialog = () => async dispatch => {
  dispatch({
    type: DISPLAY_CONFIRM_ACTION_DIALOG,
    payload: { open: false, action: null, messageTitle: '', messageBody: '' }
  });
};
