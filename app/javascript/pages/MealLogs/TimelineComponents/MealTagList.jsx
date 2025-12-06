import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.jsx";
import React from "react";

function MealTagList({ mealLogs }) {
  return (
    <ScrollArea className="w-140 py-4">
      <div className="w-max flex gap-3 ">
        {mealLogs.map((log) => (
          <div key={log.id} className="bg-white border rounded-md px-8">
            {log.food.name}
          </div>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default MealTagList;
