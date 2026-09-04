import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/axios.service";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Função de logout
  const logout = async () => {
    try {
      // Chama o endpoint de logout do Passport
      await api.post("/auth/logout");

      // Limpa o estado
      setIsLoggedIn(false);
      setUser(null);

      return { success: true };
    } catch (error) {
      // Mesmo se o endpoint falhar, limpa o estado local
      setIsLoggedIn(false);
      setUser(null);

      return {
        success: false,
        error: error.response?.data?.error || "Erro ao fazer logout",
      };
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await api.get("/user/me", {
          withCredentials: true,
        });
        setIsLoggedIn(true);
        setUser(response.data.user);
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const value = {
    isLoggedIn,
    user,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para acessar o contexto
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
