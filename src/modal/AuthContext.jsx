import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            const storedAuth = localStorage.getItem('isAuthenticated');
            const storedToken = localStorage.getItem('token');

            if (storedUser && storedAuth && storedToken) {
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(JSON.parse(storedAuth));
                setToken(storedToken);
            }
        } catch (error) {
            console.error("Ошибка при парсинге данных из localStorage:", error);
        }
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        setToken(userData.token);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('token', userData.token);  // Store token
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, token }}>
            {children}
        </AuthContext.Provider>
    );
};
