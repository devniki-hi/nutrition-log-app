import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function MealCard({ log, onSelect }) {
  return (
    <Card
      onClick={() => onSelect?.(log)}
      className="
        w-[150px] cursor-pointer
      "
    >
      {/* 食品名 */}
      <CardHeader className="text-center">
        <CardTitle className="font-semibold line-clamp-1">
          {log.food.name}
        </CardTitle>

        <p>{Math.round(log.intake_kcal)} kcal</p>
      </CardHeader>

      {/* P / F / C 栄養表 */}
      <CardContent className="px-4">
        <div className="grid grid-cols-2 text-left leading-6">
          <p>P :</p>
          <p className="text-right">{Math.round(log.intake_protein)} g</p>

          <p>F :</p>
          <p className="text-right">{Math.round(log.intake_fat)} g</p>

          <p>C :</p>
          <p className="text-right">{Math.round(log.intake_carbs)} g</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default MealCard;
