import React from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../components/buttons/Buttons";
import UserFormLayout from "../components/layouts/UserFormLayout.js";
import UserListTable from "../components/tables/usersList/UserListTable";
import { ROUTES } from "../routes";
import scssVariables from "../assets/styles/colors.scss";

const Index = () => {
  const history = useHistory();

  const handleCreate = () => {
    history.push(ROUTES.create);
  };

  const addUserButton = (
    <CustomButton
      width={150}
      variant="contained"
      foregroundColor={scssVariables.whiteColor}
      backgroundColor={scssVariables.proexeBlue}
      hoverBgColor={scssVariables.proexeBlueHover}
      onClick={handleCreate}
    >Add new</CustomButton>
  );

  return (
    <div>
      <UserFormLayout
        title="User list"
        actionButton={addUserButton}
      >
        <UserListTable />
      </UserFormLayout>
    </div>
  )
};

export default Index;
