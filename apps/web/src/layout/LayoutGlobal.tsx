import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { getLang, setLang, t } from "../i18n";

interface Props {
  children: ReactNode;
}

export default function LayoutGlobal({ children }: Props) {
  const location = useLocation();
  const lang = getLang();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/nichos", label: t("nav.nichos") },
    { to: "/dores", label: t("nav.dores") },
    { to: "/sobre", label: t("nav.sobre") },
  ];

  function changeLang(l: "pt" | "en" | "es") {
    setLang(l);
    window.location.reload();
  }

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <nav style={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  ...styles.navItem,
                  ...(location.pathname === item.to
                    ? styles.navItemActive
                    : {}),
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={styles.langGroup}>
            {(["pt", "en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                style={{
                  ...styles.langBtn,
                  ...(lang === l ? styles.langActive : {}),
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main style={styles.container}>{children}</main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: { borderBottom: "1px solid #e5e7eb" },
  headerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
  },
  nav: { display: "flex", gap: 12 },
  navItem: {
    padding: "8px 14px",
    borderRadius: 999,
    textDecoration: "none",
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    color: "#374151",
  },
  navItemActive: {
    background: "#111827",
    color: "#fff",
  },
  langGroup: { display: "flex", gap: 6 },
  langBtn: {
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "#f3f4f6",
  },
  langActive: {
    background: "#111827",
    color: "#fff",
  },
  container: { maxWidth: 1280, margin: "0 auto", padding: "32px 24px" },
};
