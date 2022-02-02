const initialAlertState = {
  open: false,
  type: "success",
  duration: 6000,
  message: undefined,
};
const initialConfirmActionState = { open: false, action: null, messageTitle: "", messageBody: "" };

const initialState = {
  alertState: initialAlertState,
  confirmActionState: initialConfirmActionState,
};

const popupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_ALERT":
      return {
        ...state,
        alertState: { ...action.payload },
      };
    case "DISPLAY_CONFIRM_ACTION_DIALOG":
      return {
        ...state,
        confirmActionState: { ...action.payload },
      };
    default:
      return state;
  }
};

export default popupsReducer;
