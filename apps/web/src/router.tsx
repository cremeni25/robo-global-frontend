import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Dashboard from "./pages/dashboard";
import Sobre from "./pages/Sobre";
import Go from "./pages/Go";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<Nichos />} />
        <Route path="/dores" element={<Dores />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/go/:slug" element={<Go />} />
      </Routes>
    </BrowserRouter>
  );
}
