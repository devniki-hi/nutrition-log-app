import { Head } from "@inertiajs/react";
import FoodForm from "./Form.jsx";
import ChatInputPlaceholder from "./ChatInput.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function New({ food }) {
  return (
    <div>
      <Head title="New food" />

      <div className="w-full px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sky-50 shadow-md px-4 py-4 h-full">
            <h2 className="text-xl font-bold mb-4">食品追加（手入力）</h2>
            <FoodForm
              food={food}
              method="post"
              action="/foods"
              submitText="追加"
            />
            <Button
              form="food_form"
              className="w-full mt-4  bg-slate-600 text-white font-medium rounded-lg shadow-md"
              type="submit"
            >
              追加
            </Button>
          </div>

          <div className="bg-sky-50 shadow-md px-4 py-4">
            <ChatInputPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
}
