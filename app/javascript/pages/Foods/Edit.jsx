import { Head, Link } from "@inertiajs/react";
import Form from "./Form.jsx";

export default function Edit({ food }) {
  return (
    <>
      <Head title="Editing food" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing food</h1>

        <Form
          food={food}
          action={`/foods/${food.id}`}
          method="patch"
          submitText="Update Food"
        />

        <Link
          href={`/foods/${food.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this food
        </Link>
        <Link
          href="/foods"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to foods
        </Link>
      </div>
    </>
  );
}
