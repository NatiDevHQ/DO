type props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
