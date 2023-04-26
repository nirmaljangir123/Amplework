import React from "react";
import TopNavbar from "../component/header/Navbar";
import Footer from "../component/footer/Footer";
import { AppContent } from "../appcontant/Appcontent";
import '../layout/headerpos.css'
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
