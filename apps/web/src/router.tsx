import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutGlobal from "./layout/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Dashboard from "./pages/dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutGlobal />}>
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sobre" element={<div>Sobre</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
