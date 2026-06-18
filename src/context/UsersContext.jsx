import { createContext, useState } from "react";

export const UsersContext = createContext();


export const UsersProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login = () => {
        setUser({
            name: "Hassan",
            role: "Student",
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UsersContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};