import React from "react";
import "./user-form-layout.scss";

const UserFormLayout = ({ children, title, actionButton }) => {
  return (
    <div className="user-form-layout">
      <div className="ufl-top-div">
        <h3>{title}</h3>
        {actionButton}
      </div>
      {children}
    </div>
  );
}

export default UserFormLayout;
