import React, {useState, createContext} from 'react';

export const AppContext = createContext();

const ContextProvider = AppContext.Provider;
export const Consumer = AppContext.Consumer;

export const Provider = props => {
  const initialState = {
    coffees: [],
    cart: [],
    showLoadScreen: true,
    loading: true,
    isThemeDark: false,
  };

  const [state, setState] = useState(initialState);

  return (
    <ContextProvider value={[state, setState]}>
      {props.children}
    </ContextProvider>
  );
};
