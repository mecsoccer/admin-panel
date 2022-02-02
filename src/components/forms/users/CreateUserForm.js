import React from "react";
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import CustomButton from "../../buttons/Buttons";
import scssVariables from "../../../assets/styles/colors.scss";

import "./create-user-form.scss";
import { ROUTES } from "../../../routes";

const CreateUserForm = () => {
  const history = useHistory();
  
  const submit = (e) => {
    e.preventDefault();
    alert('yo');
  };

  const onCancelClick = () => {
    history.push(ROUTES.index);
  };

  return (
    <div className="create-user-form">
      <form onSubmit={submit}>
        <div className="cuf-form-fields">
          <label for="name">Name</label>
          <TextField variant="outlined" className="input-text-field" />
        </div>
        <div className="cuf-form-fields">
          <label for="email">Email</label>
          <TextField variant="outlined" className="input-text-field" />
        </div>
        <div className="cuf-form-fields">
          <label for="username">Username</label>
          <TextField variant="outlined" className="input-text-field" />
        </div>
        <div className="cuf-form-fields">
          <label for="city">City</label>
          <TextField variant="outlined" className="input-text-field" />
        </div>
        <div className="cuf-ff-flex-end">
          <div className="cuf-form-fields">
            <CustomButton
              width={110}
              color="secondary"
              onClick={onCancelClick}
            >Cancel</CustomButton>
            <CustomButton
              color="primary"
              variant="contained"
              width={110}
              foregroundColor={scssVariables.whiteColor}
              backgroundColor={scssVariables.proexeGreen}
              hoverBgColor={scssVariables.proexeGreenHover}
            >Submit</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
