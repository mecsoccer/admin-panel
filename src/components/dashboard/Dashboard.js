import React from "react";
import "./dashboard.scss";

const Dashboard = (props) => {
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
