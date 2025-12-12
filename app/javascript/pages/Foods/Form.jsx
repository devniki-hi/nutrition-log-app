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
import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { X } from "lucide-react";

export default function FoodForm({
  food,
  method,
  action,
  setFoodImageState = () => {},
}) {
  const { unit_types, sources } = useFoodEnums();

  const form = useForm({
    name: food?.name ?? "",
    portion_value: food?.portion_value ?? 0,
    unit_type: food?.unit_type ?? unit_types[0],
    kcal: food?.kcal ?? 0,
    protein: food?.protein ?? 0,
    fat: food?.fat ?? 0,
    carbs: food?.carbs ?? 0,
    sugar: food?.sugar ?? 0,
    fiber: food?.fiber ?? 0,
    source: food?.source ?? sources[0],
    jan_code: food?.jan_code ?? "",
    note: food?.note ?? "",
    food_image: null,
    remove_food_image: false,
  });

  const [selectedFileName, setSelectedFileName] = useState(
    food.food_image ? food.food_image.split("/").pop() : ""
  );
  const fieldError = (field) => form.errors?.[field];

  const handleSubmit = (event) => {
    form.transform((data) => ({
      food: {
        ...data,
        carbs: parseFloat(data.sugar) + parseFloat(data.fiber),
        source: "manual",
      },
    }));
    event.preventDefault();
    if (method === "post") {
      form.post(action);
    } else if (method === "patch") {
      console.log(form.data);
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
          className={`bg-white ${fieldError("name") ? "border-red-500" : ""}`}
          value={form.data.name}
          onChange={(e) => form.setData("name", e.target.value)}
        />

        {fieldError("name")?.map((msg, i) => (
          <p key={i} className="text-red-500 text-sm">
            ・{msg.slice(1)}
          </p>
        ))}
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex flex-1 flex-col gap-1">
          <Label htmlFor="portion_value" className="text-slate-700">
            分量
          </Label>
          <Input
            id="portion_value"
            type="number"
            className={`bg-white ${
              fieldError("portion_value") ? "border-red-500" : ""
            }`}
            value={form.data.portion_value}
            onChange={(e) => form.setData("portion_value", e.target.value)}
          />

          {fieldError("portion_value")?.map((msg, i) => (
            <p key={i} className="text-red-500 text-sm">
              ・{msg}
            </p>
          ))}
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
          たんぱく質
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
          className={`bg-white ${
            fieldError("jan_code") ? "border-red-500" : ""
          }`}
          value={form.data.jan_code}
          onChange={(e) => form.setData("jan_code", e.target.value)}
        />

        {fieldError("jan_code")?.map((msg, i) => (
          <p key={i} className="text-red-500 text-sm">
            ・{msg}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="note" className="text-slate-700">
          メモ
        </Label>
        <Textarea
          id="note"
          className={`bg-white ${fieldError("note") ? "border-red-500" : ""}`}
          value={form.data.note}
          onChange={(e) => form.setData("note", e.target.value)}
        />

        {fieldError("note")?.map((msg, i) => (
          <p key={i} className="text-red-500 text-sm">
            {msg.slice(1)}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="food_image" className="text-slate-700">
          画像
        </Label>

        <div className="flex items-center justify-between gap-3">
          {/* 実際の file input（隠す） */}
          <input
            id="food_image"
            type="file"
            className="hidden"
            onChange={(e) => {
              setFoodImageState(URL.createObjectURL(e.target.files[0]));
              form.setData("food_image", e.target.files[0]);
              form.setData("remove_food_image", false);
              setSelectedFileName(e.target.files[0].name);
            }}
          />

          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("food_image").click()}
          >
            ファイルを選択
          </Button>

          <div className="flex items-center">
            <span className="text-sm line-clamp-1">
              {decodeURIComponent(selectedFileName) || "ファイル未選択"}
            </span>
            {selectedFileName && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => {
                  setFoodImageState(null);
                  form.setData("food_image", null);
                  form.setData("remove_food_image", true);
                  setSelectedFileName("");

                  document.getElementById("food_image").value = "";
                }}
              >
                <X className="w-4 h-4 text-red-300" />
              </Button>
            )}
          </div>
        </div>
        {fieldError("food_image")?.map((msg, i) => (
          <p key={i} className="text-red-500 text-sm">
            ・{msg}
          </p>
        ))}
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
        step="0.01"
        className={`bg-white ${form.errors?.[field] ? "border-red-500" : ""}`}
        value={form.data[field]}
        onChange={(e) => form.setData(field, e.target.value)}
      />

      {form.errors?.[field]?.map((msg, i) => (
        <p key={i} className="text-red-500 text-sm">
          ・{msg.slice(1)}
        </p>
      ))}
    </div>
  );
}
