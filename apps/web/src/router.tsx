import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import NichosPublic from "./pages/NichosPublic";
import Dores from "./pages/Dores";
import Go from "./pages/Go";
import Dashboard from "./pages/dashboard";
import CMS from "./pages/CMS";
import Sobre from "./pages/Sobre";
import Aguarde from "./pages/Aguarde";

export default function Router() {
  return (
    <BrowserRouter>
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

        {/* 📘 Institucional */}
        <Route path="/sobre" element={<Sobre />} />

        {/* ⏳ fallback */}
        <Route path="*" element={<Aguarde />} />

      </Routes>
    </BrowserRouter>
  );
}
