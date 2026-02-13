import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import CMS from "./pages/CMS";
import Dashboard from "./pages/dashboard";
import NichosPublic from "./pages/NichosPublic";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* CAMADA PÚBLICA */}
          <Route path="/nichos-public" element={<NichosPublic />} />

          {/* CAMADA INTERNA */}
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/secure/cms" element={<CMS />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/sobre" element={<div>Sobre</div>} />
        </Routes>
      </LayoutGlobal>
    </BrowserRouter>
  );
}
