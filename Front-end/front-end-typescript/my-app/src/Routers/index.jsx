import React from "react";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "../Components/PersistentDrawerLeft";
import Dashboard from "../Pages/Dashboard";
import HistoricoFaturas from "../Pages/HistoricoFaturas";

function RoutesApp() {
  return (
    <>
      <PersistentDrawerLeft />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/HistoricoFaturas" element={<HistoricoFaturas />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
