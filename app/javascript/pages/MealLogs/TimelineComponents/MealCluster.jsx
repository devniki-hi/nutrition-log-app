import MealClusterExpanded from "./MealClusterExpanded.jsx";

function MealCluster({ mealLogs, onSelectMeal }) {
  return (
    <div className="bg-blue-50 mx-2 rounded-md border-2">
      {/* MealCluster */}
      {mealLogs.length !== 0 ? (
        // クラスターが開いている
        <div className="py-10 mx-2 relative">
          <MealClusterExpanded
            mealLogs={mealLogs}
            onSelectMeal={onSelectMeal}
          />
        </div>
      ) : (
        // クラスターが閉じている
        <div className="mx-2">
          <div className="w-max flex gap-3 py-4" />
        </div>
      )}
    </div>
  );
}

export default MealCluster;
