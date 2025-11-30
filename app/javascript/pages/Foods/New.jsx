import { Head, Link } from "@inertiajs/react";
import Form from "./Form.jsx";

import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { useState } from "react";

export default function New({ food }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head title="New food" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New food</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="rounded-lg px-5 bg-blue-600 text-white block font-medium"
              onClick={() => setOpen(true)}
            >
              New Food
            </Button>
          </DialogTrigger>
          <DialogContent className=" bg-white">
            <DialogHeader>
              <DialogTitle>Create New Food</DialogTitle>
              <DialogDescription>
                Fill in the form below to create a new food.
              </DialogDescription>
            </DialogHeader>
            <Form
              food={food}
              method="post"
              action="/foods"
              submitText="Create Food"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
