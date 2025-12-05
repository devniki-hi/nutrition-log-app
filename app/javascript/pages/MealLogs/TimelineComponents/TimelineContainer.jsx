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
    <div className="h-screen overflow-y-scroll p-4 mt-10 mx-10 mb-20 bg-white border rounded-md">
      {grouped.map((logs, hour) => (
        <TimelineRow
          key={hour}
          hour={`${String(hour).padStart(2, "0")}:00`} // ← 修正！！
          mealLogs={logs}
          onSelectMeal={onSelectMeal}
          isFirstRow={hour === 0}
          isLastRow={hour === 23}
        />
      ))}
    </div>
  );
}

export default TimelineContainer;
