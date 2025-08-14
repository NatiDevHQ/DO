import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const Sidebar = ({ className }: props) => {
  return (
    <div
      className={cn(
        "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      sidebar
    </div>
  );
};
