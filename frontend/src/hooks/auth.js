import { createContext, useCallback, useState, useContext } from 'react';
import api from '../api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    if (typeof window === "undefined") {
      return {}
    }
    const token = localStorage.getItem('@IFTMEvents:token');
    const user = localStorage.getItem('@IFTMEvents:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ cpf, password }) => {
    if (typeof window === "undefined") {
      return {}
    }

    const response = await api.post('auth', {
      cpf,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@IFTMEvents:token', token);
    localStorage.setItem('@IFTMEvents:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    if (typeof window === "undefined") {
      return {}
    }

    localStorage.removeItem('@IFTMEvents:token');
    localStorage.removeItem('@IFTMEvents:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };