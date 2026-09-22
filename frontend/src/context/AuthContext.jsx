import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('sabha_user');
    return saved ? JSON.parse(saved) : {
      id: 'u-1',
      name: 'Dr. Elena Vance',
      email: 'elena@sabha.ai',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    };
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('sabha_user') || true;
  });

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('sabha_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('sabha_user');
  };

  const quickDemoLogin = (role = 'Admin') => {
    const demoProfiles = {
      Admin: { id: 'u-1', name: 'Dr. Elena Vance', email: 'elena@sabha.ai', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
      Member: { id: 'u-2', name: 'Marcus Chen', email: 'marcus@sabha.ai', role: 'Member', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      Guest: { id: 'u-4', name: 'Guest Executive', email: 'guest@sabha.ai', role: 'Guest', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
    };
    login(demoProfiles[role] || demoProfiles.Admin);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, quickDemoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
