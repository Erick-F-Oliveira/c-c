import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useAuth } from "../contexts/auth.context";
import getAvatarUrl from "../utils/getAvatarUrl";
import LogoutButton from "./LogoutButton";
import { TbCards } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { GoGear } from "react-icons/go";

const Header = () => {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();
  const avatarUrl = getAvatarUrl(user);
  const isInLobby =
    location.pathname === "/lobby" || location.pathname.startsWith("/room");

  return (
    <div className="navbar bg-base-100/20 backdrop-blur-md sticky top-0 z-5 px-4 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold gap-2">
          <img src={logo} width={"50px"} />
          <span className="badge badge-accent badge-xs">v0.1</span>
        </Link>
      </div>
      {isLoggedIn && !isInLobby && (
        <div>
          <Link to="/lobby" className="btn btn-primary btn-sm md:btn-md gap-2">
            <span>Jogar</span>
          </Link>
        </div>
      )}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar online"
            >
              <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img src={avatarUrl} alt={user.username} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52 border border-base-300"
            >
              <li className="menu-title text-primary font-bold">
                {user.username}
              </li>
              <li>
                <Link to={`/profile/${user.userId}`}>
                  <IoPerson className="text-lg" /> Perfil
                </Link>
              </li>
              <li>
                <Link
                  to={`/me/${user.userId}/deck`}
                  className="flex items-center gap-2 color-secondary"
                >
                  <TbCards className="text-lg" /> Meu Deck
                </Link>
              </li>
              <li>
                <Link to={`/me/${user.userId}/settings`}>
                  <GoGear className="text-lg" /> Configurações
                </Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <LogoutButton className="text-lg" />
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-primary btn-sm md:btn-md gap-2"
          >
            <span>Entrar</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
