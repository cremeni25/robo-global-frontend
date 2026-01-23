import { createBrowserRouter } from "react-router-dom";
import LayoutGlobal from "./components/LayoutGlobal";

import Home from "./pages/Home";
import Nichos from "./pages/Nichos";
import Dores from "./pages/Dores";

const router = createBrowserRouter([
  {
    element: <LayoutGlobal />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/nichos", element: <Nichos /> },
      { path: "/dores", element: <Dores /> },
    ],
  },
]);

export default router;
