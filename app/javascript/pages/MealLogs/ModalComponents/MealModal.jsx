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

function MealModal({
  open,
  setOpen,
  modalTriggerComponent,
  headerText,
  headerDescription = "埋めてください",
  component,
  footerComponent = <></>,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{modalTriggerComponent}</DialogTrigger>
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

export default MealModal;
