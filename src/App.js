import { React, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from "./component/dashboard";
import ErrorPage from "./component/error";
import FaqPage from "./component/faq";
import FrontDoorPage from "./component/frontdoor";
import LoadingSpinnerPage from "./component/loadingSpinner";

function RoutesWrapper() {
  return (
      <Routes>
        <Route path="/elocution" element={<FrontDoorPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [pathname]);
  return loading ? <LoadingSpinnerPage/> : <RoutesWrapper />;
}

export default App;
