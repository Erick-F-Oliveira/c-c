import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context.jsx";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

const Room = () => {
  const { code } = useParams();
  const { user } = useAuth();

  const [enemyOnTable, setEnemyOnTable] = useState(null);
  const [lastDrawnBy, setLastDrawnBy] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      withCredentials: true,
    });

    const socket = socketRef.current;

    // 1. Entra na sala passando a string do código
    socket.emit("join_room", code);

    // 2. Ouve o evento exato que o backend emite
    socket.on("enemy_drawn", (data) => {
      // data vem no formato: { drawnBy: socket.id, enemy: enemyDrawn }
      setEnemyOnTable(data.enemy);
      setLastDrawnBy(data.drawnBy);
    });

    return () => {
      socket.disconnect();
    };
  }, [code]);

  const puxarCriatura = () => {
    console.log("Clicou no botão! Emitindo para a sala:", code);
    if (!socketRef.current) {
      console.error("Socket ainda não está pronto!");
      return;
    }
    socketRef.current.emit("request_enemy_for_room", code);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-4">
      {/* Topo / Status da Sala */}
      <div className="flex justify-between items-center bg-base-200 p-4 rounded-xl border border-base-300">
        <div>
          <span className="text-xs opacity-60">Código da Sala</span>
          <h2 className="text-xl font-mono font-black text-primary">{code}</h2>
        </div>
        <div className="text-right">
          <span className="text-xs opacity-60">Jogador Conectado</span>
          <p className="font-semibold">{user?.username}</p>
        </div>
      </div>

      {/* Centro do Tabuleiro: Área do Inimigo Ativo */}
      <div className="min-h-[350px] border-2 border-dashed border-base-300 rounded-2xl flex flex-col items-center justify-center gap-6 p-6 bg-base-200/30">
        <button
          onClick={puxarCriatura}
          className="btn btn-error btn-md shadow-md"
        >
          ⚔️ Sortear Inimigo para a Mesa
        </button>

        {enemyOnTable ? (
          <div className="card bg-base-200 border border-error/50 shadow-2xl w-72 text-left p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="badge badge-error badge-sm">Criatura</span>
              <span className="text-[10px] font-mono opacity-50">
                Puxado por:{" "}
                {lastDrawnBy === socketRef.current?.id
                  ? "Você"
                  : "Outro Jogador"}
              </span>
            </div>

            {/* Renderiza as propriedades que o seu CreatureCardRegistry tiver */}
            <h3 className="text-lg font-bold">
              {enemyOnTable.name ||
                enemyOnTable.nome ||
                "Criatura Desconhecida"}
            </h3>

            {enemyOnTable.description && (
              <p className="text-xs opacity-70 mt-1">
                {enemyOnTable.description}
              </p>
            )}

            <div className="flex justify-between items-center mt-4 text-sm font-mono bg-base-300/60 p-2 rounded">
              <span className="text-error font-bold">
                ⚔️ {enemyOnTable.attack ?? enemyOnTable.ataque ?? 0} ATQ
              </span>
              <span className="text-success font-bold">
                🛡️{" "}
                {enemyOnTable.hp ?? enemyOnTable.life ?? enemyOnTable.vida ?? 0}{" "}
                HP
              </span>
            </div>
          </div>
        ) : (
          <p className="text-xs opacity-40">Nenhum inimigo ativo na mesa.</p>
        )}

        <Link to="/lobby" className="btn btn-sm btn-ghost mt-4">
          Sair da Sala
        </Link>
      </div>
    </div>
  );
};

export default Room;
