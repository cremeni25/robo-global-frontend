import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import CMS from "./pages/CMS";
import Dashboard from "./pages/dashboard"; // ← ADIÇÃO DEFINITIVA

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/sobre" element={<div>Sobre</div>} />

          {/* DASHBOARD OPERACIONAL — B1/B2/B3 */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/secure/cms" element={<CMS />} />
        </Routes>
      </LayoutGlobal>
    </BrowserRouter>
  );
}
