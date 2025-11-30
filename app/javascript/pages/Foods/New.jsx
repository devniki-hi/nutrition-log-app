import { Head, Link } from "@inertiajs/react";
import Form from "./Form.jsx";

import { Button } from "@/components/ui/button.jsx";
import { useState } from "react";
import FoodModal from "./FoodModal.jsx";
import FoodForm from "./Form.jsx";

export default function New({ food }) {
  const [open, setOpen] = useState(false);
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Head title="New food" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New food</h1>
        <FoodModal
          open={open}
          setOpen={setOpen}
          modalTriggerText="食品を追加する"
          headerText="食品追加"
          headerDescription="食品情報を入れてください"
          component={
            <FoodForm
              food={food}
              method="post"
              action="/foods"
              onSuccess={handleModalClose}
            />
          }
          footerComponent={
            <Button
              form="food_form"
              type="submit"
              className="w-full mt-2 bg-sky-100 hover:bg-sky-200 text-slate-700 rounded-lg shadow-md"
            >
              追加
            </Button>
          }
        />
      </div>
    </div>
  );
}
