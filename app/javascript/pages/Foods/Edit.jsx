import { Button } from "@/components/ui/button.jsx";
import { Head, Link } from "@inertiajs/react";
import no_image_path from "../../assets/noimage.png";
import FoodForm from "./Form.jsx";
import { useState } from "react";

export default function Edit({ food, flash }) {
  const [foodImageState, setFoodImageState] = useState(
    food.food_image ? food.food_image : no_image_path
  );
  return (
    <>
      <Head title={`${food.name} 編集`} />

      <div className="w-full px-12 py-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        <div className="flex justify-between mb-6">
          {/* Header */}
          <h1 className="font-bold text-3xl">食品編集</h1>
          <div className=" flex gap-2">
            <Button
              form="food_form"
              type="submit"
              className=" bg-slate-600 text-white font-medium"
            >
              保存
            </Button>

            <Button variant="outline" asChild>
              <Link
                href={`/foods/${food.id}`}
                className=" bg-white text-black font-medium"
              >
                詳細に戻る
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/2 flex flex-col items-center p-8">
            <div className="aspect-square max-w-[420px] max-h-[420px] w-full bg-gray-50 shadow-md rounded-md ">
              <img
                src={foodImageState ? foodImageState : no_image_path}
                alt="food"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2 bg-sky-50 shadow-md rounded-lg p-4 h-auto">
            <FoodForm
              food={food}
              method="patch"
              action={`/foods/${food.id}`}
              setFoodImageState={setFoodImageState}
            />
          </div>
        </div>
      </div>
    </>
  );
}
