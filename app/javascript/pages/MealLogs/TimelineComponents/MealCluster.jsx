import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import MealCard from "./MealCard.jsx";
import SummaryCard from "./SummaryCard.jsx";
import { ScrollBar } from "@/components/ui/scroll-area.jsx";

function MealCluster({ mealLogs, onSelectMeal }) {
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
    <div className="bg-blue-50 mx-2 rounded-md border-2 md:w-[50vw] lg:w-[60vw] [@media(min-width:1280px)]:max-w-[100vw] 2xl:w-full">
      {mealLogs.length !== 0 ? (
        // クラスターが開いている
        // 大きさを制御
        <div className="py-5 mx-2 relative">
          <ScrollArea className="w-full">
            <div className="flex">
              {/* 合計カード */}
              <div className="px-2">
                <SummaryCard totals={totals} />
              </div>
              <div className="flex gap-4 px-2">
                {/* 食品カード */}
                {mealLogs.map((log) => (
                  <MealCard key={log.id} log={log} onSelect={onSelectMeal} />
                ))}
              </div>
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

export default MealCluster;
