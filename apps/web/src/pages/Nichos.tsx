import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
type Niche={id:string|number;slug:string;title:string;description?:string};
const words={
 pt:{tag:"EXPLORE NO SEU RITMO",title:"Por onde você quer começar?",intro:"Cada pessoa tem seu próprio momento. Escolha um assunto e descubra caminhos que fazem sentido para você.",loading:"Buscando caminhos disponíveis…",empty:"Estamos preparando novas possibilidades para você.",error:"Não conseguimos consultar os temas agora. Volte em instantes.",action:"Conhecer este caminho",back:"Voltar ao início"},
 en:{tag:"EXPLORE AT YOUR OWN PACE",title:"Where would you like to begin?",intro:"Everyone has a different starting point. Choose what matters to you and explore a path forward.",loading:"Finding available topics…",empty:"We're preparing more possibilities for you.",error:"We couldn't load the topics right now. Please try again soon.",action:"Explore this topic",back:"Back to home"},
 es:{tag:"EXPLORA A TU RITMO",title:"¿Por dónde te gustaría empezar?",intro:"Cada persona tiene su propio momento. Elige lo que te importa y descubre nuevas posibilidades.",loading:"Buscando temas disponibles…",empty:"Estamos preparando nuevas posibilidades para ti.",error:"No pudimos consultar los temas ahora. Vuelve a intentarlo pronto.",action:"Explorar este tema",back:"Volver al inicio"}
};
export default function Nichos(){
 const {lang}=useLanguage();const t=words[lang];const [items,setItems]=useState<Niche[]>([]);const [state,setState]=useState<"loading"|"ready"|"error">("loading");
 useEffect(()=>{const controller=new AbortController();const api=import.meta.env.VITE_API_URL as string|undefined;
 if(!api){setState("error");return ()=>controller.abort();}
 fetch(api.replace(/\/$/,"")+"/public/nichos",{signal:controller.signal}).then(async res=>{if(!res.ok)throw new Error("API");const data=await res.json();setItems(Array.isArray(data?.data)?data.data:[]);setState("ready");}).catch(e=>{if(e.name!=="AbortError")setState("error");});return ()=>controller.abort();
 },[]);
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">{t.tag}</span><h1>{t.title}</h1><p>{t.intro}</p></section>
 <section className="rg-interior-body">{state==="loading"?<p role="status">{t.loading}</p>:state==="error"?<p role="alert">{t.error}</p>:items.length===0?<p role="status">{t.empty}</p>:<div className="rg-topic-grid">{items.map((item,i)=><article className="rg-topic" key={item.id}><span className="rg-path-number">0{i+1}</span><h2>{item.title}</h2><p>{item.description}</p><Link to={"/dores?niche="+encodeURIComponent(item.slug)+"&index=0"}>{t.action} ↗</Link></article>)}</div>}
 <Link className="rg-back" to="/">← {t.back}</Link></section></div>
}
