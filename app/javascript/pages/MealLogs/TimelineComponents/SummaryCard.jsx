import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function SummaryCard({ totals }) {
  return (
    <Card
      className="
        w-40
        border-sky-500
      "
    >
      {/* タイトル（合計） */}
      <CardHeader className="text-center">
        <CardTitle className="font-semibold">合計カロリー</CardTitle>

        <p>{Math.round(totals.kcal)} kcal</p>
      </CardHeader>

      {/* P / F / C 表示 */}
      <CardContent className="px-4">
        <div className="grid grid-cols-2 text-left leading-6">
          <p>P :</p>
          <p className="text-right">{Math.round(totals.protein)} g</p>

          <p>F :</p>
          <p className="text-right">{Math.round(totals.fat)} g</p>

          <p>C :</p>
          <p className="text-right">{Math.round(totals.carbs)} g</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
