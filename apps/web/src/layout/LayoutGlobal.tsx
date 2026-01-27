import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  children: ReactNode;
}

export default function LayoutGlobal({ children }: Props) {
  const { t } = useI18n();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/nichos", label: t("nav.nichos") },
    { to: "/dores", label: t("nav.dores") },
    { to: "/sobre", label: t("nav.sobre") },
  ];

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <nav style={styles.nav}>
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    ...styles.navItem,
                    ...(active ? styles.navItemActive : {}),
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={styles.langGroup}>
            <button
              onClick={() => setLanguage("pt")}
              style={{
                ...styles.langButton,
                ...(language === "pt" ? styles.langActive : {}),
              }}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              style={{
                ...styles.langButton,
                ...(language === "en" ? styles.langActive : {}),
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              style={{
                ...styles.langButton,
                ...(language === "es" ? styles.langActive : {}),
              }}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <main style={styles.container}>{children}</main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
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
    gap: 12,
  },
  navItem: {
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 14,
    textDecoration: "none",
    color: "#374151",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    transition: "all 0.15s ease",
  },
  navItemActive: {
    backgroundColor: "#111827",
    color: "#ffffff",
    borderColor: "#111827",
  },
  langGroup: {
    display: "flex",
    gap: 6,
  },
  langButton: {
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    color: "#374151",
  },
  langActive: {
    backgroundColor: "#111827",
    color: "#ffffff",
    borderColor: "#111827",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "32px 24px",
  },
};
