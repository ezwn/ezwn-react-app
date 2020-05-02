import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children, features }) => {

    const findModuleById = (id) => {
        return features.find(feature => feature.id === id);
    };

    const hasModule = (id) => {
        return !!(findModuleById(id));
    };

    return <AppContext.Provider value={{ features, findModuleById, hasModule }}>
        {children}
    </AppContext.Provider>
};

export const useAppContext = () => useContext(AppContext);
