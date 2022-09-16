import { useReducer } from 'react';
import { useContext } from 'react';

const { createContext } = require('react');

const SiteContext = createContext(null);

const initialState = {
  navData: [],
  initialized: false,
  tooltip: null,
};
function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_TOOLTIP':
      return {
        ...state,
        tooltip: payload,
      };
    case 'INITIALIZE_NAV':
      return state.initialized
        ? state
        : {
            ...state,
            navData: payload,
            initialized: true,
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

  function updateTootltip(data) {
    dispatch({
      type: 'SET_TOOLTIP',
      payload: data,
    });
  }

  return (
    <SiteContext.Provider
      value={{
        navData: state.navData,
        initialized: state.initialized,
        tooltip: state.tooltip,
        setTooltip: updateTootltip,
        setNavData: setNav,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useNavData = () => {
  const context = useContext(SiteContext);
  return {
    navData: context.navData,
    setNav: context.setNavData,
    initialized: context.initialized,
  };
};

export const useTooltip = () => {
  const context = useContext(SiteContext);
  return {
    tooltip: context.tooltip,
    setTooltip: context.setTooltip,
  };
};

export const useSiteContext = (data) => {
  const context = useContext(SiteContext);
  return context;
};
