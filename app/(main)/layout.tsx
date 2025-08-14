type props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
  return <div>{children}</div>;
};

export default MainLayout;
