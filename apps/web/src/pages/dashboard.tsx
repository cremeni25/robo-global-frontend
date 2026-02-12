import { useEffect, useState } from "react";

export default function Dashboard() {

  const [status,setStatus]=useState<any>({});
  const [capital,setCapital]=useState<any>({});
  const [escala,setEscala]=useState<any>({});
  const [plataformas,setPlataformas]=useState<any[]>([]);
  const [produtos,setProdutos]=useState<any[]>([]);
  const [decisao,setDecisao]=useState<any>({});

  const api = async (p:string)=>{
    const r = await fetch(p);
    return r.json();
  };

  async function load(){
    try{
      setStatus(await api("/status"));
      setCapital(await api("/capital"));
      setEscala(await api("/escala"));
      setPlataformas(await api("/resultado"));
      setProdutos(await api("/produtos"));
      setDecisao(await api("/decisao"));
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    load();
    const t = setInterval(load,10000);
    return ()=>clearInterval(t);
  },[]);

  return (
    <div style={{padding:20,color:"#e7ebf0",background:"#0b0f14",minHeight:"100vh"}}>

      <h1>Dashboard Operacional</h1>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>

        <div>
          <h2>Status do Robô</h2>
          <b>{status.estado || "-"}</b>
          <div>{status.decisao || "-"}</div>
        </div>

        <div>
          <h2>Escala</h2>
          <b>{escala.permitida ? "PERMITIDA" : "BLOQUEADA"}</b>
          <div>Risco: {escala.risco || "-"}</div>
        </div>

        <div>
          <h2>Capital Total</h2>
          <b>{capital.total || "-"}</b>
        </div>

        <div>
          <h2>Capital em Risco</h2>
          <b>{capital.em_risco || "-"}</b>
        </div>

        <div>
          <h2>Disponível</h2>
          <b>{capital.disponivel || "-"}</b>
        </div>

        <div>
          <h2>ROI Global</h2>
          <b>{capital.roi || "-"}</b>
        </div>

      </div>

      <h2 style={{marginTop:20}}>Plataformas</h2>
      <table width="100%">
        <thead>
          <tr><th>Plataforma</th><th>Receita</th><th>Status</th></tr>
        </thead>
        <tbody>
          {plataformas.map((p,i)=>(
            <tr key={i}>
              <td>{p.nome}</td>
              <td>{p.receita}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop:20}}>Produtos</h2>
      <table width="100%">
        <thead>
          <tr><th>Produto</th><th>Plataforma</th><th>Receita</th><th>ROI</th><th>Risco</th><th>Status</th></tr>
        </thead>
        <tbody>
          {produtos.map((p,i)=>(
            <tr key={i}>
              <td>{p.nome}</td>
              <td>{p.plataforma}</td>
              <td>{p.receita}</td>
              <td>{p.roi}</td>
              <td>{p.risco}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop:20}}>Última Decisão</h2>
      <b>{decisao.acao || "-"}</b>
      <div>{decisao.motivo || "-"}</div>

    </div>
  );
}
