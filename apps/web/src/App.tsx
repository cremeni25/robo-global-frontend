import Router from "./router";
import LayoutGlobal from "./layout/LayoutGlobal";

export default function App() {
  return (
    <LayoutGlobal>
      <Router />
    </LayoutGlobal>
  );
}
