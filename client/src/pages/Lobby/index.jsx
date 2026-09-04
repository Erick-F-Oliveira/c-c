import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  // Cria uma sala com código aleatório (ex: "K8X2")
  const handleCreateRoom = () => {
    const generatedCode = Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase();
    navigate(`/room/${generatedCode}`);
  };

  // Entra em uma sala existente digitada no input
  const handleJoinRoom = (e) => {
    e.preventDefault();
    const cleanCode = roomCode.trim().toUpperCase();
    if (!cleanCode) return;
    navigate(`/room/${cleanCode}`);
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Salas de Partida</h1>

      <div className="card bg-base-200 border border-base-300 p-6 space-y-4">
        {/* Opção 1: Criar */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Iniciar Nova Mesa</h2>
          <button onClick={handleCreateRoom} className="btn btn-primary w-full">
            Criar Sala
          </button>
        </div>

        <div className="divider text-xs opacity-50">OU</div>

        {/* Opção 2: Entrar com código */}
        <form onSubmit={handleJoinRoom} className="space-y-3">
          <h2 className="font-semibold text-lg">Entrar com Código</h2>
          <input
            type="text"
            placeholder="Ex: ABCD"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            maxLength={6}
            className="input input-bordered w-full uppercase font-mono tracking-widest text-center"
          />
          <button type="submit" className="btn btn-neutral w-full">
            Entrar na Sala
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
