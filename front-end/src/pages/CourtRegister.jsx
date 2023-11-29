import React from "react";
import Header from "../components/Navbar";
import CourtRegistrationForm from "../components/CourtRegistrationForm";
import "../components/css/padding-top.css";

function CourtRegister() {
  return (
    <div>
      <div className="padding-top">
        <Header />
      </div>
      <div>
        <CourtRegistrationForm />
      </div>
    </div>
  );
}

export default CourtRegister;
