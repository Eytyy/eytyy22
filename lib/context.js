import { useCallback } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';

const { createContext } = require('react');

const SiteContext = createContext(null);

const initialState = {
  navData: [],
  initialized: false,
  height: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'INITIALIZE_NAV':
      return state.initialized
        ? state
        : {
            ...state,
            navData: payload,
            initialized: true,
          };
    case 'UPDATE_NAV_HEIGHT':
      return {
        ...state,
        height: payload,
      };
    default:
      return state;
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setNav(data) {
    dispatch({
      type: 'INITIALIZE_NAV',
      payload: data,
    });
  }

  const updateNavHeight = useCallback((h) => {
    dispatch({
      type: 'UPDATE_NAV_HEIGHT',
      payload: h,
    });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        navData: state.navData,
        initialized: state.initialized,
        height: state.height,
        setNavData: setNav,
        updateNavHeight: updateNavHeight,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(SiteContext);
  return {
    navData: context?.navData,
    navHeight: context?.height,
    setNav: context?.setNavData,
    updateNavHeight: context?.updateNavHeight,
    initialized: context?.initialized,
  };
};

export const useSiteContext = (data) => {
  const context = useContext(SiteContext);
  return context;
};
