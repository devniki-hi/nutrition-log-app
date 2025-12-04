import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "@inertiajs/react";
import { Label } from "@/components/ui/label.jsx";
import { useFoodEnums } from "./useFoodEnums.jsx";

export default function FoodForm({ food, method, action }) {
  const { unit_types, sources } = useFoodEnums();

  const form = useForm({
    name: food?.name ?? "",
    portion_value: food?.portion_value ?? "",
    unit_type: food?.unit_type ?? unit_types[0],
    kcal: food?.kcal ?? "",
    protein: food?.protein ?? "",
    fat: food?.fat ?? "",
    carbs: food?.carbs ?? "",
    sugar: food?.sugar ?? "",
    fiber: food?.fiber ?? "",
    source: food?.source ?? sources[0],
    jan_code: food?.jan_code ?? "",
    note: food?.note ?? "",
  });

  const handleSubmit = (event) => {
    form.transform((data) => ({
      ...data,
      carbs: parseFloat(form.data.sugar) + parseFloat(form.data.fiber),
      source: "manual",
    }));
    console.log(form.data);

    event.preventDefault();
    if (method === "post") {
      form.post(action);
    } else if (method === "patch") {
      form.patch(action);
    }
  };

  return (
    <form
      id="food_form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="space-y-4"
    >
      <div className="flex flex-col gap-1">
        <Label htmlFor="name" className="text-slate-700">
          食品名
        </Label>
        <Input
          id="name"
          className="bg-white"
          value={form.data.name}
          onChange={(e) => form.setData("name", e.target.value)}
        />
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex flex-1 flex-col gap-1">
          <Label htmlFor="portion_value" className="text-slate-700">
            分量
          </Label>
          <Input
            id="portion_value"
            type="number"
            className="bg-white"
            value={form.data.portion_value}
            onChange={(e) => form.setData("portion_value", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="unit_type" className="text-slate-700">
            単位
          </Label>
          <Select
            value={form.data.unit_type}
            onValueChange={(val) => form.setData("unit_type", val)}
          >
            <SelectTrigger id="unit_type" className="bg-white">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {unit_types.map((u) => (
                <SelectItem key={u} value={u}>
                  {u}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <InputField label="kcal" field="kcal" form={form}>
        カロリー
      </InputField>

      <div className="grid grid-cols-2 gap-4">
        <InputField label="protein" field="protein" form={form}>
          プロテイン
        </InputField>
        <InputField label="fat" field="fat" form={form}>
          脂質
        </InputField>
        <InputField label="sugar" field="sugar" form={form}>
          糖質
        </InputField>
        <InputField label="fiber" field="fiber" form={form}>
          食物繊維
        </InputField>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="jan_code" className="text-slate-700">
          JANコード
        </Label>
        <Input
          id="jan_code"
          className="bg-white"
          value={form.data.jan_code}
          onChange={(e) => form.setData("jan_code", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="note" className="text-slate-700">
          メモ
        </Label>
        <Textarea
          id="note"
          className="bg-white"
          value={form.data.note}
          onChange={(e) => form.setData("note", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input id="image" type="file" className="bg-white" />
      </div>
    </form>
  );
}

function InputField({ children, label, field, form }) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={label} className="text-slate-700">
        {children}
      </Label>
      <Input
        id={label}
        type="number"
        className="bg-white"
        value={form.data[field]}
        onChange={(e) => form.setData(field, e.target.value)}
      />
    </div>
  );
}
