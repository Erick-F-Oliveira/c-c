import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context.jsx";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { GAMEICONS } from "../../utils/commonIcons.jsx";

const Room = () => {
  const { code } = useParams();
  const { user } = useAuth();

  const [enemyOnTable, setEnemyOnTable] = useState(null);
  const [logs, setLogs] = useState([]);
  const socketRef = useRef(null);
  const logContainerRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      withCredentials: true,
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      socket.emit("join_room", code);
    });

    // Escuta a carta que saiu e adiciona ao log
    socket.on("enemy_drawn", (data) => {
      const enemyName =
        data.enemy?.name || data.enemy?.nome || "Criatura Desconhecida";
      const isMe = data.drawnBy === socket.id;
      const timestamp = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setEnemyOnTable(data.enemy);

      setLogs((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          time: timestamp,
          text: `${isMe ? "Você" : "Um jogador"} sorteou: ${enemyName}`,
          enemy: data.enemy,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [code]);

  // Auto-scroll para manter a mensagem mais recente visível
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const puxarCriatura = () => {
    if (!socketRef.current) return;
    socketRef.current.emit("request_enemy_for_room", code);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 space-y-6">
      {/* Barra de Status */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mesa Central (2 Colunas) */}
        <div className="lg:col-span-2 min-h-[380px] border-2 border-dashed border-base-300 rounded-2xl flex flex-col items-center justify-center gap-6 p-6 bg-base-200/30">
          <button
            onClick={puxarCriatura}
            className="btn btn-error btn-md shadow-md"
          >
            ⚔️ Sortear Inimigo para a Mesa
          </button>

          {enemyOnTable ? (
            <div className="card bg-base-200 border border-error/50 shadow-2xl w-72 text-left p-4">
              <span className="badge badge-error badge-sm mb-2">
                Criatura Ativa
              </span>
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
                  {GAMEICONS.ATQ}{" "}
                  {enemyOnTable.attack ?? enemyOnTable.ataque ?? 0} ATQ
                </span>
                <span className="text-error font-bold">
                  {GAMEICONS.DEF}{" "}
                  {enemyOnTable.defense ?? enemyOnTable.defesa ?? 0} DEF
                </span>
                <span className="text-success font-bold">
                  {GAMEICONS.HP}{" "}
                  {enemyOnTable.hp ??
                    enemyOnTable.life ??
                    enemyOnTable.vida ??
                    0}{" "}
                  HP
                </span>
              </div>
            </div>
          ) : (
            <p className="text-xs opacity-40">Nenhum inimigo ativo na mesa.</p>
          )}

          <Link to="/lobby" className="btn btn-sm btn-ghost mt-auto">
            Sair da Sala
          </Link>
        </div>

        {/* Caixa de Log de Cartas (1 Coluna lateral) */}
        <div className="card bg-base-200 border border-base-300 shadow-md flex flex-col h-[380px]">
          <div className="p-3 border-b border-base-300 flex justify-between items-center">
            <h3 className="font-bold text-sm tracking-wide">
              📜 Histórico de criaturas
            </h3>
            <span className="badge badge-neutral badge-xs">{logs.length}</span>
          </div>

          <div
            ref={logContainerRef}
            className="p-3 overflow-y-auto flex-1 space-y-2 font-mono text-xs"
          >
            {logs.length === 0 ? (
              <p className="text-center opacity-40 py-8">
                Nenhuma carta sorteada ainda...
              </p>
            ) : (
              logs.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-base-300/50 p-2 rounded border border-base-content/5 leading-relaxed"
                >
                  <span className="opacity-40 text-[10px] mr-1">
                    [{entry.time}]
                  </span>
                  <span className="font-semibold text-error">{entry.text}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
