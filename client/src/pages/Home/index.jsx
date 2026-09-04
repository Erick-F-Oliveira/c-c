import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context.jsx";

const Home = () => {
  const { isLoggedIn: isLogged } = useAuth();

  return (
    <>
      <div className="hero bg-base-300 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Olá olá</h1>
            <p className="py-6">
              Seja bem vindo ao Cartas & Cristais
              <br />
            </p>
            {isLogged ? (
              <Link to="/me" className="btn btn-primary btn-lg">
                Bora lá
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-lg">
                Bora lá
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
