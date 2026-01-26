import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function LayoutGlobal({ children }: Props) {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <nav style={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/nichos">Nichos</Link>
            <Link to="/dores">Dores</Link>
            <Link to="/sobre">Sobre</Link>
          </nav>

          <select style={styles.lang} defaultValue="pt">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </header>

      <main style={styles.container}>{children}</main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    width: "100%",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
  },
  headerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: 24,
  },
  lang: {
    padding: "6px 8px",
    fontSize: 14,
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "32px 24px",
  },
};
