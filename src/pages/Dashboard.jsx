// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import "../styles/Dashboard.css"
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="dashboard">
      <Sidebar active={activeTab} setActive={setActiveTab} />
      <div className="dashboard-content">
        <DashboardHome activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Dashboard;
