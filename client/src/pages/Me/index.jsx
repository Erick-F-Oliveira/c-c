import { useAuth } from "../../contexts/auth.context.jsx";
import { Navigate, Link } from "react-router-dom";

const Me = () => {
  const { user, isLoggedIn } = useAuth();

  let avatarUrl = "https://cdn.discordapp.com/embed/avatars/0.png";
  if (isLoggedIn && user?.discordAvatar) {
    avatarUrl = `https://cdn.discordapp.com/avatars/${user.discordId}/${user.discordAvatar}.png`;
  } else if (user?.googleAvatar) {
    avatarUrl = user.googleAvatar;
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      {/* 1. Barra de boas-vindas do jogador */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-base-200 p-4 rounded-2xl border border-base-300">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatarUrl} alt={user?.username} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              Bom ter você aqui, {user?.username}!
            </h1>
            <p className="text-xs opacity-60 font-mono">
              ID: {user?.publicId || user?.userId}
            </p>
          </div>
        </div>

        <Link
          to={`/profile/${user?.userId}`}
          className="btn btn-outline btn-sm"
        >
          Ver Perfil
        </Link>
      </div>

      <div className="hero bg-gradient-to-r from-primary/10 via-base-200 to-secondary/10 rounded-3xl border border-base-300 p-8 text-center sm:text-left">
        <div className="hero-content flex-col sm:flex-row justify-between w-full">
          <div className="space-y-2 max-w-md">
            <span className="badge badge-primary badge-sm">
              Temporada Ativa
            </span>
            <h2 className="text-3xl font-black">Pronto para uma partida?</h2>
            <p className="text-sm opacity-70">
              Monte sua estratégia, escolha suas cartas e enfrente adversários
              ou teste seus decks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <Link
              to="/play"
              className="btn btn-primary btn-md shadow-lg shadow-primary/20"
            >
              ⚔️ Jogar Agora
            </Link>
            <Link to="/lobby" className="btn btn-neutral btn-md">
              Salas Customizadas
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Atalhos rápidos em Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/"
          className="card bg-base-200 hover:bg-base-300 transition-all border border-base-300"
        >
          <div className="card-body p-6">
            <div className="text-2xl mb-2">🎴</div>
            <h3 className="card-title text-base font-bold">Minha Coleção</h3>
            <p className="text-xs opacity-70">
              Gerencie seus decks, cartas desbloqueadas e magias.
            </p>
          </div>
        </Link>

        <Link
          to="/"
          className="card bg-base-200 hover:bg-base-300 transition-all border border-base-300"
        >
          <div className="card-body p-6">
            <div className="text-2xl mb-2">🪙</div>
            <h3 className="card-title text-base font-bold">Loja do Jogo</h3>
            <p className="text-xs opacity-70">
              Adquira novos pacotes, cristais e itens rotativos.
            </p>
          </div>
        </Link>

        <Link
          to="/"
          className="card bg-base-200 hover:bg-base-300 transition-all border border-base-300"
        >
          <div className="card-body p-6">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="card-title text-base font-bold">Classificação</h3>
            <p className="text-xs opacity-70">
              Confira a tabela de líderes da temporada e pontuações.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Me;
