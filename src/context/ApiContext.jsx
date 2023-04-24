import { createContext, useState } from 'react';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
    const [userData, setUserData] = useState({});

    return (
        <UseApiContext.Provider
            value={{
                userData,
                setUserData,
            }}
        >
            {children}
        </UseApiContext.Provider>
    );
};
