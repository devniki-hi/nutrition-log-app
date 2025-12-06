import React, { useState } from "react";
import MealTagList from "./MealTagList.jsx";

function MealCluster({ mealLogs, onSelectMeal }) {
  const [isClickedCluster, setIsClickedCluster] = useState(false);
  return (
    <div className="bg-blue-50 mx-2 rounded-md border-2">
      {/* MealCluster */}
      {isClickedCluster ? (
        // クラスターが開いている
        <div
          className="py-30"
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
        // クラスターが閉じている
        <div
          onClick={() => {
            setIsClickedCluster(true);
          }}
        >
          <MealTagList mealLogs={mealLogs} />
        </div>
      )}
    </div>
  );
}

export default MealCluster;
