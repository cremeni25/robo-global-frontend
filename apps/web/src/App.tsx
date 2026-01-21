import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";
import Go from "./pages/Go";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nichos" element={<Nichos />} />
        <Route path="/dores/:context" element={<Dores />} />
        <Route path="/go" element={<Go />} />
      </Routes>
    </BrowserRouter>
  );
}
