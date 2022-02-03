import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersList } from "../../store/actions/userActions";
import "./dashboard.scss";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  return (
    <div className="dashboard-component">
      <nav>
        <div className="dsbd-comp-three-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Dashboard</h1>
      </nav>
      <main>
        <h2>Dashboard</h2>
        {props.children}
      </main>
    </div>
  )
};

export default Dashboard;
