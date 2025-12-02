import { Head } from "@inertiajs/react";
import FoodForm from "./Form.jsx";
import ChatInputPlaceholder from "./ChatInput.jsx";

export default function New({ food }) {
  return (
    <div>
      <Head title="New food" />

      <div className="w-full px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sky-50 shadow-md px-4 py-4">
            <FoodForm
              food={food}
              method="post"
              action="/foods"
              submitText="追加"
            />
          </div>

          <div className="bg-sky-50 shadow-md px-4 py-4">
            <ChatInputPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
}
