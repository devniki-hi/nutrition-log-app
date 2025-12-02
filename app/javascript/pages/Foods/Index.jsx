import { Head, Link } from "@inertiajs/react";
import FoodCard from "./FoodCard.jsx";

export default function Index({ foods, flash }) {
  return (
    <>
      <Head title="Foods" />

      <div className="w-full pt-8 px-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-4xl">Foods</h1>
          <Link
            href="/foods/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New food
          </Link>
        </div>

        {/* タイルグリッド：画面ごとに列数を変更 */}
        {/*
          sm: 1列（スマホ） → 1×16
          md: 2列
          lg: 4列（中画面） → 4×4
        */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
        >
          {foods.map((food) => (
            <div key={food.id}>
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
