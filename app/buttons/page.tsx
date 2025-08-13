import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default </Button>
      <Button variant="primary">primary </Button>
      <Button variant="primaryOutline">outline primary</Button>
      <Button variant="secondry">secondry</Button>
      <Button variant="secondryOutline">outline second</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">outline danger</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">outline super</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar super</Button>
    </div>
  );
};

export default ButtonPage;
