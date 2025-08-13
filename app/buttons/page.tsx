import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default </Button>
      <Button variant="primary">primary </Button>
      <Button variant="primaryOutline">outline primary</Button>
      <Button variant="primary">secondry</Button>
      <Button variant="primaryOutline">outline second</Button>
    </div>
  );
};

export default ButtonPage;
