// TimelineContainer.jsx
import React from "react";
import TimelineRow from "./TimelineRow";

function TimelineContainer({ mealLogs, onSelectMeal }) {
  // 0〜23 の 24 個の空配列を生成
  const grouped = Array.from({ length: 24 }, () => []);

  // mealLogs を対応する hour に push
  mealLogs.forEach((log) => {
    const hour = new Date(log.logged_at).getHours();
    grouped[hour].push(log);
  });

  return (
    <div className="max-h-screen overflow-y-scroll p-4 m-4">
      <div className=" p-4 bg-white border rounded-md">
        {grouped.map((logs, hour) => (
          <>
            {hour === 0 && (
              <div className="flex">
                <div className="w-20 flex items-center text-xl " />
                <div className="flex-1 py-8 relative pl-6 mr-4 border-l-4 border-slate-600">
                  <div className="absolute top-0  -left-[10px]">
                    <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                  </div>
                </div>
              </div>
            )}
            <TimelineRow
              key={hour}
              hour={`${String(hour).padStart(2, "0")}:00`} // ← 修正！！
              mealLogs={logs}
              onSelectMeal={onSelectMeal}
              isStartEdge={hour === 0}
              isEndEdge={hour === 23}
            />
            {hour === 23 && (
              <div className="flex">
                <div className="w-20 flex items-center text-xl " />
                <div className="flex-1 py-8 relative pl-6 mr-4 border-l-4 border-slate-600">
                  <div className="absolute bottom-0  -left-[10px]">
                    <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default TimelineContainer;
