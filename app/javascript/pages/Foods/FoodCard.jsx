import { Link } from "@inertiajs/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import food_image_path from "../../assets/noimage.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HoverRevealText from "@/components/HoverRevealText.jsx";

export default function FoodCard({ food }) {
  return (
    <Card className="bg-white w-full">
      {/* タイトル */}
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold ">
          <HoverRevealText>
            {food.name} {food.portion_value} {food.unit_type}
          </HoverRevealText>
          <h2>{food.kcal} kcal</h2>
        </CardTitle>
      </CardHeader>

      {/* 画像 */}
      <CardContent>
        <div className="w-full aspect-square overflow-hidden bg-gray-50">
          <img
            src={food_image_path}
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>

      {/* ボタン：狭い時は縦並び */}
      <CardFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button className="w-full border-2">食事追加</Button>

        <Button asChild variant="outline" className="w-full">
          <Link href={`/foods/${food.id}`}>詳細</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
