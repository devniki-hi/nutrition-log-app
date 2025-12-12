import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import no_image_path from "../../assets/noimage.png";
import HoverRevealText from "@/components/HoverRevealText.jsx";

export default function FoodCard({ food, footerComponent }) {
  return (
    <Card className="bg-white w-full">
      {/* タイトル */}
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold ">
          <HoverRevealText className="w-full flex justify-center">
            {food.name} {food.portion_value} {food.unit_type}
          </HoverRevealText>
          <h2>{food.kcal} kcal</h2>
        </CardTitle>
      </CardHeader>

      {/* 画像 */}
      <CardContent>
        <div className="w-full aspect-square overflow-hidden bg-gray-50">
          <img
            src={food.food_image ? food.food_image : no_image_path}
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>

      {/* ボタン：狭い時は縦並び */}
      <CardFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {footerComponent}
      </CardFooter>
    </Card>
  );
}
