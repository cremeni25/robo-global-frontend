import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LanguageProvider>
  );
}
