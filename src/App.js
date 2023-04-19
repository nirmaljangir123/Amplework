import React from "react";
import {
  BrowserRouter,
  Suspense,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AllRoutes from "./routes";
import Page404 from "./component/errorpage/Page404";
import Page500 from "./component/errorpage/Page500";

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense> */}
      <Routes>
        {AllRoutes.map((route, key) => {
          return (
            route.element && (
              <Route
                key={key}
                path={route.path}
                name={route.name}
                element={route.element}
              />
            )
          );
        })}
        <Route exact path="/404" name="page 404" element={<Page404/>} />
        <Route exact path="/500" name="page 500" element={<Page500/>} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
