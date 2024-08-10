import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chatAppUser')) || null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
