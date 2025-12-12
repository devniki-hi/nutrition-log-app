import { Head, Link } from "@inertiajs/react";
import FoodForm from "./Form.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useState } from "react";

import no_image_path from "../../assets/noimage.png";

export default function New({ food }) {
  const [foodImageState, setFoodImageState] = useState(
    food.food_image ? food.food_image : no_image_path
  );
  return (
    <div>
      <Head title="食品追加" />

      <div className="w-full px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl">食品追加</h1>
          <div className=" flex gap-2">
            <Button
              form="food_form"
              type="submit"
              className=" bg-slate-600 text-white font-medium"
            >
              食品を追加
            </Button>

            <Button variant="outline" asChild>
              <Link href="/foods/" className=" bg-white text-black font-medium">
                一覧に戻る
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:flex md:items-center">
          {/* 左：画像エリア */}
          <div className="md:w-1/2 flex flex-col items-center p-8">
            <div className="aspect-square max-w-[420px] max-h-[420px] w-full bg-gray-50 shadow-md rounded-md ">
              <img
                src={foodImageState ? foodImageState : no_image_path}
                alt="food"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 右：編集 */}
          <div className="md:w-1/2 bg-sky-50 shadow-md rounded-lg p-4 h-auto">
            <FoodForm
              food={food}
              method="post"
              action="/foods"
              submitText="追加"
              setFoodImageState={setFoodImageState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
