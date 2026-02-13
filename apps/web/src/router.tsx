import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutGlobal from "./components/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import NichosPublic from "./pages/NichosPublic";
import Dores from "./pages/Dores";
import Sobre from "./pages/Sobre";
import Dashboard from "./pages/dashboard";
import Go from "./pages/Go";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutGlobal>
        <Routes>
          {/* ROTAS GLOBAIS */}
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/nichos-public" element={<NichosPublic />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/sobre" element={<Sobre />} />

          {/* DASHBOARD MASTER */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* REDIRECIONADOR INTELIGENTE */}
          <Route path="/go/:slug" element={<Go />} />
        </Routes>
      </LayoutGlobal>
    </BrowserRouter>
  );
}
