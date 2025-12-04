import { MealAmountPicker } from "./MealAmountPicker.jsx";
import { DateTimePicker } from "./DateTimePicker.jsx";
import FoodContent from "./FoodContent.jsx";
import { useForm } from "@inertiajs/react";

function MealForm({ meal_log = {}, food, method, action, onSuccess }) {
  console.log(meal_log);
  const form = useForm({
    food_id: meal_log.food_id ?? food.id,
    logged_at: meal_log?.logged_at || new Date().toISOString(),
    intake_rate: meal_log?.intake_rate || 100,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (method === "post") {
      form.post(action, onSuccess(onSuccess()));
    } else if (method === "patch") {
      form.patch(action, onSuccess(onSuccess()));
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <form
        id="meal_form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FoodContent food={food} />
        <MealAmountPicker form={form} />

        <DateTimePicker form={form} />
      </form>
    </div>
  );
}

export default MealForm;
