import { useParams, useNavigate } from "react-router-dom";

const doresPorNicho: Record<string, string[]> = {
  renda: [
    "Trabalho muito e ganho pouco",
    "Minha renda é instável",
    "Preciso de previsibilidade",
  ],
  negocios: [
    "Tenho dificuldade para escalar",
    "Vendo pouco no digital",
    "Falta consistência",
  ],
  performance: [
    "Resultados irregulares",
    "Falta foco e direção",
    "Muito esforço, pouco retorno",
  ],
  financas: [
    "Perco o controle do dinheiro",
    "Não consigo planejar",
    "Vivo no limite",
  ],
};

export default function Dores() {
  const { nicho } = useParams<{ nicho: string }>();
  const navigate = useNavigate();

  const dores = nicho ? doresPorNicho[nicho] : [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Qual frase mais representa você hoje?
        </h2>

        <div className="space-y-4">
          {dores.map((dor, index) => (
            <button
              key={index}
              onClick={() => navigate("/go")}
              className="w-full p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-pink-500 transition text-left"
            >
              {dor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
