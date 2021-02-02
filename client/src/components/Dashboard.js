import React from "react";
import Wishlist from "./Dashcomponents/Wishlist";

const Dashboard = (props) => {
  if (!localStorage.token) {
    props.history.push("/");
  }
  return (
    <div>
      <p>This is the dashboard component</p>
      <Wishlist />
    </div>
  );
};

export default Dashboard;
