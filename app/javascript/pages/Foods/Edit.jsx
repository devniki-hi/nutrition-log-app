import HoverRevealText from "@/components/HoverRevealText.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Head, Link } from "@inertiajs/react";
import food_image_path from "../../assets/noimage.png";
import FoodForm from "./Form.jsx";

export default function Show({ food, flash }) {
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
                戻る
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:flex md:items-center">
          {/* 左：画像エリア */}
          <div className="md:w-1/2 flex flex-col items-center p-8">
            <div className="aspect-square max-w-[420px] max-h-[420px] w-full bg-gray-50 shadow-md rounded-md ">
              <img
                src={food_image_path}
                alt="food"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 右：編集 */}
          <div className="md:w-1/2 bg-sky-50 shadow-md rounded-lg p-4 h-auto">
            <FoodForm food={food} method="patch" action={`/foods/${food.id}`} />
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border border-gray-200 rounded-md px-3 py-2 bg-slate-50">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
