import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // ← こっちに統一

import React from "react";

function MealClusterExpanded({ mealLogs, onSelectMeal }) {
  return (
    <ScrollArea className="w-140">
      <div className="flex w-max gap-3 px-2 py-1">
        {mealLogs.map((log) => (
          <div
            key={log.id}
            className="bg-white border rounded-md px-8 py-1 whitespace-nowrap"
            onClick={() => onSelectMeal?.(log)}
          >
            {log.food.name}
          </div>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default MealClusterExpanded;
