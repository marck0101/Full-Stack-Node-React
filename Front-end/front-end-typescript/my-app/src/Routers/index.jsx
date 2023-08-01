import React from "react";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "../Components/PersistentDrawerLeft";
import HistoricoFaturas from "../Pages/HistoricoFaturas";
// import Home from "../Pages/Home";
import Erro from "../Components/Erro/Erro";
import Dashboard from "../Pages/Dashboard";

function RoutesApp() {
  return (
    <>
      <PersistentDrawerLeft />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Dashboard />} />

        <Route exact path="/HistoricoFaturas" element={<HistoricoFaturas />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
