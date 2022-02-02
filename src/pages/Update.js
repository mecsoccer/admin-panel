import React from "react";
import CreateUserForm from "../components/forms/users/CreateUserForm";
import UserFormLayout from "../components/layouts/UserFormLayout";

const Update = () => {
  return (
    <div>
      <UserFormLayout title="Form">
        <CreateUserForm />
      </UserFormLayout>
    </div>
  )
};

export default Update;
