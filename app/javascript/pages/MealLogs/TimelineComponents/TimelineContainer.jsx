// TimelineContainer.jsx
import React, { useEffect, useRef } from "react";
import TimelineRow from "./TimelineRow";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.jsx";

function TimelineContainer({ mealLogs, onSelectMeal, scrollToHour }) {
  const grouped = Array.from({ length: 24 }, () => []);

  mealLogs.forEach((log) => {
    const hour = new Date(log.logged_at).getHours();
    grouped[hour].push(log);
  });

  const scrollTargetHour = scrollToHour ?? new Date().getHours();

  const scrollTargetRef = useRef(null);

  useEffect(() => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [scrollTargetHour]);

  return (
    <ScrollArea className="h-screen p-4 my-2 bg-white border rounded-md">
      {grouped.map((logs, hour) => (
        <div
          key={hour}
          ref={hour === scrollTargetHour ? scrollTargetRef : null}
        >
          {hour === 0 && (
            <div key="startEdge" className="flex">
              <div className="w-20 flex items-center text-xl " />
              <div className="flex-1 py-4 relative pl-6 mr-4 border-l-4 border-slate-600">
                <div className="absolute top-0  -left-2.5">
                  <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                </div>
              </div>
            </div>
          )}
          <TimelineRow
            hour={`${String(hour).padStart(2, "0")}:00`}
            mealLogs={logs}
            onSelectMeal={onSelectMeal}
            isStartEdge={hour === 0}
            isEndEdge={hour === 23}
          />
          {hour === 23 && (
            <div key="endEdge" className="flex">
              <div className="w-20 flex items-center text-xl " />
              <div className="flex-1 py-4 relative pl-6 mr-4 border-l-4 border-slate-600">
                <div className="absolute bottom-0  -left-2.5">
                  <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <ScrollBar />
    </ScrollArea>
  );
}

export default TimelineContainer;
