import { createUserPath, deleteUserPath, fetchUsersPath, getSingleUserPath, updateUserPath } from "../../services/users/paths";
import { usersService } from "../../services/users/users";
import { displaySuccessSnackBar } from "./snackBarActions";
import {
  ENABLE_SUBMIT,
  SAVE_USERS_TO_STORE,
  UPDATE_USER_INPUT_VALIDATION,
  CREATE_NEW_USER,
  SAVE_SINGLE_USER_TO_STORE,
  DELETE_USER,
  SIGNAL_UPDATING,
  SIGNAL_CREATING
} from "./types";

export const updateUserInputValidation = validationObject => async dispatch => {
  dispatch({ type: UPDATE_USER_INPUT_VALIDATION, payload: validationObject });
};

export const enableSubmit = status => async dispatch => {
  dispatch({ type: ENABLE_SUBMIT, payload: status });
};

export const fetchUsersList = () => async dispatch => {
  try {
    const usersList = await usersService().get(fetchUsersPath);
    dispatch({ type: SAVE_USERS_TO_STORE, payload: usersList.data });
  } catch (error) {
    
  }
};

export const fetchSingleUser = (id) => async (dispatch, getState) => {
  try {
    const user = await usersService().get(getSingleUserPath.replace(':id', id));
    dispatch({ type: SAVE_SINGLE_USER_TO_STORE, payload: user.data });
  } catch (error) {
    const { users } = getState().userInfo;
    const user = users.find((item) => item.id === id);
    dispatch({ type: SAVE_SINGLE_USER_TO_STORE, payload: user });
  }
};

export const createNewUser = (user, cb=() => {}) => async (dispatch, getState) => {
  try {
    dispatch({ type: SIGNAL_CREATING, payload: true })
    const { users } = getState().userInfo;
    const lastId = users[users.length - 1]?.id || 1;
    user.id = lastId + 1;
    const newUser = await usersService().post(createUserPath, user);
    dispatch({
      type: CREATE_NEW_USER, payload: [...users, newUser.data] });
    
    dispatch({ type: SIGNAL_CREATING, payload: false })
    cb();
  } catch (error) {
    dispatch({ type: SIGNAL_CREATING, payload: false })
  }
};

export const updateUserDetails = (id, user, cb=() => {}) => async (dispatch, getState) => {
  dispatch({ type: SIGNAL_UPDATING, payload: true })
  try {
    const update = await usersService().put(updateUserPath.replace(':id', id), user);
    const { users } = getState().userInfo;
    const index = users.findIndex((item) => item.id === Number(id));
    const temp = [...users];
    temp[index] = update.data;
    dispatch({ type: SAVE_USERS_TO_STORE, payload: temp });
    dispatch(displaySuccessSnackBar(null, 'User updated!!!'));
    
    dispatch({ type: SIGNAL_UPDATING, payload: false })
    cb();
  } catch (error) {
    const { users } = getState().userInfo;
    const index = users.findIndex((item) => item.id === Number(id));
    const temp = [...users];
    temp[index] = user;
    dispatch({ type: SIGNAL_UPDATING, payload: false })
    dispatch({ type: SAVE_USERS_TO_STORE, payload: temp });
    dispatch(displaySuccessSnackBar(null, 'User updated!!!'));
    cb();
  }
};

export const deletUserDetail = (id, cb=() => {}) => async (dispatch, getState) => {
  try {
    await usersService().delete(deleteUserPath.replace(':id', id));
    const { users } = getState().userInfo;
    const index = users.findIndex((item) => item.id === Number(id));
    const temp = [...users];
    console.log('index',index)
    temp.splice(index, 1);
    dispatch({ type: DELETE_USER, payload: temp });
    dispatch(displaySuccessSnackBar(null, 'User deleted!!!'));
    cb();
  } catch (error) {
    const { users } = getState().userInfo;
    const index = users.findIndex((item) => item.id === Number(id));
    console.log('index',index)
    const temp = [...users];
    temp.splice(index, 1);
    dispatch({ type: DELETE_USER, payload: temp });
    dispatch(displaySuccessSnackBar(null, 'User deleted!!!'));
    cb();
  }
};
