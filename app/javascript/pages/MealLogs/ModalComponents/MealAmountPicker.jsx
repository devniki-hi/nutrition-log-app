import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function MealAmountPicker({ form }) {
  const preset_percentages = [50, 75, 100, 150, 200];

  // form.data.intake_rate を初期値に使う（数字 → 文字列）
  const [value, setValue] = useState(String(form.data.intake_rate ?? 100));
  console.log(form.data.intake_rate);
  const handleSetAmount = (selected) => {
    if (!selected) return;

    // ToggleGroup の value は string なので number に変換
    const num = Number(selected);

    // form にセット
    form.setData("intake_rate", num);

    // 内部 state も更新
    setValue(String(num));
  };

  return (
    <div className="flex flex-col my-6">
      <p className="text-sm font-semibold text-slate-700">食べた量を調整</p>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={handleSetAmount}
        className="flex flex-wrap gap-1 my-1"
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
    </div>
  );
}
