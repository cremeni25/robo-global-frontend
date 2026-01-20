import { useNavigate } from "react-router-dom";

const nichos = [
  { id: "renda", label: "Renda Extra" },
  { id: "negocios", label: "Negócios Digitais" },
  { id: "performance", label: "Alta Performance" },
  { id: "financas", label: "Organização Financeira" },
];

export default function Nichos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Escolha o contexto que mais se aproxima da sua realidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nichos.map((nicho) => (
            <button
              key={nicho.id}
              onClick={() => navigate(`/dores/${nicho.id}`)}
              className="p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-blue-600 transition text-left"
            >
              <span className="text-lg">{nicho.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
