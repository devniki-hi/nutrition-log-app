// TimelineRow.jsx
import React, { useState } from "react";

function TimelineRow({ hour, mealLogs, onSelectMeal, isStartEdge, isEndEdge }) {
  const [isClickedCluster, setIsClickedCluster] = useState(false);
  return (
    <div className="flex">
      {/* 左カラム：時間 */}
      <div className="w-20 flex items-center text-xl ">{hour}</div>

      {/* 右カラム */}
      <div className="flex-1 py-8 relative pl-6 mr-4 border-l-4 border-slate-600">
        {/* ★ 中央の ●➖（すべての行に表示） */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-[10px] flex items-center">
          <div className="w-4 h-4 rounded-full bg-slate-600"></div>
          <div className="w-7 h-1 bg-slate-600"></div>
        </div>

        {/* MealCluster */}
        {isClickedCluster ? (
          <div
            className="bg-blue-50 mx-2 py-20 rounded-md border-2"
            onClick={() => {
              setIsClickedCluster(false);
            }}
          >
            {mealLogs.length === 0 && (
              <span className="text-gray-400 text-sm">ログなし</span>
            )}

            {mealLogs.map((log) => (
              <span
                key={log.id}
                className="underline cursor-pointer mr-2 text-sm"
                onClick={() => onSelectMeal?.(log)}
              >
                {log.food.name}
              </span>
            ))}
          </div>
        ) : (
          <div
            className="bg-blue-50 mx-2 py-2 rounded-md border-2"
            onClick={() => {
              setIsClickedCluster(true);
            }}
          >
            {mealLogs.length === 0 && (
              <span className="text-gray-400 text-sm">ログなし</span>
            )}

            {mealLogs.map((log) => (
              <span
                key={log.id}
                className="underline cursor-pointer mr-2 text-sm"
                onClick={() => onSelectMeal?.(log)}
              >
                {log.food.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineRow;
