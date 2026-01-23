import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function LayoutGlobal() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTEÚDO CENTRAL */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 24px",
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* FOOTER INSTITUCIONAL */}
      <footer
        style={{
          borderTop: "1px solid #eee",
          padding: "24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#555",
        }}
      >
        Robô Global™ by <strong>CREMENI</strong>
      </footer>
    </div>
  );
}
