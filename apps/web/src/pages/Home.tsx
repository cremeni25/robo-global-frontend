import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="max-w-xl w-full text-center px-6">
        <h1 className="text-3xl font-semibold mb-6">
          Em qual área você busca resultado hoje?
        </h1>

        <button
          onClick={() => navigate("/nichos")}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded text-lg"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
