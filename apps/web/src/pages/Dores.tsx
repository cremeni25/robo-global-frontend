import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { doresPT } from "../data/dores/dores.pt";
const copy={
 pt:{tag:"SEU CAMINHO",missing:"Ainda não encontramos este caminho.",unavailable:"Estamos preparando informações relevantes para este tema.",ready:"Conheça a próxima possibilidade",back:"Explorar outros temas",pending:"Recomendações comerciais ainda não disponíveis.",context:"O que importa agora"},
 en:{tag:"YOUR PATH",missing:"We couldn't find that path yet.",unavailable:"We're preparing useful information on this topic.",ready:"Explore the next possibility",back:"Explore other topics",pending:"Commercial recommendations aren't available yet.",context:"What matters now"},
 es:{tag:"TU CAMINO",missing:"Todavía no encontramos este camino.",unavailable:"Estamos preparando información útil sobre este tema.",ready:"Explorar la siguiente posibilidad",back:"Explorar otros temas",pending:"Las recomendaciones comerciales aún no están disponibles.",context:"Lo que importa ahora"}
};
export default function Dores(){
 const {lang}=useLanguage();const t=copy[lang];const [params]=useSearchParams();const niche=params.get("niche")||"";const index=Number(params.get("index")||"0");
 const matches=doresPT.filter(d=>d.niche===niche&&d.id&&d.title&&d.narrative&&d.productStatus&&d.productSlug);
 const selected=Number.isInteger(index)&&index>=0?matches[index]:undefined;
 // Source narratives are authored only in PT. Never present Portuguese as translated English/Spanish.
 const showNarrative=lang==="pt"&&selected;
 const validOffer=selected?.productStatus==="ATIVO"&&false; // fail closed until commercial verification exists
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">{t.tag}</span><h1>{showNarrative?selected.title:selected?t.context:t.missing}</h1><p>{showNarrative?selected.narrative:t.unavailable}</p></section>
 <section className="rg-interior-body"><div className="rg-topic"><span className="rg-kicker">{t.context}</span><p>{t.pending}</p>{validOffer&&null}</div>
 <Link className="rg-back" to="/nichos">← {t.back}</Link></section></div>;
}
