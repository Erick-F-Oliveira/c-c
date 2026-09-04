import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context.jsx";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="hero bg-base-300 min-h-screen">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    // Redireciona o usuário se ele não estiver logado
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
