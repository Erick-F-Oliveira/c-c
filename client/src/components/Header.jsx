import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";


//user será trazido depois pela autenticação
const Header = ({ user }) => {
  return (
    <div className="navbar bg-base-100/50 backdrop-blur-md sticky top-0 z-50 px-4 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold gap-2">
          <img src={logo} width={"50px"} />
          <span className="badge badge-accent badge-xs">v0.1</span>
        </Link>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar online"
            >
              <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user.avatar
                      ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
                      : "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  }
                  alt={user.username}
                />
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
                <a>👤 Perfil</a>
              </li>
              <li>
                <a>🎴 Meu Deck</a>
              </li>
              <li>
                <a>⚙️ Configurações</a>
              </li>
              <div className="divider my-1"></div>
              <li>
                <a className="text-error" href="/auth/logout">
                  🚪 Sair
                </a>
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
}

export default Header;
