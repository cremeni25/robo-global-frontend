import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const copy = {
  pt: {
    eyebrow: "ROBÔ GLOBAL · ENCAMINHAMENTO",
    title: "Sua escolha merece um caminho seguro.",
    intro: "O ROBÔ GLOBAL apresenta possibilidades relacionadas à sua necessidade. A contratação, quando disponível, acontece diretamente no ambiente do produtor.",
    missing: "Nenhuma solução comercial validada foi selecionada para este encaminhamento.",
    candidate: "Uma oferta em avaliação não é disponibilizada automaticamente ao público.",
    back: "Voltar aos temas",
    note: "O ROBÔ GLOBAL não processa pagamentos nem solicita dados financeiros do visitante.",
  },
  en: {
    eyebrow: "ROBÔ GLOBAL · NEXT STEP",
    title: "Your choice deserves a safe path.",
    intro: "ROBÔ GLOBAL presents possibilities related to your needs. Purchases, when available, take place directly on the producer's website.",
    missing: "No validated commercial solution has been selected for this step.",
    candidate: "Offers under review are not automatically made available to visitors.",
    back: "Back to topics",
    note: "ROBÔ GLOBAL does not process payments or request visitors' financial details.",
  },
  es: {
    eyebrow: "ROBÔ GLOBAL · SIGUIENTE PASO",
    title: "Tu elección merece un camino seguro.",
    intro: "ROBÔ GLOBAL presenta posibilidades relacionadas con tus necesidades. Las compras, cuando estén disponibles, se realizan directamente en el sitio del productor.",
    missing: "No se ha seleccionado una solución comercial validada para este paso.",
    candidate: "Las ofertas en evaluación no se muestran automáticamente al público.",
    back: "Volver a los temas",
    note: "ROBÔ GLOBAL no procesa pagos ni solicita datos financieros de los visitantes.",
  },
};

export default function Go() {
  const { lang } = useLanguage();
  const [params] = useSearchParams();
  const t = copy[lang] ?? copy.pt;
  const requestedOffer = params.has("produto") || params.has("offer") || params.has("gul");

  // Do not forward candidate identifiers or arbitrary URLs to a destination.
  // Only a server-validated, published offer may trigger an affiliate redirect.
  return (
    <main className="rg-interior">
      <section className="rg-interior-hero">
        <span className="rg-kicker">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </section>
      <section className="rg-interior-body">
        <div className="rg-topic-grid">
          <article className="rg-topic">
            <h2>{t.missing}</h2>
            {requestedOffer && <p>{t.candidate}</p>}
            <p>{t.note}</p>
          </article>
        </div>
        <Link className="rg-back" to="/nichos">← {t.back}</Link>
      </section>
    </main>
  );
}
