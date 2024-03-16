import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null); // Optionally clear tokens here as needed
    };

    const isLoggedIn = () => !!user; // Convert truthy/falsy value to boolean

    // The context value that will be supplied to any descendants of this component.
    const contextValue = {
        user,
        login,
        logout,
        isLoggedIn,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
