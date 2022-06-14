import { MainLayoutContext } from '.';

const MainLayoutContextProvider = ({ children }) => {
  return (
    <MainLayoutContext.Provider value={{}}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export default MainLayoutContextProvider;
