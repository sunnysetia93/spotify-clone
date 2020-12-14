import React from 'react';

export const MainAppContext = React.createContext();

export const MainAppProvider = ({initialState, reducer, children}) => (
    <MainAppContext.Provider value={React.useReducer(reducer)}>
        {children}
    </MainAppContext.Provider>
)