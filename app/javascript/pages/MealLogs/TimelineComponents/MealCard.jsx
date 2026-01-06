import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function MealCard({ log, onSelect }) {
  return (
    <Card onClick={() => onSelect?.(log)} className="w-40 cursor-pointer">
      {/* 食品名 */}
      <CardHeader className="text-center">
        <CardTitle className="font-semibold line-clamp-1">
          {log.food.name}
        </CardTitle>

        <p>{Number(log.intake_kcal ?? 0).toFixed(1)} kcal</p>
      </CardHeader>

      {/* P / F / C 栄養表 */}
      <CardContent className="px-4">
        <div className="grid grid-cols-2 text-left leading-6">
          <p>P :</p>
          <p className="text-right">
            {Number(log.intake_protein ?? 0).toFixed(1)} g
          </p>

          <p>F :</p>
          <p className="text-right">
            {Number(log.intake_fat ?? 0).toFixed(1)} g
          </p>

          <p>C :</p>
          <p className="text-right">
            {Number(log.intake_carbs ?? 0).toFixed(1)} g
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default MealCard;
