import React from "react";
import Welcome from "../views/dashboard/Welcome";
import Elevate from "../views/elevatewebpage/Elevate";
import Empower from "../views/empowerbusiness/Empower";
import Support from "../views/support/Support";

const routes = [
  { path: "/", exact: true, name: "welcome", element: <Welcome /> },
  { path: "/elevate", exact: true, name: "elevate", element: <Elevate /> },
  { path: "/empower", exact: true, name: "empower", element: <Empower /> },
  {path:"/support",exact:true,name:"support",element:<Support/>},
];

export default routes;
