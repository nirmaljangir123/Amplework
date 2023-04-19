import React from "react";
import { WelcomePage } from "../views";
import Footer from "../views/footer/Footer";
// import TopNavbar from '../component/header/Navbar'

const AllRoutes = [

  { path: "/welcome", name: "welcome", element: <WelcomePage /> },
  { path: "/footer", name: "footer", element: <Footer /> },
];
export default AllRoutes;
