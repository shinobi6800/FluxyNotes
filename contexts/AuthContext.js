import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser(); // ✅ Only called once at startup
  }, []);

  const checkUser = async () => {
    setLoading(true);
    const userData = await authService.getUser();
    setUser(userData);
    setLoading(false);
  };

  const login = async (email, password) => {
    const response = await authService.login(email, password);
    
    if (!response.success) {
      return response;
    }

    setUser(await authService.getUser()); // ✅ Update state directly
    return { success: true };
  };

  const register = async (email, password) => {
    const response = await authService.register(email, password);

    if (!response.success) {
      return response;
    }

    return login(email, password); // ✅ Auto-login after registration
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
