import React, { useState } from "react";
import MealTagList from "./MealTagList.jsx";
import MealClusterExpanded from "./MealClusterExpanded.jsx";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

function MealCluster({ mealLogs, onSelectMeal }) {
  const [isClickCluster, setIsClickCluster] = useState(false);

  return (
    <div className="bg-blue-50 mx-2 rounded-md border-2">
      {/* MealCluster */}
      {isClickCluster && mealLogs.length !== 0 ? (
        // クラスターが開いている
        <div className="py-10 mx-2 relative">
          {/* 閉じるボタン（右上固定） */}
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3"
            onClick={() => {
              setIsClickCluster(!isClickCluster);
            }}
          >
            <X className="w-4 h-4" />
          </Button>

          <MealClusterExpanded
            mealLogs={mealLogs}
            onSelectMeal={onSelectMeal}
          />
        </div>
      ) : (
        // クラスターが閉じている
        <div
          className="mx-2"
          onClick={() => {
            setIsClickCluster(!isClickCluster);
          }}
        >
          <MealTagList mealLogs={mealLogs} />
        </div>
      )}
    </div>
  );
}

export default MealCluster;
