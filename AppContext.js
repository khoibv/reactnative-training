import React, {useContext, useEffect, useReducer} from 'react';

const appInitialState = {
  signedIn: false,
};
const AppContext = React.createContext(appInitialState);

export const useAppContext = () => useContext(AppContext);

export default AppContext;

// reducers
const AppReducers = (state, action) => {
  const {type, payload} = action;

  // Log state before changed
  console.trace('BEFORE state=', state, ', action=', action);

  switch (type) {
    case 'signIn': {
      return {...state, signedIn: true};
    }

    case 'signOut': {
      return {...state, signedIn: false};
    }
  }
};

// actions
const AppActions = (state, dispatch) => {
  const login = async (userId, password) => {
    // TODO: do authentication here

    // if success, update flag
    dispatch({type: 'signIn', payload: {userId, password}});
  };

  const logout = async () => {
    dispatch({type: 'signOut'});
  };

  return {
    login,
    logout,
  };
};

export function AppProvider({initialState = appInitialState, children}) {
  const [state, dispatch] = useReducer(AppReducers, initialState);
  const actions = AppActions(state, dispatch);

  // Log state after changed
  useEffect(() => console.trace('AFTER  state=', state), [state]);

  return (
    <AppContext.Provider value={{...state, actions, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}
