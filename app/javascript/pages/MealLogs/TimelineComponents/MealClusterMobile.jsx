import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import MealCard from "./MealCard.jsx";
import SummaryCard from "./SummaryCard.jsx";
import { ScrollBar } from "@/components/ui/scroll-area.jsx";

function MealClusterMobile({ mealLogs, onSelectMeal }) {
  // 合計値集計（totals）
  const totals = mealLogs.reduce(
    (acc, log) => ({
      kcal: acc.kcal + log.intake_kcal,
      protein: acc.protein + log.intake_protein,
      fat: acc.fat + log.intake_fat,
      carbs: acc.carbs + log.intake_carbs,
    }),
    { kcal: 0, protein: 0, fat: 0, carbs: 0 }
  );
  return (
    <div className="bg-blue-50 mx-2 py-2 rounded-md border-2">
      {mealLogs.length !== 0 ? (
        // クラスターが開いている
        // 大きさを制御
        <div className="relative">
          <ScrollArea className="px-2 h-100">
            <div className="flex-col gap-4">
              {/* 合計カード */}
              <div className="px-2 pb-2">
                <SummaryCard totals={totals} />
              </div>
              {/* 食品カード */}
              {mealLogs.map((log) => (
                <div className="px-2 py-2">
                  <MealCard key={log.id} log={log} onSelect={onSelectMeal} />
                </div>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
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

export default MealClusterMobile;
