import AppContext from './AppContext';

import { useState } from 'react';

const AppState = (props) => {
  const [location, setLocation] = useState('Location');
  const [count, setCount] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        count,
        setCount,
        navExpand,
        setNavExpand,
        adult,
        setAdult,
        child,
        setChild,
        isOpen,
        setIsOpen,
        searchActive,
        setSearchActive,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
