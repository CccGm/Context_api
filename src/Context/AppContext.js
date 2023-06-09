import React, {Children, useState} from 'react';

const AppContext = React.createContext();
export const AppProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const [Data, SetData] = useState([]);
  return (
    <AppContext.Provider value={{count, setCount, Data, SetData}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
