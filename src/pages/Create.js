import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../components/forms/users/UserForm";
import UserFormLayout from "../components/layouts/UserFormLayout";
import { createNewUser, updateUserInputValidation } from "../store/actions/userActions";
import { ROUTES } from "../routes";

const Create = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { validation, submitEnabled } = useSelector(state => state.userInfo);
  const { name, email, username, city } = validation;

  useEffect(() => {
    dispatch(updateUserInputValidation({
      name: { value: '', validation: true },
      email: { value: '', validation: true },
      username: { value: '', validation: true },
      city: { value: '', validation: true },
    }))
  }, [dispatch])

  const submitAction = () => {
    if (!submitEnabled) return;
    const payload = {
      name: name.value,
      email: email.value,
      username: username.value,
      city: city.value,
    };
    dispatch(createNewUser(payload, () => {
      history.push(ROUTES.index);
    }));
  };

  return (
    <div>
      <UserFormLayout title="Create User">
        <UserForm submit={submitAction} />
      </UserFormLayout>
    </div>
  )
};

export default Create;
