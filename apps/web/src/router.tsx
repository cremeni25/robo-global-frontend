import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Sobre from "./pages/Sobre";

export default function Router() {
  return (
    <Routes>
      <Route element={<LayoutGlobal />}>
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<Nichos />} />
        <Route path="/dores" element={<Dores />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}
