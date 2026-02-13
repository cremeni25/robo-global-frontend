import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutGlobal from "./layout/LayoutGlobal";
import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import CMS from "./pages/CMS";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROTAS COM HEADER + LAYOUT */}
        <Route element={<LayoutGlobal />}>
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/sobre" element={<div>Sobre</div>} />
          <Route path="/secure/cms" element={<CMS />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
