import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

type Offer = {id:string;title?:string;name?:string;description?:string;url?:string;go_url?:string};
type ViewState = "loading" | "ready" | "error";
const words = {
 pt:{title:"Soluções disponíveis",intro:"Aqui aparecem somente oportunidades autorizadas e verificadas.",empty:"Ainda não há ofertas comerciais autorizadas para publicação.",error:"Não foi possível consultar as ofertas agora.",retry:"Tentar novamente",open:"Conhecer a solução",back:"Voltar ao início"},
 en:{title:"Available solutions",intro:"Only verified, authorized opportunities appear here.",empty:"No commercial offers are authorized for publication yet.",error:"We could not load offers right now.",retry:"Try again",open:"Explore solution",back:"Back to home"},
 es:{title:"Soluciones disponibles",intro:"Aquí solo aparecen oportunidades autorizadas y verificadas.",empty:"Todavía no hay ofertas comerciales autorizadas para publicar.",error:"No pudimos consultar las ofertas ahora.",retry:"Intentar de nuevo",open:"Conocer la solución",back:"Volver al inicio"}
};
export default function Ofertas(){
 const {lang}=useLanguage();const t=words[lang];const [items,setItems]=useState<Offer[]>([]);const [state,setState]=useState<ViewState>("loading");const [attempt,setAttempt]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();
  setState("loading");
  const configured=(import.meta.env.VITE_API_URL as string|undefined)?.trim();
  const bases=[configured,"https://robo-global-api-v2.onrender.com"].filter((x):x is string=>!!x);
  (async()=>{
   for(const base of [...new Set(bases)]){
    try{
     const response=await fetch(base.replace(/\/$/,"")+"/public/ofertas",{signal:controller.signal,headers:{Accept:"application/json"}});
     if(!response.ok)continue;
     const body:unknown=await response.json();
     const data=Array.isArray(body)?body:(body&&typeof body==="object"&&"data" in body?(body as {data:unknown}).data:null);
     if(!Array.isArray(data))continue;
     if(controller.signal.aborted)return;
     setItems(data.filter((x):x is Offer=>!!x&&typeof x==="object"&&typeof x.id==="string"&&typeof (x.url||x.go_url)==="string").map(x=>({...x,url:new URL(x.url||x.go_url||"",base).href})));
     setState("ready");return;
    }catch{if(controller.signal.aborted)return;}
   }
   if(!controller.signal.aborted)setState("error");
  })();
  return()=>controller.abort();
 },[attempt]);
 return <div className="rg-interior"><section className="rg-interior-hero"><span className="rg-kicker">ROBÔ GLOBAL</span><h1>{t.title}</h1><p>{t.intro}</p></section><section className="rg-interior-body">
 {state==="loading"?<p role="status">…</p>:state==="error"?<div role="alert"><p>{t.error}</p><button className="rg-retry" onClick={()=>setAttempt(x=>x+1)}>{t.retry}</button></div>:items.length===0?<p role="status">{t.empty}</p>:<div className="rg-topic-grid">{items.map(item=><article className="rg-topic" key={item.id}><h2>{item.title||item.name||t.title}</h2><p>{item.description||""}</p><a className="rg-retry" href={item.url||item.go_url} rel="noopener noreferrer sponsored" target="_blank">{t.open} ↗</a></article>)}</div>}
 <Link className="rg-back" to="/">← {t.back}</Link></section></div>;
}
