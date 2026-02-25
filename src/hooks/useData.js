import { createContext, useContext } from 'react';

export const DataContext = createContext(null);

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) throw new Error('context請使用在provider內');

  return context;
};
