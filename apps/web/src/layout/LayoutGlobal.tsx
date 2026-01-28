import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useI18n } from "../i18n";

interface Props {
  children: ReactNode;
}

export default function LayoutGlobal({ children }: Props) {
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const { t } = useI18n();

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
            <span
              style={lang === "pt" ? styles.langPill : styles.langPillDisabled}
              onClick={() => setLang("pt")}
            >
              PT
            </span>
            <span
              style={lang === "en" ? styles.langPill : styles.langPillDisabled}
              onClick={() => setLang("en")}
            >
              EN
            </span>
            <span
              style={lang === "es" ? styles.langPill : styles.langPillDisabled}
              onClick={() => setLang("es")}
            >
              ES
            </span>
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
  langPill: {
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    backgroundColor: "#111827",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
  },
  langPillDisabled: {
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    backgroundColor: "#f3f4f6",
    color: "#9ca3af",
    cursor: "pointer",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "32px 24px",
  },
};
