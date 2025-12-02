import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";

{
  /* <FoodModal
  open={open}
  setOpen={setOpen}
  modalTriggerText=""
  headerText=""
  headerDescription=""
  component={}
  footerComponent={}
/>; */
}

function FoodModal({
  open,
  setOpen,
  modalTriggerText = "Open",
  headerText,
  headerDescription = "埋めてください",
  component,
  footerComponent = <></>,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-lg px-5 bg-blue-600 text-white block font-medium"
          onClick={() => setOpen(true)}
        >
          {modalTriggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle>{headerText}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        {component}
        <DialogFooter>{footerComponent}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FoodModal;
