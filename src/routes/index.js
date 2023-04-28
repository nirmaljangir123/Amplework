import React from "react";
import Welcome from "../views/dashboard/Welcome";
import Elevate from "../views/elevatewebpage/Elevate";

const routes = [
  { path: "/welcome", exact: true, name: "welcome", element: <Welcome/> },
  { path: "/elevate", exact: true, name: "elevate", element: <Elevate /> },
];

export default routes;
