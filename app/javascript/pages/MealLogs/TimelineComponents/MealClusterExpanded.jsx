import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import SummaryCard from "./SummaryCard";
import MealCard from "./MealCard";

function MealClusterExpanded({ mealLogs, onSelectMeal }) {
  // 合計値集計（totals）
  const totals = mealLogs.reduce(
    (acc, log) => ({
      kcal: acc.kcal + log.intake_kcal,
      protein: acc.protein + log.intake_protein,
      fat: acc.fat + log.intake_fat,
      carbs: acc.carbs + log.intake_carbs,
    }),
    { kcal: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <div className=" flex">
      {/* 合計カード */}
      <div className="px-2">
        <SummaryCard totals={totals} />
      </div>
      <ScrollArea className="w-140">
        <div className="flex w-max gap-4 px-2">
          {/* 食品カード */}
          {mealLogs.map((log) => (
            <MealCard key={log.id} log={log} onSelect={onSelectMeal} />
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default MealClusterExpanded;
