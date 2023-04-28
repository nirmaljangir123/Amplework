import React from "react";
import TopNavbar from "../component/header/Navbar";
import { AppContent } from "../appcontant/Appcontent";
import '../layout/headerpos.css'
import Footer from "../views/footer/Footer";
const DefaultLayout = () => {
  return (
    <div>
      <div className="headerposition">
        <TopNavbar />
      </div>
      <div>
        <AppContent />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
