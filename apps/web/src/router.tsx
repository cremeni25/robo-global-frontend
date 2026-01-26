import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nichos" element={<Nichos />} />
          <Route path="/dores" element={<Dores />} />
          <Route path="/sobre" element={<div>Sobre</div>} />
        </Routes>
      </LayoutGlobal>
    </BrowserRouter>
  );
}

