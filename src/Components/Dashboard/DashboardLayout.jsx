import React, { useState } from "react";
import Navbar from "./NavbarDashboard/Nav";
import Dashboard from "./DashComp/Dashboard";
import TapAndEarn from "./TapandEarn/TapAndEarn";
import Analytics from "./Analytics/Analytics";
import styles from "./Dashboard.module.css";
import ProfileComponent from "./ProfileComponent/profileComponent";

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "tap":
        return <TapAndEarn />;
      case "analytics":
        return <Analytics />;
      case "profile":
        return <ProfileComponent />;
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.ultimateDiv}>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="p-3">{renderContent()}</div>
    </div>
  );
}
