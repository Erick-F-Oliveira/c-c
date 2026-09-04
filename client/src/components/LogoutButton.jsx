import { useAuth } from "../contexts/auth.context.jsx";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";

function LogoutButton({ className = "" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();

    if (result?.success) {
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`btn btn-error btn-sm ${className}`}
      title="Sair"
    >
      <ImExit />
    </button>
  );
}

export default LogoutButton;
