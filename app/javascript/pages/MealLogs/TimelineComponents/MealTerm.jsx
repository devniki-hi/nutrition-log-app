import { useState } from "react";
import MealCard from "./MealCard.jsx";
const MEAL_SLOTS = [
  { key: "breakfast", label: "朝食", start: 0, end: 10 },
  { key: "lunch", label: "昼食", start: 10, end: 14 },
  { key: "snack", label: "間食", start: 14, end: 18 },
  { key: "dinner", label: "夕食", start: 18, end: 24 },
];

function MealTerm({ mealLogs, totals, onSelectMeal }) {
  const [isMealClusterOpen, setIsMealClusterOpen] = useState({
    breakfast: false,
    lunch: false,
    snack: false,
    dinner: false,
  });
  function getSlotKeyByDate(loggedAt) {
    const hour = new Date(loggedAt).getHours(); // 0〜23
    const slot = MEAL_SLOTS.find((s) => hour >= s.start && hour < s.end);
    return slot?.key ?? "breakfast";
  }
  function groupMealLogs(mealLogs) {
    return mealLogs.reduce(
      (acc, log) => {
        const key = getSlotKeyByDate(log.logged_at);
        (acc[key] ??= []).push(log);
        return acc;
      },
      { breakfast: [], lunch: [], snack: [], dinner: [] }
    );
  }
  function sumKcal(items) {
    return items.reduce((acc, log) => acc + Number(log.intake_kcal ?? 0), 0);
  }
  const grouped = groupMealLogs(mealLogs);
  console.log(grouped);

  // grouped.breakfast -> 朝食のログ配列
  // grouped.lunch     -> 昼食のログ配列
  // grouped.snack     -> 間食のログ配列
  // grouped.dinner    -> 夕食のログ配列

  return (
    <div className="my-2 space-y-6">
      {MEAL_SLOTS.map((slot) => (
        <div key={slot.key} className="rounded-2xl">
          {/* ヘッダ */}
          <div
            className="flex items-center justify-between rounded-2xl bg-slate-600
                px-4 sm:px-5 py-3 sm:py-4 text-white shadow"
          >
            {/* 左側：ラベル＋時間＋合計 */}
            <div className="flex items-baseline gap-2 sm:gap-3">
              <div className="text-sm sm:text-base md:text-lg font-medium">
                {slot.label}
              </div>

              <div className="text-xs sm:text-sm md:text-base">
                ({slot.start}:00〜{slot.end}:00)
              </div>

              <div className="ml-2 text-xs sm:text-sm md:text-base font-normal">
                合計: {sumKcal(grouped[slot.key] ?? []).toFixed(1)} kcal
              </div>
            </div>

            {/* 右側：トグル */}
            <button
              className="text-lg sm:text-xl md:text-2xl leading-none"
              onClick={() =>
                setIsMealClusterOpen((p) => ({
                  ...p,
                  [slot.key]: !p[slot.key],
                }))
              }
              aria-label="toggle"
            >
              {isMealClusterOpen[slot.key] ? "−" : "+"}
            </button>
          </div>

          {/* 展開エリア */}
          {isMealClusterOpen[slot.key] && (
            <div className="rounded-xl border bg-blue-50 p-4 sm:p-6 shadow">
              <div
                className="
                        grid gap-4
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        xl:grid-cols-6
                        place-items-center
                    "
              >
                {(grouped[slot.key] ?? []).map((log) => (
                  <MealCard key={log.id} log={log} onSelect={onSelectMeal} />
                ))}
              </div>

              {(grouped[slot.key] ?? []).length === 0 && (
                <div className="mt-2 text-sm text-slate-500">
                  まだ記録がありません
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MealTerm;
