import { Head, Link } from "@inertiajs/react";
import { Fragment } from "react";
import Food from "./FoodCard.jsx";

export default function Index({ foods, flash }) {
  return (
    <>
      <Head title="Foods" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Foods</h1>
          <Link
            href="/foods/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New food
          </Link>
        </div>

        <div className="min-w-full">
          {foods.map((food) => (
            <div key={food.id} className="py-2">
              <Food food={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
