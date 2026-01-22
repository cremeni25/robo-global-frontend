import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Início</Link>
        <Link to="/nichos">Nichos</Link>
        <Link to="/dores/contextos">Contextos</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
