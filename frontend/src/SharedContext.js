import React, { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);
  //   const [appData, setAppData] = useState(null);

  return (
    <SharedContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </SharedContext.Provider>
  );
};
