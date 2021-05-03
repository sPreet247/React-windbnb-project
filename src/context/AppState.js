import AppContext from './AppContext';

import { useState } from 'react';

const AppState = (props) => {
  const [location, setLocation] = useState('Location');
  const [count, setCount] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        count,
        setCount,
        navExpand,
        setNavExpand,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
