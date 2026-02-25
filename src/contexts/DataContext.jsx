import { DataContext } from '../hooks/useData';
import { useState } from 'react';

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const addItem = (item) => {
    setData((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    if (!id) return;
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const contextValue = {
    data,
    addItem,
    deleteItem,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
}
