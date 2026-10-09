import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

type Item = {id:string;slug:string;title:string;description?:string;translations?:Record<string,{title?:string;description?:string}>};
type State = "loading"|"ready"|"error";
type Solution = {id:string;title:string;description?:string;url:string};
function verifiedDestination(raw:string):string|null {
 try {
  const parsed=new URL(raw);
  const allowed=new Set(["api.roboglobal.com.br","robo-global-api-v2.onrender.com"]);
  if(parsed.protocol!=="https:"||!allowed.has(parsed.hostname)||parsed.port||parsed.username||parsed.password)return null;
  if(!/^\/go\/[a-zA-Z0-9-]{1,80}$/.test(parsed.pathname)||parsed.search||parsed.hash)return null;
  return parsed.toString();
 }catch{return null;}
}

const copy={
 pt:{title:"Explore seu caminho",intro:"Escolha um assunto para conhecer suas possibilidades.",sub:"Escolha um caminho",pain:"O que mais importa para você?",empty:"Ainda não há conteúdo validado para este caminho.",error:"Não foi possível consultar este caminho agora.",retry:"Tentar novamente",back:"Voltar aos temas",next:"Ver necessidades",detail:"Necessidade identificada",select:"Selecione um tema na página anterior.",solutions:"Soluções relacionadas",open:"Conhecer solução"},
 en:{title:"Explore your path",intro:"Choose a topic and explore the possibilities.",sub:"Choose a path",pain:"What matters most to you?",empty:"Verified content is not available for this path yet.",error:"We couldn't load this path right now.",retry:"Try again",back:"Back to topics",next:"Explore needs",detail:"Need identified",select:"Select a topic on the previous page.",solutions:"Related solutions",open:"Explore solution"},
 es:{title:"Explora tu camino",intro:"Elige un tema y descubre posibilidades.",sub:"Elige un camino",pain:"¿Qué es lo más importante para ti?",empty:"Todavía no hay contenido validado para este camino.",error:"No pudimos consultar este camino.",retry:"Intentar de nuevo",back:"Volver a los temas",next:"Ver necesidades",detail:"Necesidad identificada",select:"Selecciona un tema en la página anterior.",solutions:"Soluciones relacionadas",open:"Conocer solución"}
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
 const niche=params.get("niche")||"";const sub=params.get("sub")||"";const pain=params.get("pain")||"";
 const [items,setItems]=useState<Item[]>([]);const [solutions,setSolutions]=useState<Solution[]>([]);const [solutionsState,setSolutionsState]=useState<State>("loading");const [state,setState]=useState<State>("loading");const [retry,setRetry]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();setState("loading");setItems([]);
  if(!niche){setState("ready");return()=>controller.abort();}
  const path=sub?"/public/subnichos/"+encodeURIComponent(sub)+"/dores":"/public/nichos/"+encodeURIComponent(niche)+"/subnichos";
  getItems(path,controller.signal).then(data=>{if(!controller.signal.aborted){setItems(data);setState("ready");}}).catch(()=>{if(!controller.signal.aborted)setState("error");});
  return()=>controller.abort();
 },[niche,sub,retry]);
 useEffect(()=>{const controller=new AbortController();setSolutions([]);setSolutionsState("loading");if(!pain||!sub){setSolutionsState("ready");return()=>controller.abort();}const load=async()=>{for(const base of [...new Set(bases)]){try{const res=await fetch(base.replace(/\/$/,"")+"/public/dores/"+encodeURIComponent(pain)+"/solucoes",{signal:controller.signal});if(!res.ok)continue;const data=await res.json();if(Array.isArray(data.data)){setSolutions(data.data.filter((x:Solution)=>x&&typeof x.id==="string"&&typeof x.title==="string"&&typeof x.url==="string"));setSolutionsState("ready");return;}}catch{if(controller.signal.aborted)return;}}setSolutionsState("error");};load();return()=>controller.abort();},[pain,sub,retry]);
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">ROBÔ GLOBAL</span><h1>{sub?t.pain:t.title}</h1><p>{t.intro}</p></section><section className="rg-interior-body">
 {!niche?<p>{t.select}</p>:state==="loading"?<p role="status">…</p>:state==="error"?<div role="alert"><p>{t.error}</p><button className="rg-retry" onClick={()=>setRetry(v=>v+1)}>{t.retry}</button></div>:(items.length===0||(pain&&!items.some(item=>item.id===pain)))?<p role="status">{t.empty}</p>:<div className="rg-topic-grid">{items.filter(item=>!pain||item.id===pain).map((item,i)=><article className="rg-topic" key={item.id}><span className="rg-path-number">0{i+1}</span><h2>{lang==="pt"?item.title:(item.translations?.[lang]?.title||item.title)}</h2><p>{lang==="pt"?(item.description||""):(item.translations?.[lang]?.description||item.description||"")}</p>{!sub?<button className="rg-retry" onClick={()=>setParams({niche,sub:item.id})}>{t.next} ↗</button>:!pain?<button className="rg-retry" onClick={()=>setParams({niche,sub,pain:item.id})}>{t.detail} ↗</button>:null}</article>)}</div>}
 {pain&&state==="ready"&&items.some(item=>item.id===pain)&&<section aria-label={t.solutions}><h2>{t.solutions}</h2>{solutionsState==="loading"?<p role="status">…</p>:solutionsState==="error"?<p role="alert">{t.error}</p>:solutions.length===0?<p>{t.empty}</p>:<div className="rg-topic-grid">{solutions.filter(solution=>verifiedDestination(solution.url)).map(solution=><article className="rg-topic" key={solution.id}><h3>{solution.title}</h3><p>{solution.description||""}</p><a className="rg-retry" href={verifiedDestination(solution.url) || "#"} target="_blank" rel="noopener noreferrer sponsored">{t.open} ↗</a></article>)}</div>}</section>}
 <Link className="rg-back" to={pain?"/dores?niche="+encodeURIComponent(niche)+"&sub="+encodeURIComponent(sub):sub?"/dores?niche="+encodeURIComponent(niche):"/nichos"}>← {t.back}</Link></section></div>;
}
