import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default </Button>
      <Button>primary </Button>
      <Button>outline primary</Button>
    </div>
  );
};

export default ButtonPage;
