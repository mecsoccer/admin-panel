import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { closeConfirmDialog } from '../../store/actions/confirmDialogActions';

function ConfirmAction() {
  const dispatch = useDispatch();
  const { confirmActionState } = useSelector(state => state.popups);

  const handleClose = () => {
    dispatch(closeConfirmDialog());
  };

  return (
    <Dialog
      maxWidth="xs"
      open={confirmActionState.open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <strong style={{fontSize:18}}>
          {confirmActionState.messageTitle ? confirmActionState.messageTitle : 'Action'}
        </strong>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {confirmActionState.messageBody ? confirmActionState.messageBody : 'Are you sure you want to continue with this action?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" onClick={confirmActionState.action} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmAction;
