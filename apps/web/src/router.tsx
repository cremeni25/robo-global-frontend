import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import NichosPublic from "./pages/NichosPublic";
import Dores from "./pages/Dores";
import CMS from "./pages/CMS";
import Go from "./pages/Go";
import Dashboard from "./pages/dashboard";
import NichosPublic from "./pages/NichosPublic";
import CMS from "./pages/CMS";
import Sobre from "./pages/Sobre";
import Aguarde from "./pages/Aguarde";

export default function Router() {
return (
<BrowserRouter>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Home />} />
      <Routes>

        {/* 🌎 Público Global */}
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<NichosPublic />} />
        <Route path="/nicho/:id" element={<Nichos />} />
        <Route path="/dores/:id" element={<Dores />} />
        <Route path="/go/:slug" element={<Go />} />

        {/* 🧠 MASTER */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cms" element={<CMS />} />

          {/* CAMADA PÚBLICA */}
          <Route path="/nichos-public" element={<NichosPublic />} />
        {/* 📘 Institucional */}
        <Route path="/sobre" element={<Sobre />} />

          {/* CAMADA INTERNA */}
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/secure/cms" element={<CMS />} />
          <Route path="/dashboard" element={<Dashboard />} />
        {/* ⏳ fallback */}
        <Route path="*" element={<Aguarde />} />

          <Route path="/sobre" element={<div>Sobre</div>} />
        </Routes>
      </LayoutGlobal>
      </Routes>
</BrowserRouter>
);
}
