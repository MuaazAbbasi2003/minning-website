import React from "react";
import styles from "./Dashboar2.module.css";
import Box from "../BOX/BOX";
import RevenueSection from "../RevenueSection/RevenueSection";

export default function Dashboard() {
  return (
    <div className={`${styles.dashboardWrapper} container-fluid p-0 bg-black`}>
      <Box />
      <RevenueSection />
    </div>
  );
}
