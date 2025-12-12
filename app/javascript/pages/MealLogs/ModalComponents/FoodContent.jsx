import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card.jsx";
import { useState } from "react";

export default function FoodContent({ food }) {
  const [open, setOpen] = useState(false);
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <Card className="max-w-md mx-auto">
      {/* タイトル */}
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">
          {food.name}
          <br />
          {food.portion_value} {food?.unit_type}
        </CardTitle>
      </CardHeader>

      {/* 内容 */}
      <CardContent className="space-y-4 text-sm">
        {/* 栄養成分表 */}
        <div className="grid grid-cols-2 gap-y-2">
          <div>カロリー</div>
          <div className="text-right">{food.kcal} kcal</div>

          <div>タンパク質</div>
          <div className="text-right">{food.protein} g</div>

          <div>脂質</div>
          <div className="text-right">{food.fat} g</div>

          <div>炭水化物</div>
          <div className="text-right">{food.carbs} g</div>

          <div>糖質</div>
          <div className="text-right">{food.sugar} g</div>

          <div>食物繊維</div>
          <div className="text-right">{food.fiber} g</div>
        </div>

        {/* 備考 */}
        <div className="border-t pt-3 whitespace-pre-line">
          <strong className="block mb-1">備考</strong>
          {food.note}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
