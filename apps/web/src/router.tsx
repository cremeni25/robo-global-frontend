import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutGlobal from "./components/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Sobre from "./pages/Sobre";
import Dashboard from "./pages/dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </LayoutGlobal>
    </BrowserRouter>
  );
}
