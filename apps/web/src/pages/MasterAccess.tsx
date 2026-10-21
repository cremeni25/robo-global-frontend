import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const copy = {
  pt: { eyebrow:"ACESSO RESTRITO · CREMENI",title:"Área Master",body:"O controle do ROBÔ GLOBAL será centralizado aqui. O acesso ao financeiro e às operações B2 exige autenticação real e autorização de perfil no servidor.",status:"Acesso administrativo em integração. Nenhum dado financeiro é exposto nesta página.",back:"Voltar ao início",areas:["Governança e decisões","Parceiros e produtos (B2)","Financeiro e conciliação (B3)"] },
  en: { eyebrow:"RESTRICTED ACCESS · CREMENI",title:"Master area",body:"ROBÔ GLOBAL management will be centralized here. Finance and B2 operations require real server-side authentication and authorization.",status:"Administrative access is being integrated. No financial data is exposed here.",back:"Back to home",areas:["Governance and decisions","Partners and products (B2)","Finance and reconciliation (B3)"] },
  es: { eyebrow:"ACCESO RESTRINGIDO · CREMENI",title:"Área Master",body:"El control de ROBÔ GLOBAL estará centralizado aquí. Finanzas y operaciones B2 requieren autenticación y autorización reales en el servidor.",status:"El acceso administrativo está en integración. No se exponen datos financieros aquí.",back:"Volver al inicio",areas:["Gobernanza y decisiones","Socios y productos (B2)","Finanzas y conciliación (B3)"] }
};
const formCopy={
 pt:{heading:"Identificação Master",email:"E-mail",password:"Senha",busy:"Validando…",enter:"Entrar",notEnabled:"A autenticação Master ainda não foi habilitada no servidor.",notAuthorized:"Identidade autenticada. Acesso administrativo bloqueado até a autorização Master no servidor.",failed:"Não foi possível validar o acesso administrativo."},
 en:{heading:"Master sign-in",email:"Email",password:"Password",busy:"Checking…",enter:"Sign in",notEnabled:"Master authentication has not been enabled on the server yet.",notAuthorized:"Identity verified. Administrative access requires server-side Master authorization.",failed:"We couldn't verify administrative access."},
 es:{heading:"Identificación Master",email:"Correo electrónico",password:"Contraseña",busy:"Validando…",enter:"Entrar",notEnabled:"La autenticación Master aún no está habilitada en el servidor.",notAuthorized:"Identidad verificada. El acceso administrativo requiere autorización Master en el servidor.",failed:"No pudimos validar el acceso administrativo."}
};
export default function MasterAccess() {
  const {lang} = useLanguage();
  const t = {...copy[lang],...formCopy[lang]};
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [busy,setBusy] = useState(false);
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const endpoint = import.meta.env.VITE_SUPABASE_URL;
      const publicKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!endpoint || !publicKey) {
        setMessage(t.notEnabled);
        return;
      }
      const response = await fetch(endpoint + "/auth/v1/token?grant_type=password", {
        method: "POST",
        headers: { "Content-Type": "application/json", "apikey": publicKey },
        body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if (!response.ok || !result.access_token) throw new Error("Login recusado");
      setMessage(t.notAuthorized);
    } catch {
      setMessage(t.failed);
    } finally {
      setPassword("");
      setBusy(false);
    }
  }

  return <section style={{minHeight:"calc(100vh - 85px)",background:"radial-gradient(ellipse at 80% 30%,#123c48 0%,#092630 40%,#071b24 80%)",padding:"clamp(48px,7vw,110px) 24px"}}>
    <div style={{maxWidth:1050,margin:"0 auto"}}>
      <p className="rg-eyebrow">{t.eyebrow}</p>
      <h1 style={{fontFamily:"Manrope, sans-serif",fontSize:"clamp(36px,5vw,60px)",letterSpacing:"-.05em",margin:"18px 0",color:"#f0f9fa"}}>{t.title}</h1>
      <p className="rg-lead" style={{maxWidth:750}}>{t.body}</p>
      <form onSubmit={handleLogin} style={{maxWidth:560,margin:"30px 0",padding:24,border:"1px solid #31505a",borderRadius:14,background:"#0b2831"}}>
        <h2 style={{margin:"0 0 18px",fontSize:22}}>{t.heading}</h2>
        <label htmlFor="master-email">{t.email}</label>
        <input id="master-email" type="email" autoComplete="username" required value={email} onChange={event=>setEmail(event.target.value)} style={{display:"block",width:"100%",margin:"8px 0 18px",padding:12,borderRadius:8,border:"1px solid #31505a",background:"#071b24",color:"white"}} />
        <label htmlFor="master-password">{t.password}</label>
        <input id="master-password" type="password" autoComplete="current-password" required value={password} onChange={event=>setPassword(event.target.value)} style={{display:"block",width:"100%",margin:"8px 0 18px",padding:12,borderRadius:8,border:"1px solid #31505a",background:"#071b24",color:"white"}} />
        <button className="rg-button rg-button-primary" type="submit" disabled={busy} style={{border:0,cursor:"pointer"}}>{busy?t.busy:t.enter}</button>
        <p role="status" aria-live="polite" style={{color:"#b4cdd1"}}>{message}</p>
      </form>
      <div style={{border:"1px solid #31505a",borderRadius:14,padding:24,margin:"32px 0",background:"#0b2831"}}>
        <p style={{color:"#91ead0",fontWeight:700,marginTop:0}}>{t.status}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12}}>
          {t.areas.map((a)=><div key={a} style={{border:"1px solid #31505a",borderRadius:10,padding:20,color:"#d5ebeb"}}>{a}</div>)}
        </div>
      </div>
      <Link className="rg-button rg-button-outline" to="/">{t.back} ←</Link>
    </div>
  </section>;
}
