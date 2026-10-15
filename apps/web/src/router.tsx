import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";

import Home from "./pages/Home";
import MasterAccess from "./pages/MasterAccess";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Sobre from "./pages/Sobre";
import Ofertas from "./pages/Ofertas";

export default function Router() {
  return (
    <Routes>
      <Route element={<LayoutGlobal />}>
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<Nichos />} />
        <Route path="/dores" element={<Dores />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/master" element={<MasterAccess />} />
      </Route>
    </Routes>
  );
}
