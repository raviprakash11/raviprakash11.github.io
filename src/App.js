import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/page";
import LayoutPage from "./layout/LayoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LayoutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
