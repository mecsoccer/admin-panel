import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';

const CustomButton = (props) => {
  console.log(props)
  const ColorButton = withStyles((theme) => ({
    root: {
      color: props.foregroundColor,
      backgroundColor: props.backgroundColor,
      height: props.height || 35,
      width: props.width,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: props.hoverBgColor,
      },
    },
  }))(Button);
  
  return (
    <ColorButton variant="outlined" color="primary" {...props}>
      {props.loading ? <CircularProgress size={24} /> : props.children}
    </ColorButton>
  )
};

export default CustomButton;
