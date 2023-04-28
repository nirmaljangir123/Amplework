import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Page404 from "./component/errorpage/Page404";
import Page500 from "./component/errorpage/Page500";
import DefaultLayout from "./layout/DefaultLayout";
import { AppContent } from "./appcontant/Appcontent";
// import { Welcome } from "./views";

//react strap bootstrap css import  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/404" name="page 404" element={<Page404 />} />
        <Route exact path="/500" name="page 500" element={<Page500 />} />
        <Route exact path="*" name="default page" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
