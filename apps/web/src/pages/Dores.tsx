import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
const copy = {
 pt: {title:"Seu caminho está sendo preparado",body:"Estamos organizando informações verificadas para apoiar suas escolhas. Nenhuma recomendação comercial está disponível nesta etapa.",back:"Explorar outros temas"},
 en: {title:"Your path is taking shape",body:"We're preparing verified information to support your choices. Commercial recommendations aren't available at this stage.",back:"Explore other topics"},
 es: {title:"Estamos preparando tu camino",body:"Estamos organizando información verificada para ayudarte a decidir. Las recomendaciones comerciales aún no están disponibles.",back:"Explorar otros temas"}
};
export default function Dores() {
 const {lang}=useLanguage();const t=copy[lang];
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">ROBÔ GLOBAL</span><h1>{t.title}</h1><p>{t.body}</p></section><section className="rg-interior-body"><Link className="rg-back" to="/nichos">← {t.back}</Link></section></div>;
}
