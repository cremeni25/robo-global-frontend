import Router from "./router";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}
