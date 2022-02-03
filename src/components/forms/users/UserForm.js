import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import CustomButton from "../../buttons/Buttons";
import { updateUserInputValidation, enableSubmit } from "../../../store/actions/userActions";
import { validate, handleFormInput } from "../../../utils/validations";
import scssVariables from "../../../assets/styles/colors.scss";
import { ROUTES } from "../../../routes";
import "./user-form.scss";

const UserForm = ({ submit, user, update }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { submitEnabled, validation } = useSelector(state => state.userInfo);
  const { email, name, username, city } = validation;
  
  useEffect(() => {
    const fields = { email, name };
    if (username.value) fields['username'] = username;
    if (city.value) fields['city'] = city;

    validate(fields, (status) => dispatch(enableSubmit(status)));
  }, [email, name, username, city, validation, dispatch]);
  
  const onCancelClick = () => {
    history.push(ROUTES.index);
  };

  const handleInputChange = (update) => {
    return dispatch(updateUserInputValidation(update));
  };

  return (
    <div className="create-user-form">
      <form>
        {(user || !update) && (
        <>
          <div className="cuf-form-fields">
            <label for="name">Name</label>
            <TextField
              variant="outlined"
              className="input-text-field"
              value={name.value}
              onChange={(e) => {
                const value = e.target.value.replace(/\d/g,'');
                const regex = /^([a-z]+-?[a-z]+\s[a-z]+-?[a-z]+){1,255}$/gi;
                handleFormInput('name', value, regex, validation, handleInputChange);
              }}
              error={!name.validation}
              helperText={(!name.validation && !name.value) && 'name is required'}
            />
          </div>
          <div className="cuf-form-fields">
            <label for="email">Email</label>
            <TextField
              variant="outlined"
              className="input-text-field"
              value={email.value}
              onChange={(e) => {
                const value = e.target.value.trim().toLowerCase();
                handleFormInput('email', value, /^\w[\w.-]+@[a-z]+\..+$/gi, validation, handleInputChange);
              }}
              error={!email.validation}
              helperText={(!email.validation && !email.value) && 'email is required'}
            />
          </div>
          <div className="cuf-form-fields">
            <label for="username">Username</label>
            <TextField
              variant="outlined"
              className="input-text-field"
              value={username.value}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-z]/g, '');
                handleFormInput('username', value, /.{2,50}/g, validation, handleInputChange);
              }}
              error={!username.validation && username.value}
            />
          </div>
          <div className="cuf-form-fields">
            <label for="city">City</label>
            <TextField
              variant="outlined"
              className="input-text-field"
              value={city.value}
              onChange={(e) => {
                handleFormInput('city', e.target.value, /.+/g, validation, handleInputChange);
              }}
              error={!city.validation && city.value}
            />
          </div>
        </>)}
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
              disabled={!submitEnabled}
              onClick={submit}
            >Submit</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
