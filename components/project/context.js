import { useContext, createContext, useState } from 'react';

const Context = createContext({ menuVisible: false });

export const ProjectContextProvider = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  function closeMenu() {
    if (menuVisible) {
      setMenuVisible(false);
    }
  }

  function toggleMenu() {
    setMenuVisible((v) => !v);
  }

  return (
    <Context.Provider value={{ closeMenu, toggleMenu, menuVisible }}>
      {children}
    </Context.Provider>
  );
};

export const useProjectNavContext = () => {
  const ctx = useContext(Context);
  return {
    menuVisible: ctx.menuVisible,
    toggleMenu: ctx.toggleMenu,
    closeMenu: ctx.closeMenu,
  };
};
