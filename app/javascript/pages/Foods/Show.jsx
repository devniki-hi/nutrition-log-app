import { Head, Link } from "@inertiajs/react";
import Food from "./Food.jsx";

export default function Show({ food, flash }) {
  return (
    <>
      <Head title={`Food #${food.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Food #{food.id}</h1>

          <Food food={food} />

          <Link
            href={`/foods/${food.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this food
          </Link>
          <Link
            href="/foods"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to foods
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/foods/${food.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this food
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
