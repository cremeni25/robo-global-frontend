import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

type Item = {id:string;slug:string;title:string;description?:string;translations?:Record<string,{title?:string;description?:string}>};
type State = "loading"|"ready"|"error";
const copy={
 pt:{title:"Explore seu caminho",intro:"Escolha um assunto para conhecer suas possibilidades.",sub:"Escolha um caminho",pain:"O que mais importa para você?",empty:"Ainda não há conteúdo validado para este caminho.",error:"Não foi possível consultar este caminho agora.",retry:"Tentar novamente",back:"Voltar aos temas",next:"Ver necessidades",detail:"Necessidade identificada",select:"Selecione um tema na página anterior."},
 en:{title:"Explore your path",intro:"Choose a topic and explore the possibilities.",sub:"Choose a path",pain:"What matters most to you?",empty:"Verified content is not available for this path yet.",error:"We couldn't load this path right now.",retry:"Try again",back:"Back to topics",next:"Explore needs",detail:"Need identified",select:"Select a topic on the previous page."},
 es:{title:"Explora tu camino",intro:"Elige un tema y descubre posibilidades.",sub:"Elige un camino",pain:"¿Qué es lo más importante para ti?",empty:"Todavía no hay contenido validado para este camino.",error:"No pudimos consultar este camino.",retry:"Intentar de nuevo",back:"Volver a los temas",next:"Ver necesidades",detail:"Necesidad identificada",select:"Selecciona un tema en la página anterior."}
};
const bases=[(import.meta.env.VITE_API_URL as string|undefined)?.trim()||"https://api.roboglobal.com.br","https://robo-global-api-v2.onrender.com"];
async function getItems(path:string,signal:AbortSignal):Promise<Item[]>{
 for(const base of [...new Set(bases)]){
  try{
   const response=await fetch(base.replace(/\/$/,"")+path,{signal,headers:{Accept:"application/json"}});
   if(!response.ok)continue;
   const raw:unknown=await response.json();
   const data=Array.isArray(raw)?raw:(raw&&typeof raw==="object"&&"data" in raw?(raw as {data:unknown}).data:[]);
   if(Array.isArray(data))return data.filter((x):x is Item=>!!x&&typeof x==="object"&&typeof x.id==="string"&&typeof x.slug==="string"&&typeof x.title==="string");
  }catch{if(signal.aborted)throw new Error("aborted");}
 }
 throw new Error("unavailable");
}
export default function Dores(){
 const {lang}=useLanguage();const t=copy[lang];const [params,setParams]=useSearchParams();
 const niche=params.get("niche")||"";const sub=params.get("sub")||"";
 const [items,setItems]=useState<Item[]>([]);const [state,setState]=useState<State>("loading");const [retry,setRetry]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();setState("loading");setItems([]);
  if(!niche){setState("ready");return()=>controller.abort();}
  const path=sub?"/public/subnichos/"+encodeURIComponent(sub)+"/dores":"/public/nichos/"+encodeURIComponent(niche)+"/subnichos";
  getItems(path,controller.signal).then(data=>{if(!controller.signal.aborted){setItems(data);setState("ready");}}).catch(()=>{if(!controller.signal.aborted)setState("error");});
  return()=>controller.abort();
 },[niche,sub,retry]);
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">ROBÔ GLOBAL</span><h1>{sub?t.pain:t.title}</h1><p>{t.intro}</p></section><section className="rg-interior-body">
 {!niche?<p>{t.select}</p>:state==="loading"?<p role="status">…</p>:state==="error"?<div role="alert"><p>{t.error}</p><button className="rg-retry" onClick={()=>setRetry(v=>v+1)}>{t.retry}</button></div>:items.length===0?<p role="status">{t.empty}</p>:<div className="rg-topic-grid">{items.map((item,i)=><article className="rg-topic" key={item.id}><span className="rg-path-number">0{i+1}</span><h2>{lang==="pt"?item.title:(item.translations?.[lang]?.title||item.title)}</h2><p>{lang==="pt"?(item.description||""):(item.translations?.[lang]?.description||item.description||"")}</p>{!sub?<button className="rg-retry" onClick={()=>setParams({niche,sub:item.id})}>{t.next} ↗</button>:<span>{t.detail}</span>}</article>)}</div>}
 <Link className="rg-back" to={sub?"/dores?niche="+encodeURIComponent(niche):"/nichos"}>← {t.back}</Link></section></div>;
}
