function DailySummaryBar({ totals }) {
  return (
    <div className="flex items-stretch rounded-xl border border-gray-200 bg-white">
      {/* 合計ラベル */}
      <div
        className="flex items-center justify-center rounded-l-xl bg-slate-600 px-4
                      text-base sm:text-lg text-white"
      >
        合計
      </div>

      {/* 指標エリア */}
      <div className="flex flex-1">
        {/* Cal */}
        <div className="flex flex-1 flex-col px-3">
          <div className="text-xs sm:text-sm text-slate-600">Cal</div>
          <div className="text-base sm:text-lg text-right tabular-nums">
            {Number(totals.kcal ?? 0).toFixed(1)} kcal
          </div>
        </div>

        {/* P */}
        <div className="flex flex-1 flex-col border-l px-3">
          <div className="text-xs sm:text-sm text-slate-600">P</div>
          <div className="text-base sm:text-lg text-right tabular-nums">
            {Number(totals.protein ?? 0).toFixed(1)} g
          </div>
        </div>

        {/* F */}
        <div className="flex flex-1 flex-col border-l px-3">
          <div className="text-xs sm:text-sm text-slate-600">F</div>
          <div className="text-base sm:text-lg text-right tabular-nums">
            {Number(totals.fat ?? 0).toFixed(1)} g
          </div>
        </div>

        {/* C */}
        <div className="flex flex-1 flex-col border-l px-3">
          <div className="text-xs sm:text-sm text-slate-600">C</div>
          <div className="text-base sm:text-lg text-right tabular-nums">
            {Number(totals.carbs ?? 0).toFixed(1)} g
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailySummaryBar;
