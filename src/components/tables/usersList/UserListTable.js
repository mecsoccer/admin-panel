import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayConfirmDialog, closeConfirmDialog } from "../../../store/actions/confirmDialogActions";
import CustomButton from "../../buttons/Buttons";
import { ROUTES } from "../../../routes";
import scssVariables from "../../../assets/styles/colors.scss";
import "./user-list-table.scss";
import { deletUserDetail, sortUsers } from "../../../store/actions/userActions";
import Menu from "../../sorting/Menu";

const UserListTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { users, sortedUsers } = useSelector(state => state.userInfo);

  const initiateDelete = (id) => {
    const message = 'Are you sure you want to delete this user?';
    dispatch(displayConfirmDialog('Delete', message, () => deleteUser(id)));
  };

  const updateUser = (id) => {
    history.push(ROUTES.update.replace(':id', id))
  };

  const deleteUser = (id) => {
    dispatch(closeConfirmDialog());
    dispatch(deletUserDetail(id));
  };

  const handleSort = (option) => {
    const temp = [...users];
    if (option === 'Sort Ascending') {
      dispatch(sortUsers(temp.sort((a, b) => {
        var nameA = a.username.toUpperCase();
        var nameB = b.username.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        
        return 0;
      })));
    };

    if (option === 'Sort Descending') {
      dispatch(sortUsers(temp.sort((a, b) => {
        var nameA = a.username.toUpperCase();
        var nameB = b.username.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        
        return 0;
      })));
    };
  }

  return (
    <div className="users-list-table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th><div><Menu handleSort={handleSort} /> Username</div></th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {(sortedUsers.length ? sortedUsers : users).map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                <CustomButton
                  width={130}
                  variant="contained"
                  foregroundColor={scssVariables.whiteColor}
                  backgroundColor={scssVariables.proexeYellow}
                  hoverBgColor={scssVariables.proexeYellowHover}
                  onClick={() => updateUser(user.id)}
                >edit</CustomButton>
              </td>
              <td>
                <CustomButton
                  width={130}
                  variant="contained"
                  foregroundColor={scssVariables.whiteColor}
                  backgroundColor={scssVariables.proexeRed}
                  hoverBgColor={scssVariables.proexeRedHover}
                  onClick={() => initiateDelete(user.id)}
                >delete</CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
