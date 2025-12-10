// TimelineRow.jsx
import React, { useState } from "react";
import MealCluster from "./MealCluster.jsx";
import MealClusterMobile from "./MealClusterMobile.jsx";

function TimelineRow({ hour, mealLogs, onSelectMeal }) {
  return (
    <div className="flex">
      {/* 左カラム：時間 */}
      <div className="w-20 flex items-center text-xl ">{hour}</div>

      {/* 右カラム */}
      <div className="flex-1 py-8 relative pl-6 mr-4 border-l-4 border-slate-600">
        {/* ★ 中央の ●➖（すべての行に表示） */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2.5 flex items-center">
          <div className="w-4 h-4 rounded-full bg-slate-600"></div>
          <div className="w-7 h-1 bg-slate-600"></div>
        </div>
        <div className="hidden md:block">
          <MealCluster mealLogs={mealLogs} onSelectMeal={onSelectMeal} />
        </div>
        <div className="block md:hidden">
          <MealClusterMobile mealLogs={mealLogs} onSelectMeal={onSelectMeal} />
        </div>
      </div>
    </div>
  );
}

export default TimelineRow;
