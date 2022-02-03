import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../components/forms/users/UserForm";
import UserFormLayout from "../components/layouts/UserFormLayout";
import { fetchSingleUser, updateUserDetails, updateUserInputValidation } from "../store/actions/userActions";
import { ROUTES } from "../routes";

const Update = (props) => {
  const id = props.match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, validation, submitEnabled } = useSelector(state => state.userInfo);
  const { name, email, username, city } = validation;

  useEffect(() => {
    dispatch(fetchSingleUser(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (!user) return;
    dispatch(updateUserInputValidation({
      name: { value: user.name, validation: true },
      email: { value: user.email, validation: true },
      username: { value: user.username, validation: true },
      city: { value: user.city, validation: true },
    }))
  }, [dispatch, user]);

  const submit = () => {
    if (!submitEnabled) return;
    const payload = {
      name: name.value,
      email: email.value,
      username: username.value,
      city: city.value,
    };
    dispatch(updateUserDetails(user.id, payload, () => {
      history.push(ROUTES.index);
    }))
  };

  return (
    <div>
      <UserFormLayout title="Update User">
        <UserForm submit={submit} user={user} update={true} />
      </UserFormLayout>
    </div>
  )
};

export default Update;
