import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Aguarde from "./pages/Aguarde";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<Nichos />} />
        <Route path="/dores/:nicho" element={<Dores />} />
        <Route path="/aguarde" element={<Aguarde />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
