import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { closeSuccessSnackBar } from '../../store/actions/snackBarActions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomizedSnackbars(props) {
  const classes = useStyles();
  const { open, type, duration, message } = props.alert;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.closeSuccessSnackBar();
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} anchorOrigin={{horizontal:'center',vertical:'top'}} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    alert: state.popups.alertState,
  };
}

export default connect(mapStateToProps, { closeSuccessSnackBar })(CustomizedSnackbars);
