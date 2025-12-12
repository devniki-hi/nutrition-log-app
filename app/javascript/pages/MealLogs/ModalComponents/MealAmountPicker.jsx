import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function MealAmountPicker({ form, errors }) {
  const preset_percentages = [50, 75, 100, 150, 200, -1];

  const [value, setValue] = useState(String(form.data.intake_rate ?? 100));
  const handleSetAmount = (selected) => {
    if (!selected) return;
    const num = Number(selected);
    form.setData("intake_rate", num);
    setValue(String(num));
  };

  return (
    <div className="flex flex-col my-6">
      <p className="text-sm font-semibold text-slate-700">食べた量を調整</p>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={handleSetAmount}
        className={`flex flex-wrap gap-1 my-1 ${
          errors.intake_rate ? "border border-red-500" : ""
        }`}
      >
        {preset_percentages.map((percentage) => (
          <ToggleGroupItem
            key={percentage}
            value={String(percentage)}
            className="h-8 rounded-full px-3 text-xs border
                       data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            {percentage}%
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {errors.intake_rate?.map((msg, i) => (
        <p key={i} className="text-red-500 text-sm">
          ・{msg.slice(1)}
        </p>
      ))}
    </div>
  );
}
