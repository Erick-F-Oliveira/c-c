import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import getAvatarUrl from "../../utils/getAvatarUrl";

const Profile = () => {
  const { user } = useAuth();
  const { id: userId } = useParams();

  // Se o ID da URL bater com o ID do usuário logado (ou não tiver ID na rota)
  const isOwner = userId === user?.userId || !userId;
  const avatarUrl = getAvatarUrl(user);
  const isInLobby = window.location.pathname === "/lobby";
  // Mock provisório de estatísticas do jogador
  const stats = {
    matchesPlayed: 14,
    monstersSlain: 38,
    crystalsGathered: 120,
    favoriteClass: "Mago",
    level: 5,
    rank: "Aventureiro de Cristal",
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
      {/* Cabeçalho do Perfil / Ficha */}
      <div className="card bg-base-200 border border-base-300 p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar com moldura */}
          <div className="avatar">
            <div className="bg-neutral text-neutral-content rounded-2xl w-24 h-24 flex items-center justify-center">
              <img
                src={avatarUrl}
                alt={user?.username}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dados Principais */}
          <div className="flex-1 text-center sm:text-left space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
              <h1 className="text-2xl font-bold tracking-tight">
                {user?.username || "Jogador Anônimo"}
              </h1>
              <span className="badge badge-primary badge-outline text-xs font-mono">
                {stats.rank}
              </span>
            </div>

            <p className="text-sm text-accent">LV: {stats.level}</p>
            <p className="text-xs font-mono opacity-50">
              ID: {userId || user?._id || user?.id}
            </p>
            <p className="text-sm opacity-80 pt-2">
              Classe predileta:{" "}
              <span className="font-semibold text-primary">
                {stats.favoriteClass}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Estatísticas de Jogo */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card bg-base-200 border border-base-300 p-4 text-center">
          <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">
            Partidas
          </span>
          <p className="text-2xl font-black font-mono mt-1 text-base-content">
            {stats.matchesPlayed}
          </p>
        </div>

        <div className="card bg-base-200 border border-base-300 p-4 text-center">
          <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">
            Monstros Derrotados
          </span>
          <p className="text-2xl font-black font-mono mt-1 text-error">
            ⚔️ {stats.monstersSlain}
          </p>
        </div>

        <div className="card bg-base-200 border border-base-300 p-4 text-center">
          <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">
            Cristais Obtidos
          </span>
          <p className="text-2xl font-black font-mono mt-1 text-info">
            💎 {stats.crystalsGathered}
          </p>
        </div>
      </div>

      {/* Aba de Decks / Conquistas Recentes */}
      <div className="card bg-base-200/50 border border-base-300 p-6 rounded-2xl space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-wider opacity-70">
            Decks & Especializações
          </h2>
          <span className="text-xs opacity-50">Configurações de Batalha</span>
        </div>

        <div className="p-4 bg-base-300/40 rounded-xl border border-base-content/5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm">Deck Padrão de Aventura</h3>
            <p className="text-xs opacity-60">
              20 Cartas • Foco em Magia Arcana e Controle
            </p>
          </div>
          <span className="badge badge-success badge-xs">Ativo</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
