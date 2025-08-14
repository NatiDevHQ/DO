import { Sidebar } from "@/components/sidebar";

type props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <>
      <Sidebar />
      <main className="pl-[256px] h-full">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
