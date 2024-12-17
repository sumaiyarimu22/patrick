import React, {
  createContext,
  Fragment,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";

const TabContext = createContext(undefined);

const Tabs = ({ children }) => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex, setItem }}>
      {children}
      {items.map((item, key) => (
        <Fragment key={key}>{item.component}</Fragment>
      ))}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("useTab context");
  }

  return context;
};

const TabItem = memo(({ children, id }) => {
  const { setItem } = useTab();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (id && isLoaded === false) {
      setItem({
        id,
        component: children,
      });
      setLoaded(true);
    }
  }, [children, id, setItem, isLoaded]);

  return null;
});

export default Object.assign(Tabs, {
  Item: TabItem,
});
